/**
 * find the two entries that sum to 2020 and then multiply those two numbers together
 *
 * @param data
 */

export const day1 = (data: number[]): number | null => {
  if (data.length < 2) throw new Error("invalid Input");
  const descending = data.sort((a, b) => b - a);

  for (const num of descending) {
    const filtered: number[] = descending.filter((n) => n + num <= 2020);
    for (const filteredNum of filtered) {
      if (filteredNum + num === 2020) {
        console.log(
          `*** Found! ${num} * ${filteredNum} = ${num * filteredNum}`
        );
        return filteredNum * num;
      }
    }
  }
  return null;
};
