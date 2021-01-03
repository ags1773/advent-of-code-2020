export const day4 = (data: PassportDataTypes[]): number => {
  return data
    .map((passportData: PassportDataTypes) => {
      const { byr, iyr, eyr, hgt, hcl, ecl, pid, cid } = passportData;
      return !!(byr && iyr && eyr && hgt && hcl && ecl && pid);
    })
    .reduce((a, curr) => (curr ? (a = a + 1) : a), 0);
};

interface PassportDataTypes {
  byr: string | null;
  iyr: string | null;
  eyr: string | null;
  hgt: string | null;
  hcl: string | null;
  ecl: string | null;
  pid: string | null;
  cid: number | null;
}
