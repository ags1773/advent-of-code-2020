const assert = require("assert");
const path = require("path");
const helpers = require("../../dist/helpers");
const main = require("../../dist/day2");

const { runDay2 } = helpers;
const { day2, day2Part2 } = main;

describe("Day 2 - Part One", () => {
  it("should work with test input", async () => {
    const output = await runDay2(
      path.join(__dirname, "../../data/day2/test-input"),
      day2
    );
    assert.strictEqual(output, 2);
  });
  it("should work with input", async () => {
    const output = await runDay2(
      path.join(__dirname, "../../data/day2/input"),
      day2
    );
    assert.strictEqual(output, 586);
  });
});

describe("Day 2 - Part Two", () => {
  it("should work with test input", async () => {
    const output = await runDay2(
      path.join(__dirname, "../../data/day2/test-input"),
      day2Part2
    );
    assert.strictEqual(output, 1);
  });
  it("should work with test input", async () => {
    const output = await runDay2(
      path.join(__dirname, "../../data/day2/input"),
      day2Part2
    );
    assert.strictEqual(output, 352);
  });
});
