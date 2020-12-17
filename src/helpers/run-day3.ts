import { promises as fs } from "fs";

export async function runDay3(dataFilePath: string, callback: any) {
  try {
    const dataStr = await fs.readFile(dataFilePath);
    const dataArr = dataStr.toString().split("\n");

    return callback(dataArr);
  } catch (e) {
    console.error(e);
  }
}
