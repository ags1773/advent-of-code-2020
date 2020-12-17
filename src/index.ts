import { runDay1, runDay2, runDay3 } from "./helpers";
import { day1, dayOnePartTwo } from "./day1";
import { day2, day2Part2 } from "./day2";
import { day3 } from "./day3";
import path from "path";

// runDay1(path.join(__dirname, "../data/day1/input"), day1);
// runDay1(path.join(__dirname, "../data/day1/input"), dayOnePartTwo);

// runDay2(path.join(__dirname, "../data/day2/input"), day2);
// runDay2(path.join(__dirname, "../data/day2/input"), day2Part2);

runDay3(path.join(__dirname, "../data/day3/test-input"), day3);
