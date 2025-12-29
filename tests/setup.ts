/**
 * Jest setup file for wiki documentation system tests
 * Configures property-based testing with fast-check
 */

import fc from "fast-check";

// Configure fast-check for property-based testing
fc.configureGlobal({
  numRuns: 100, // Minimum 100 iterations per property test as specified in design
  verbose: true,
  seed: 42, // Reproducible tests
});

// Global test utilities for wiki system
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidWikiStructure(): R;
      toPreserveBilingualContent(): R;
    }
  }
}

// Custom matchers for wiki-specific assertions
expect.extend({
  toBeValidWikiStructure(received: any) {
    // Custom matcher implementation will be added when needed
    const pass = typeof received === "object" && received !== null;
    return {
      message: () => `expected ${received} to be a valid wiki structure`,
      pass,
    };
  },

  toPreserveBilingualContent(received: any) {
    // Custom matcher implementation will be added when needed
    const pass = received && received.en && received.es;
    return {
      message: () => `expected ${received} to preserve bilingual content`,
      pass,
    };
  },
});

export {};
