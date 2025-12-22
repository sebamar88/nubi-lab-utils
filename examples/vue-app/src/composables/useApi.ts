import { ref, onMounted, onUnmounted, Ref } from "vue";
import { createApiClient } from "bytekit";
import type { ApiClientConfig } from "bytekit";

export function useApiClient(config: ApiClientConfig) {
    const client = createApiClient(config);
    return client;
}

export function useApiQuery<T>(
    client: ReturnType<typeof createApiClient>,
    url: string
) {
    const data: Ref<T | null> = ref(null);
    const loading = ref(true);
    const error: Ref<string | null> = ref(null);
    let cancelled = false;

    async function fetchData() {
        try {
            loading.value = true;
            const response = await client.get<T>(url);
            if (!cancelled) {
                data.value = response;
                error.value = null;
            }
        } catch (err) {
            if (!cancelled) {
                error.value =
                    err instanceof Error ? err.message : "Unknown error";
            }
        } finally {
            if (!cancelled) {
                loading.value = false;
            }
        }
    }

    onMounted(() => {
        fetchData();
    });

    onUnmounted(() => {
        cancelled = true;
    });

    return { data, loading, error, refetch: fetchData };
}
