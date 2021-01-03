// right 3, down 1. How many trees would you encounter?

export const day3 = (data: string[]): number => {
  let numberOfTreesEncountered = 0;
  let ptr = 0;
  for (const row of data) {
    if (row[ptr] === "#") numberOfTreesEncountered++;
    ptr = ptr + 3;
    ptr = ptr % row.length;
  }
  return numberOfTreesEncountered;
};
