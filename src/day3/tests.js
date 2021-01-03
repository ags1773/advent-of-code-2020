const assert = require("assert");
const path = require("path");
const helpers = require("../../dist/helpers");
const main = require("../../dist/day3");

const { runDay3 } = helpers;
const { day3, day3Part2 } = main;

describe("Day 3", () => {
  it("should work with test input", async () => {
    const output = await runDay3(
      path.join(__dirname, "../../data/day3/test-input"),
      day3
    );
    assert.strictEqual(output, 7);
  });
  it("should work with input", async () => {
    const output = await runDay3(
      path.join(__dirname, "../../data/day3/input"),
      day3
    );
    assert.strictEqual(output, 292);
  });
});

describe("Day 3 Part 2", () => {
  it("should work with test input", async () => {
    const output = await runDay3(
      path.join(__dirname, "../../data/day3/test-input"),
      day3Part2
    );
    assert.strictEqual(output, 336);
  });
  it("should work with input", async () => {
    const output = await runDay3(
      path.join(__dirname, "../../data/day3/input"),
      day3Part2
    );
    assert.strictEqual(output, 9354744432);
  });
});
