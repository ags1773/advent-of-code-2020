const assert = require("assert");
const path = require("path");
const helpers = require("../../dist/helpers");
const main = require("../../dist/day5");

const { runDay5 } = helpers;
const { day5, day5part2 } = main;

describe("Day 5", () => {
  it("should work with test input", async () => {
    const output = await runDay5(
      path.join(__dirname, "../../data/day5/test-input"),
      day5
    );
    assert.strictEqual(output, 820);
  });
  it("should work with input", async () => {
    const output = await runDay5(
      path.join(__dirname, "../../data/day5/input"),
      day5
    );
    assert.strictEqual(output, 965);
  });
});

describe("Day 5 Part 2", () => {
  it("should work with input", async () => {
    const output = await runDay5(
      path.join(__dirname, "../../data/day5/input"),
      day5part2
    );
    assert.strictEqual(output, 524);
  });
});
