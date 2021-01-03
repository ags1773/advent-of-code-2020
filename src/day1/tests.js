const assert = require("assert");
const path = require("path");
const helpers = require("../../dist/helpers");
const main = require("../../dist/day1");

const { runDay1 } = helpers;
const { day1, dayOnePartTwo } = main;

describe("Day 1 - Part One", () => {
  it("should work with test input", async () => {
    const output = await runDay1(
      path.join(__dirname, "../../data/day1/test-input"),
      day1
    );
    assert.strictEqual(output, 514579);
  });
  it("should work with input", async () => {
    const output = await runDay1(
      path.join(__dirname, "../../data/day1/input"),
      day1
    );
    assert.strictEqual(output, 889779);
  });
});

describe("Day 1 - Part Two", () => {
  it("should work with test input", async () => {
    const output = await runDay1(
      path.join(__dirname, "../../data/day1/test-input"),
      dayOnePartTwo
    );
    assert.strictEqual(output, 241861950);
  });
  it("should work with input", async () => {
    const output = await runDay1(
      path.join(__dirname, "../../data/day1/input"),
      dayOnePartTwo
    );
    assert.strictEqual(output, 76110336);
  });
});
