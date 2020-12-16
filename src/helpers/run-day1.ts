import { promises as fs } from "fs";

export async function runDay1(
  dataFilePath: string,
  callback: any,
  ...rest: any
) {
  try {
    const dataStr = await fs.readFile(dataFilePath);
    const dataArr: number[] = dataStr
      .toString()
      .split("\n")
      .map((val) => Number(val));
    return callback(dataArr, ...rest);
  } catch (e) {
    console.error(e);
  }
}
