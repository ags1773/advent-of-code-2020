const assert = require("assert");
const path = require("path");
const helpers = require("../../dist/helpers");
const main = require("../../dist/day6");

const { runDay6 } = helpers;
const { day6, day6part2 } = main;

describe("Day 6", () => {
  it("should work with test input", async () => {
    const output = await runDay6(
      path.join(__dirname, "../../data/day6/test-input"),
      day6
    );
    assert.strictEqual(output, 11);
  });
  it("should work with input", async () => {
    const output = await runDay6(
      path.join(__dirname, "../../data/day6/input"),
      day6
    );
    assert.strictEqual(output, 6703);
  });
});

describe("Day 6 part 2", () => {
  it("should work with test input", async () => {
    const output = await runDay6(
      path.join(__dirname, "../../data/day6/test-input"),
      day6part2
    );
    assert.strictEqual(output, 6);
  });
  it("should work with input", async () => {
    const output = await runDay6(
      path.join(__dirname, "../../data/day6/input"),
      day6part2
    );
    assert.strictEqual(output, 3430);
  });
});
