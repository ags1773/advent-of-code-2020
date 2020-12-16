import { promises as fs } from "fs";

export async function runDay2(dataFilePath: string, callback: any) {
  try {
    const dataStr = await fs.readFile(dataFilePath);
    const dataArr = dataStr
      .toString()
      .split("\n")
      .map((entry) => {
        const [passwordPolicy, password] = entry.split(": ");
        const [limits, alphabet] = passwordPolicy.split(" ");
        const [lowerLimit, higherLimit] = limits.split("-");
        const dataObj = {
          lowerLimit: Number(lowerLimit),
          higherLimit: Number(higherLimit),
          alphabet,
          password,
        };
        return dataObj;
      });
    return callback(dataArr);
  } catch (e) {
    console.error(e);
  }
}
