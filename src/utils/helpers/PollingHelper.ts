/**
 * Polling helper with intelligent backoff and stop conditions
 * Adaptive polling for status checks, webhooks, etc.
 */

export interface PollingOptions<T = unknown> {
    interval?: number;
    maxAttempts?: number;
    maxDuration?: number;
    backoffMultiplier?: number;
    maxBackoffInterval?: number;
    stopCondition?: (result: T) => boolean;
    onAttempt?: (attempt: number, result?: T, error?: Error) => void;
    onSuccess?: (result: T, attempts: number) => void;
    onError?: (error: Error, attempts: number) => void;
}

export interface PollingResult<T = unknown> {
    success: boolean;
    result?: T;
    error?: Error;
    attempts: number;
    duration: number;
}

/**
 * Polling helper for repeated operations with backoff
 */
export class PollingHelper<T = unknown> {
    private fn: () => Promise<T>;
    private options: Required<PollingOptions<T>>;
    private abortController: AbortController | null = null;

    constructor(fn: () => Promise<T>, options: PollingOptions<T> = {}) {
        this.fn = fn;
        this.options = {
            interval: options.interval ?? 1000,
            maxAttempts: options.maxAttempts ?? Infinity,
            maxDuration: options.maxDuration ?? Infinity,
            backoffMultiplier: options.backoffMultiplier ?? 1,
            maxBackoffInterval: options.maxBackoffInterval ?? 30000,
            stopCondition: options.stopCondition ?? (() => true),
            onAttempt: options.onAttempt ?? (() => {}),
            onSuccess: options.onSuccess ?? (() => {}),
            onError: options.onError ?? (() => {}),
        };
    }

    /**
     * Start polling
     */
    async start(): Promise<PollingResult<T>> {
        const startTime = Date.now();
        let attempt = 0;
        let currentInterval = this.options.interval;
        let lastError: Error | undefined;
        let lastResult: T | undefined;

        while (attempt < this.options.maxAttempts) {
            const elapsed = Date.now() - startTime;
            if (elapsed > this.options.maxDuration) {
                return {
                    success: false,
                    error: new Error("Polling timeout exceeded"),
                    attempts: attempt,
                    duration: elapsed,
                };
            }

            attempt++;

            try {
                lastResult = await this.fn();
                this.options.onAttempt(attempt, lastResult);

                if (this.options.stopCondition(lastResult)) {
                    this.options.onSuccess(lastResult, attempt);
                    return {
                        success: true,
                        result: lastResult,
                        attempts: attempt,
                        duration: Date.now() - startTime,
                    };
                }
            } catch (error) {
                lastError =
                    error instanceof Error ? error : new Error(String(error));
                this.options.onAttempt(attempt, undefined, lastError);
            }

            if (attempt < this.options.maxAttempts) {
                await this.delay(currentInterval);
                currentInterval = Math.min(
                    currentInterval * this.options.backoffMultiplier,
                    this.options.maxBackoffInterval
                );
            }
        }

        this.options.onError(
            lastError || new Error("Max attempts exceeded"),
            attempt
        );
        return {
            success: false,
            error: lastError || new Error("Max attempts exceeded"),
            attempts: attempt,
            duration: Date.now() - startTime,
        };
    }

    /**
     * Start polling with abort capability
     */
    async startWithAbort(): Promise<PollingResult<T>> {
        this.abortController = new AbortController();
        return this.start();
    }

    /**
     * Abort polling
     */
    abort(): void {
        this.abortController?.abort();
    }

    /**
     * Delay helper
     */
    private delay(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    /**
     * Poll until condition is met
     */
    static async poll<T>(
        fn: () => Promise<T>,
        options: PollingOptions<T> = {}
    ): Promise<PollingResult<T>> {
        const poller = new PollingHelper(fn, options);
        return poller.start();
    }

    /**
     * Poll with exponential backoff
     */
    static async pollWithBackoff<T>(
        fn: () => Promise<T>,
        options: PollingOptions<T> = {}
    ): Promise<PollingResult<T>> {
        const poller = new PollingHelper(fn, {
            ...options,
            backoffMultiplier: options.backoffMultiplier ?? 2,
            maxBackoffInterval: options.maxBackoffInterval ?? 30000,
        });
        return poller.start();
    }

    /**
     * Poll with linear backoff
     */
    static async pollWithLinearBackoff<T>(
        fn: () => Promise<T>,
        options: PollingOptions<T> = {}
    ): Promise<PollingResult<T>> {
        const poller = new PollingHelper(fn, {
            ...options,
            backoffMultiplier: options.backoffMultiplier ?? 1.5,
        });
        return poller.start();
    }
}

/**
 * Factory function for creating pollers
 */
export function createPoller<T = unknown>(
    fn: () => Promise<T>,
    options?: PollingOptions<T>
): PollingHelper<T> {
    return new PollingHelper(fn, options);
}
