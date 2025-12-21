import test from "node:test";
import assert from "node:assert/strict";
import { RateLimiter, SlidingWindowRateLimiter } from "../dist/index.js";

test("RateLimiter allows requests within limit", () => {
    const limiter = new RateLimiter({ maxRequests: 3, windowMs: 1000 });

    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
});

test("RateLimiter blocks requests exceeding limit", () => {
    const limiter = new RateLimiter({ maxRequests: 2, windowMs: 1000 });

    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api.example.com/users"), false);
});

test("RateLimiter refills tokens over time", async () => {
    const limiter = new RateLimiter({ maxRequests: 1, windowMs: 100 });

    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api.example.com/users"), false);

    await new Promise((resolve) => setTimeout(resolve, 120));

    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
});

test("RateLimiter provides statistics", () => {
    const limiter = new RateLimiter({ maxRequests: 5, windowMs: 1000 });

    limiter.isAllowed("https://api.example.com/users");
    limiter.isAllowed("https://api.example.com/users");

    const stats = limiter.getStats("https://api.example.com/users");
    assert.equal(stats.limit, 5);
    assert.equal(stats.remaining, 3);
});

test("RateLimiter separates limits by hostname", () => {
    const limiter = new RateLimiter({ maxRequests: 1, windowMs: 1000 });

    assert.equal(limiter.isAllowed("https://api1.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api2.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api1.example.com/users"), false);
});

test("RateLimiter can be reset", () => {
    const limiter = new RateLimiter({ maxRequests: 1, windowMs: 1000 });

    limiter.isAllowed("https://api.example.com/users");
    assert.equal(limiter.isAllowed("https://api.example.com/users"), false);

    limiter.reset("https://api.example.com/users");
    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
});

test("SlidingWindowRateLimiter allows requests within limit", () => {
    const limiter = new SlidingWindowRateLimiter({
        maxRequests: 3,
        windowMs: 1000,
    });

    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
});

test("SlidingWindowRateLimiter blocks requests exceeding limit", () => {
    const limiter = new SlidingWindowRateLimiter({
        maxRequests: 2,
        windowMs: 1000,
    });

    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api.example.com/users"), false);
});

test("SlidingWindowRateLimiter resets after window expires", async () => {
    const limiter = new SlidingWindowRateLimiter({
        maxRequests: 1,
        windowMs: 100,
    });

    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
    assert.equal(limiter.isAllowed("https://api.example.com/users"), false);

    await new Promise((resolve) => setTimeout(resolve, 120));

    assert.equal(limiter.isAllowed("https://api.example.com/users"), true);
});
