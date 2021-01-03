export const day3 = (data: string[]): number => {
  return checkTrees({
    data,
    down: 1,
    right: 3,
  });
};

export const day3Part2 = (data: string[]): number => {
  const r1d1 = checkTrees({ data, right: 1, down: 1 });
  const r3d1 = checkTrees({ data, right: 3, down: 1 });
  const r5d1 = checkTrees({ data, right: 5, down: 1 });
  const r7d1 = checkTrees({ data, right: 7, down: 1 });
  const r1d2 = checkTrees({ data, right: 1, down: 2 });

  return r1d1 * r3d1 * r5d1 * r7d1 * r1d2;
};

const checkTrees = ({ data, down, right }: CheckTreesProps): number => {
  let numberOfTreesEncountered = 0;
  let ptr = 0;
  for (const [idx, row] of data.entries() as any) {
    if (idx % down !== 0) continue;
    if (row[ptr] === "#") numberOfTreesEncountered++;
    ptr = ptr + right;
    ptr = ptr % row.length;
  }
  return numberOfTreesEncountered;
};

interface CheckTreesProps {
  data: string[];
  down: number;
  right: number;
}
