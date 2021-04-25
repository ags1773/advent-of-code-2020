import { promises as fs } from "fs";

export async function runDay4(dataFilePath: string, callback: any) {
  try {
    const data = await fs.readFile(dataFilePath);
    const dataArr = data
      .toString()
      .split("\n\n")
      // .slice(0,1)
      .map((passport) => {
        const fields = passport.split(/ |\n/);
        const obj = {
          byr: parse("byr:", fields, "num"),
          iyr: parse("iyr:", fields, "num"),
          eyr: parse("eyr:", fields, "num"),
          hgt: parse("hgt:", fields, "str"),
          hcl: parse("hcl:", fields, "str"),
          ecl: parse("ecl:", fields, "str"),
          pid: parse("pid:", fields, "num"),
          cid: parse("cid:", fields, "num"),
        };
        return obj;
      });

    return callback(dataArr);
  } catch (e) {
    console.error(e);
  }
}

const parse = (re: string, arr: string[], type: string) => {
  const regex = RegExp(re);
  const found = arr.find((el) => regex.test(el));
  if (!found) return null;
  if (type === "num") {
    const output = Number(found.slice(4));
    return isNaN(output) ? null : output;
  }
  return found.slice(4);
};
