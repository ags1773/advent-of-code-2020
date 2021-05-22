import { promises as fs } from "fs";

export async function runDay6(dataFilePath: string, callback: any) {
  try {
    const data = await fs.readFile(dataFilePath);
    const dataArr = data.toString().split("\n\n").map(el => el.split("\n"))
    return callback(dataArr);
  } catch (e) {
    console.error(e);
  }
}
