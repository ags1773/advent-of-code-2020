import { promises as fs } from "fs";

export async function runDay4(dataFilePath: string, callback: any) {
  try {
    const data = await fs.readFile(dataFilePath);
    const dataArr = data
      .toString()
      .split("\n\n")
      .map((passport) => {
        const fields = passport.split(/ |\n/);
        const obj = {
          byr: parse("byr:", fields),
          iyr: parse("iyr:", fields),
          eyr: parse("eyr:", fields),
          hgt: parse("hgt:", fields),
          hcl: parse("hcl:", fields),
          ecl: parse("ecl:", fields),
          pid: parse("pid:", fields),
          cid: parse("cid:", fields),
        };
        return obj;
      });

    return callback(dataArr);
  } catch (e) {
    console.error(e);
  }
}

const parse = (re: string, arr: string[]) => {
  const regex = RegExp(re);
  const str = arr.find((el) => regex.test(el));
  return str ? str.slice(4) : null;
};
