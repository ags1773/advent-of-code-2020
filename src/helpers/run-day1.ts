import { promises as fs } from "fs";

export const runDay1 = async (
  dataFilePath: string,
  callback: (arg: any) => any
) => {
  try {
    const dataStr = await fs.readFile(dataFilePath);
    const dataArr: number[] = dataStr
      .toString()
      .split("\n")
      .map((val) => Number(val));
    return callback(dataArr);
  } catch (e) {
    console.error(e);
  }
};
