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
          `*** Found! ${num} + ${filteredNum} = 2020\n product = ${
            num * filteredNum
          }`
        );
        return filteredNum * num;
      }
    }
  }
  return null;
};

/**
 * find three numbers in your expense report that meet the same criteria as above
 * not proud of this code :(
 *
 * @param data data array
 */
export const dayOnePartTwo = (data: number[]): number | null => {
  const descending = data.sort((a, b) => b - a);
  for (const num1 of descending) {
    const filtered1: number[] = descending.filter((n) => n + num1 <= 2020);
    for (const num2 of filtered1) {
      const filtered2: number[] = filtered1.filter(
        (n) => n + num1 + num2 <= 2020
      );
      for (const filteredNum of filtered2) {
        if (filteredNum + num1 + num2 === 2020) {
          console.log(
            `*** Found! ${filteredNum} + ${num1} + ${num2} = 2020\n product = ${
              filteredNum * num1 * num2
            }`
          );
          return filteredNum * num1 * num2;
        }
      }
    }
  }
  console.log("Can't find anything!");
  return null;
};
