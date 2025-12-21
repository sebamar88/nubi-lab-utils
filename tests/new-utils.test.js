import test from "node:test";
import assert from "node:assert/strict";
import {
    EventEmitter,
    createEventEmitter,
    DiffUtils,
    PollingHelper,
    createPoller,
    CryptoUtils,
    PaginationHelper,
    createPaginator,
    CacheManager,
    createCacheManager,
    CompressionUtils,
} from "../dist/index.js";

// ============================================================================
// EventEmitter Tests
// ============================================================================

test("EventEmitter registers and emits events", async () => {
    const emitter = new EventEmitter();
    let received = null;

    emitter.on("test", (data) => {
        received = data;
    });

    await emitter.emit("test", { message: "hello" });
    assert.deepEqual(received, { message: "hello" });
});

test("EventEmitter supports once listeners", async () => {
    const emitter = new EventEmitter();
    let count = 0;

    emitter.once("test", () => {
        count++;
    });

    await emitter.emit("test", null);
    await emitter.emit("test", null);

    // Note: once listeners are called but the handler is removed after first emit
    // However, the listener is still in the eventMap, so we check if it was called once
    assert.equal(count, 1);
});

test("EventEmitter removes listeners", async () => {
    const emitter = new EventEmitter();
    let count = 0;

    const handler = () => {
        count++;
    };

    emitter.on("test", handler);
    emitter.off("test", handler);

    await emitter.emit("test", null);
    assert.equal(count, 0);
});

test("EventEmitter emits synchronously", () => {
    const emitter = new EventEmitter();
    let received = null;

    emitter.on("test", (data) => {
        received = data;
    });

    const result = emitter.emitSync("test", { message: "sync" });
    assert.equal(result, true);
    assert.deepEqual(received, { message: "sync" });
});

test("EventEmitter tracks listener count", () => {
    const emitter = new EventEmitter();

    emitter.on("test", () => {});
    emitter.on("test", () => {});

    assert.equal(emitter.listenerCount("test"), 2);
});

test("EventEmitter factory function works", () => {
    const emitter = createEventEmitter();
    assert.ok(emitter instanceof EventEmitter);
});

// ============================================================================
// DiffUtils Tests
// ============================================================================

test("DiffUtils detects changed fields", () => {
    const old = { name: "John", age: 30 };
    const new_ = { name: "Jane", age: 30 };

    const diff = DiffUtils.diff(old, new_);
    assert.deepEqual(diff.changed, ["name"]);
    assert.deepEqual(diff.added, []);
    assert.deepEqual(diff.removed, []);
});

test("DiffUtils detects added fields", () => {
    const old = { name: "John" };
    const new_ = { name: "John", age: 30 };

    const diff = DiffUtils.diff(old, new_);
    assert.deepEqual(diff.added, ["age"]);
});

test("DiffUtils detects removed fields", () => {
    const old = { name: "John", age: 30 };
    const new_ = { name: "John" };

    const diff = DiffUtils.diff(old, new_);
    assert.deepEqual(diff.removed, ["age"]);
});

test("DiffUtils creates patches", () => {
    const old = { name: "John", age: 30 };
    const new_ = { name: "Jane", age: 31, email: "jane@example.com" };

    const patches = DiffUtils.createPatch(old, new_);
    assert.ok(patches.length > 0);
    assert.ok(patches.some((p) => p.op === "replace"));
    assert.ok(patches.some((p) => p.op === "add"));
});

test("DiffUtils applies patches", () => {
    const old = { name: "John", age: 30 };
    const patches = [
        { op: "replace", path: "name", value: "Jane" },
        { op: "add", path: "email", value: "jane@example.com" },
    ];

    const result = DiffUtils.applyPatch(old, patches);
    assert.equal(result.name, "Jane");
    assert.equal(result.email, "jane@example.com");
});

test("DiffUtils deep equals objects", () => {
    assert.equal(DiffUtils.deepEqual({ a: 1 }, { a: 1 }), true);
    assert.equal(DiffUtils.deepEqual({ a: 1 }, { a: 2 }), false);
    assert.equal(DiffUtils.deepEqual({ a: { b: 1 } }, { a: { b: 1 } }), true);
});

