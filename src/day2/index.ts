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

interface DayTwoPropTypes {
  lowerLimit: number;
  higherLimit: number;
  alphabet: string;
  password: string;
}
