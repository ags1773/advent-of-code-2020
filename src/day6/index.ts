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
