import test from "node:test";
import assert from "node:assert/strict";
import { ResponseValidator } from "../dist/index.js";

test("ResponseValidator validates object structure", () => {
  const schema = {
    type: "object",
    properties: {
      id: { type: "number", required: true },
      name: { type: "string", required: true },
      email: { type: "string", pattern: /.+@.+\..+/ },
    },
  };

  const validData = { id: 1, name: "John", email: "john@example.com" };
  const errors = ResponseValidator.validate(validData, schema);
  assert.equal(errors.length, 0);
});

test("ResponseValidator detects missing required fields", () => {
  const schema = {
    type: "object",
    properties: {
      id: { type: "number", required: true },
      name: { type: "string", required: true },
    },
  };

  const invalidData = { id: 1 };
  const errors = ResponseValidator.validate(invalidData, schema);
  assert.equal(errors.length, 1);
  assert.match(errors[0].message, /required/i);
});

test("ResponseValidator validates array items", () => {
  const schema = {
    type: "array",
    items: {
      type: "object",
      properties: {
        id: { type: "number", required: true },
        status: { type: "string", enum: ["active", "inactive"] },
      },
    },
  };

  const validData = [
    { id: 1, status: "active" },
    { id: 2, status: "inactive" },
  ];
  const errors = ResponseValidator.validate(validData, schema);
  assert.equal(errors.length, 0);
});

test("ResponseValidator validates string patterns", () => {
  const schema = {
    type: "string",
    pattern: /^[A-Z][a-z]+$/,
  };

  const validData = "John";
  const errors = ResponseValidator.validate(validData, schema);
  assert.equal(errors.length, 0);

  const invalidData = "john";
  const invalidErrors = ResponseValidator.validate(invalidData, schema);
  assert.equal(invalidErrors.length, 1);
});

test("ResponseValidator validates number ranges", () => {
  const schema = {
    type: "number",
    minimum: 0,
    maximum: 100,
  };

  const validData = 50;
  const errors = ResponseValidator.validate(validData, schema);
  assert.equal(errors.length, 0);

  const invalidData = 150;
  const invalidErrors = ResponseValidator.validate(invalidData, schema);
  assert.equal(invalidErrors.length, 1);
});

test("ResponseValidator supports custom validation", () => {
  const schema = {
    type: "object",
    properties: {
      password: {
        type: "string",
        custom: (value) => {
          if (typeof value === "string" && value.length >= 8) {
            return true;
          }
          return "Password must be at least 8 characters";
        },
      },
    },
  };

  const validData = { password: "securepass123" };
  const errors = ResponseValidator.validate(validData, schema);
  assert.equal(errors.length, 0);

  const invalidData = { password: "short" };
  const invalidErrors = ResponseValidator.validate(invalidData, schema);
  assert.equal(invalidErrors.length, 1);
  assert.match(invalidErrors[0].message, /at least 8 characters/);
});