// ============================================================================
// PollingHelper Tests
// ============================================================================

test("PollingHelper polls until condition is met", async () => {
    let attempts = 0;
    const poller = new PollingHelper(
        async () => {
            attempts++;
            return attempts >= 3;
        },
        {
            interval: 10,
            stopCondition: (result) => result === true,
        }
    );

    const result = await poller.start();
    assert.equal(result.success, true);
    assert.equal(result.attempts, 3);
});

test("PollingHelper respects max attempts", async () => {
    const poller = new PollingHelper(async () => false, {
        interval: 10,
        maxAttempts: 3,
        stopCondition: () => false,
    });

    const result = await poller.start();
    assert.equal(result.success, false);
    assert.equal(result.attempts, 3);
});

test("PollingHelper applies backoff", async () => {
    let attempts = 0;
    const poller = new PollingHelper(
        async () => {
            attempts++;
            return attempts >= 2;
        },
        {
            interval: 10,
            backoffMultiplier: 2,
            stopCondition: (result) => result === true,
        }
    );

    const result = await poller.start();
    assert.equal(result.success, true);
});

test("PollingHelper factory function works", async () => {
    const poller = createPoller(async () => true, { interval: 10 });
    assert.ok(poller instanceof PollingHelper);
});

// ============================================================================
// CryptoUtils Tests
// ============================================================================

test("CryptoUtils generates tokens", () => {
    const token1 = CryptoUtils.generateToken(32);
    const token2 = CryptoUtils.generateToken(32);

    assert.equal(token1.length, 64); // 32 bytes = 64 hex chars
    assert.notEqual(token1, token2);
});

