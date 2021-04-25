export function day5(data: string[]): number {
  const seatIds: number[] = data.map((pattern) => {
    const rowPattern: string = pattern.slice(0, 7);
    const colPattern: string = pattern.slice(7);
    const row: number = getRowNumber(rowPattern);
    const col: number = getColNumber(colPattern);
    return row * 8 + col;
  });
  return maximum(seatIds);
}

// not DRY but easy to understand!
function getRowNumber(patternStr: string): number {
  const accumulator = [0, 128];
  const patternArr: string[] = patternStr.split("");
  patternArr.forEach((token) => {
    const temp = (accumulator[1] - accumulator[0]) / 2;
    if (token === "F") {
      accumulator[1] = accumulator[0] + temp;
    } else if (token === "B") {
      accumulator[0] = accumulator[1] - temp;
    } else throw new Error("Invalid Token");
  });
  return accumulator[0];
}

function getColNumber(patternStr: string): number {
  const accumulator = [0, 8];
  const patternArr: string[] = patternStr.split("");
  patternArr.forEach((token) => {
    const temp = (accumulator[1] - accumulator[0]) / 2;
    if (token === "L") {
      accumulator[1] = accumulator[0] + temp;
    } else if (token === "R") {
      accumulator[0] = accumulator[1] - temp;
    } else throw new Error("Invalid Token");
  });
  return accumulator[0];
}

function maximum(arr: number[]): number {
  return arr.reduce(
    (accumulator, currVal) =>
      (accumulator = currVal > accumulator ? currVal : accumulator),
    0
  );
}

export function day5part2(data: string[]): number {
  const myPossibleSeadId = [];
  const seatIds: number[] = data
    .map((pattern) => {
      const rowPattern: string = pattern.slice(0, 7);
      const colPattern: string = pattern.slice(7);
      const row: number = getRowNumber(rowPattern);
      const col: number = getColNumber(colPattern);
      return row * 8 + col;
    })
    .sort((a, b) => a - b);

  for (let i = 0; i < seatIds.length; i++) {
    if (i === 0 || i === seatIds.length - 1) continue;
    const prevVal = seatIds[i - 1];
    const currVal = seatIds[i];
    if (currVal - prevVal !== 1) myPossibleSeadId.push(prevVal + 1);
  }
  return myPossibleSeadId[0];
}
