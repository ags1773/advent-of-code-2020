export const day2 = (data: DayTwoPropTypes[]): number => {
  let validPasswords = 0;
  data.forEach((entry: DayTwoPropTypes) => {
    const { lowerLimit, higherLimit, alphabet, password } = entry;
    const arr = password.split("").filter((el) => el === alphabet);
    if (arr.length >= lowerLimit && arr.length <= higherLimit) validPasswords++;
  });
  console.log(`Number of valid passwords >> ${validPasswords}`);
  return validPasswords;
};

export const day2Part2 = (data: DayTwoPropTypes[]): number => {
  let validPasswords = 0;
  data.forEach((entry: DayTwoPropTypes) => {
    const { lowerLimit, higherLimit, alphabet, password } = entry;
    const alphabet1 = password[lowerLimit - 1];
    const alphabet2 = password[higherLimit - 1];
    if (
      (alphabet1 === alphabet && alphabet2 !== alphabet) ||
      (alphabet1 !== alphabet && alphabet2 === alphabet)
    ) {
      validPasswords++;
    }
  });

  console.log(`Number of valid passwords >> ${validPasswords}`);
  return validPasswords;
};

interface DayTwoPropTypes {
  lowerLimit: number;
  higherLimit: number;
  alphabet: string;
  password: string;
}