test("CryptoUtils generates UUIDs", () => {
    const uuid1 = CryptoUtils.generateUUID();
    const uuid2 = CryptoUtils.generateUUID();

    assert.match(
        uuid1,
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
    assert.notEqual(uuid1, uuid2);
});

test("CryptoUtils base64 encodes and decodes", () => {
    const original = "Hello, World!";
    const encoded = CryptoUtils.base64Encode(original);
    const decoded = CryptoUtils.base64Decode(encoded);

    assert.equal(decoded, original);
});

test("CryptoUtils URL-safe base64 encodes", () => {
    const original = "Hello+World/Test=";
    const encoded = CryptoUtils.base64UrlEncode(original);

    assert.equal(encoded.includes("+"), false);
    assert.equal(encoded.includes("/"), false);
    assert.equal(encoded.includes("="), false);
});

test("CryptoUtils hashes strings", async () => {
    const hash1 = await CryptoUtils.hash("password");
    const hash2 = await CryptoUtils.hash("password");

    assert.equal(hash1, hash2);
    assert.ok(hash1.length > 0);
});

test("CryptoUtils verifies hashes", async () => {
    const hash = await CryptoUtils.hash("password");
    const valid = await CryptoUtils.verifyHash("password", hash);

    assert.equal(valid, true);
});

test("CryptoUtils constant-time compares strings", () => {
    assert.equal(CryptoUtils.constantTimeCompare("test", "test"), true);
    assert.equal(CryptoUtils.constantTimeCompare("test", "fail"), false);
});

// ============================================================================
// PaginationHelper Tests
// ============================================================================

test("PaginationHelper paginates with offset mode", () => {
    const items = Array.from({ length: 25 }, (_, i) => i + 1);
    const paginator = new PaginationHelper(items, {
        pageSize: 10,
        mode: "offset",
    });

    const page1 = paginator.getCurrentPage();
    assert.equal(page1.length, 10);
    assert.deepEqual(page1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("PaginationHelper navigates pages", () => {
    const items = Array.from({ length: 25 }, (_, i) => i + 1);
    const paginator = new PaginationHelper(items, { pageSize: 10 });

    paginator.next();
    const page2 = paginator.getCurrentPage();
    assert.deepEqual(page2, [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

    paginator.previous();
    const page1 = paginator.getCurrentPage();
    assert.deepEqual(page1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("PaginationHelper tracks state", () => {
    const items = Array.from({ length: 25 }, (_, i) => i + 1);
    const paginator = new PaginationHelper(items, { pageSize: 10 });

    const state = paginator.getState();
    assert.equal(state.currentPage, 1);
    assert.equal(state.pageSize, 10);
    assert.equal(state.total, 25);
    assert.equal(state.totalPages, 3);
    assert.equal(state.hasNextPage, true);
    assert.equal(state.hasPreviousPage, false);
});

test("PaginationHelper factory function works", () => {
    const items = [1, 2, 3];
    const paginator = createPaginator(items, { pageSize: 10 });
    assert.ok(paginator instanceof PaginationHelper);
});

// ============================================================================
// CacheManager Tests
// ============================================================================

test("CacheManager stores and retrieves values", () => {
    const cache = new CacheManager();

    cache.set("key1", "value1");
    assert.equal(cache.get("key1"), "value1");
});

test("CacheManager respects TTL", async () => {
    const cache = new CacheManager();

    cache.set("key1", "value1", 50);
    assert.equal(cache.get("key1"), "value1");

    await new Promise((resolve) => setTimeout(resolve, 100));
    assert.equal(cache.get("key1"), null);
});

test("CacheManager tracks statistics", () => {
    const cache = new CacheManager();

    cache.set("key1", "value1");
    cache.get("key1"); // hit
    cache.get("key2"); // miss

    const stats = cache.getStats();
    assert.equal(stats.hits, 1);
    assert.equal(stats.misses, 1);
});

test("CacheManager get or compute pattern", async () => {
    const cache = new CacheManager();
    let computeCount = 0;

    const value1 = await cache.getOrCompute("key1", async () => {
        computeCount++;
        return "computed";
    });

    const value2 = await cache.getOrCompute("key1", async () => {
        computeCount++;
        return "computed";
    });

    assert.equal(value1, "computed");
    assert.equal(value2, "computed");
    assert.equal(computeCount, 1); // Only computed once
});

test("CacheManager factory function works", () => {
    const cache = createCacheManager();
    assert.ok(cache instanceof CacheManager);
});

// ============================================================================
// CompressionUtils Tests
// ============================================================================

test("CompressionUtils compresses and decompresses", () => {
    const original = "Hello World Hello World";
    const compressed = CompressionUtils.compress(original);
    const decompressed = CompressionUtils.decompress(compressed);

    assert.equal(decompressed, original);
});

test("CompressionUtils base64 encodes and decodes", () => {
    const original = "Hello, World!";
    const encoded = CompressionUtils.base64Encode(original);
    const decoded = CompressionUtils.base64Decode(encoded);

    assert.equal(decoded, original);
});

test("CompressionUtils minifies JSON", () => {
    const json = '{ "name": "John", "age": 30 }';
    const minified = CompressionUtils.minifyJSON(json);

    assert.ok(minified.length <= json.length);
    assert.equal(minified.includes("\n"), false);
});

test("CompressionUtils pretty prints JSON", () => {
    const json = '{"name":"John","age":30}';
    const pretty = CompressionUtils.prettyJSON(json, 2);

    assert.ok(pretty.includes("\n"));
    assert.ok(pretty.includes("  "));
});

test("CompressionUtils calculates compression ratio", () => {
    const original = "Hello World Hello World Hello World";
    const compressed = CompressionUtils.compress(original);
    const ratio = CompressionUtils.getCompressionRatio(original, compressed);

    assert.ok(ratio >= 0);
    assert.ok(ratio <= 100);
});

test("CompressionUtils formats bytes", () => {
    assert.equal(CompressionUtils.formatBytes(0), "0 Bytes");
    assert.ok(CompressionUtils.formatBytes(1024).includes("KB"));
    assert.ok(CompressionUtils.formatBytes(1024 * 1024).includes("MB"));
});
