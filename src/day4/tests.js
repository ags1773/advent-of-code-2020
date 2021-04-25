const assert = require("assert");
const path = require("path");
const helpers = require("../../dist/helpers");
const main = require("../../dist/day4");

const { runDay4 } = helpers;
const { day4, day4Part2 } = main;

// describe("Day 4", () => {
//   it("should work with test input", async () => {
//     const output = await runDay4(
//       path.join(__dirname, "../../data/day4/test-input"),
//       day4
//     );
//     assert.strictEqual(output, 2);
//   });
//   it("should work with input", async () => {
//     const output = await runDay4(
//       path.join(__dirname, "../../data/day4/input"),
//       day4
//     );
//     assert.strictEqual(output, 237);
//   });
// });

describe("Day 4 part 2", () => {
  it("should work with test input", async () => {
    const output = await runDay4(
      path.join(__dirname, "../../data/day4/test-input-part2"),
      day4Part2
    );
    assert.strictEqual(output, 0);
  });
  // it("should work with input", async () => {
  //   const output = await runDay4(
  //     path.join(__dirname, "../../data/day4/input"),
  //     day4Part2
  //   );
  //   assert.strictEqual(output, 111);
  // });
});
