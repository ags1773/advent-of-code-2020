export function day6(answersArr: string[][]) {
  let counter = 0;
  answersArr.map((groupAnswers: string[]) => {
    const groupAccumulator: string[] = [];
    groupAnswers.map((groupMemberAnswers: string) => {
      groupMemberAnswers.split("").forEach((answer: string) => {
        if (!groupAccumulator.includes(answer)) groupAccumulator.push(answer);
      });
    });
    counter += groupAccumulator.length;
  });
  return counter;
}

export function day6part2(answersArr: string[][]) {
  let counter: number = 0;
  answersArr.map((groupAnswers: string[]) => {
    groupAnswers.sort((a, b) => a.length - b.length);
    const answersToCompareWith: string[] = groupAnswers[0].split("");
    const accumulator: string[] = [];
    answersToCompareWith.forEach((answer: string) => {
      const remainingAnswers: string[] = groupAnswers.slice(1);
      const shouldIncludeAnswer = remainingAnswers.every((answers) =>
        answers.includes(answer)
      );
      if (shouldIncludeAnswer) accumulator.push(answer);
    });
    counter += accumulator.length;
  });
  return counter;
}
