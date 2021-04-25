export const day4 = (data: PassportDataTypes[]): number => {
  return data
    .map((passportData: PassportDataTypes) => {
      const { byr, iyr, eyr, hgt, hcl, ecl, pid, cid } = passportData;
      return !!(byr && iyr && eyr && hgt && hcl && ecl && pid);
    })
    .reduce((a, curr) => (curr ? (a = a + 1) : a), 0);
};

export const day4Part2 = (data: PassportDataTypes[]): number => {
  const mapOutput: boolean[] = data.map(
    (passportData: PassportDataTypes): boolean => {
      const { byr, iyr, eyr, hgt, hcl, ecl, pid, cid } = passportData;
      const requiredFieldsPresent = !!(
        byr &&
        iyr &&
        eyr &&
        hgt &&
        hcl &&
        ecl &&
        pid
      );
      if (!requiredFieldsPresent) return false;
      const areFieldsValid = validate(passportData);
      return areFieldsValid;
    }
  );
  console.log(mapOutput)
  return mapOutput.reduce((a, curr) => (curr ? (a = a + 1) : a), 0);
};

function validate(passportData: PassportDataTypes): boolean {
  console.log("*** Inside validate, ", passportData)
  // const { byr, iyr, eyr, hgt, hcl, ecl, pid, cid } = passportData;
  let isValid: boolean = true;

  for (const [key, value] of Object.entries(passportData)) {
    switch (key) {
      case "byr":
        if (!value || typeof value !== "number" || value < 1920 || value > 2002)
          isValid = false;
          console.log("Invalid byr")
        break;
      case "iyr":
        if (!value || typeof value !== "number" || value < 2010 || value > 2020)
          isValid = false;
          console.log("Invalid iyr")
        break;
      case "eyr":
        if (!value || typeof value !== "number" || value < 2020 || value > 2030)
          isValid = false;
          console.log("Invalid eyr")
        break;
      case "hgt":
        if (!value || typeof value !== "string") {
          isValid = false;
          console.log("Invalid hgt")
          break;
        }
        const unit = value.slice(-2);
        const height = Number(value.slice(0, -2));
        if (unit === "cm" && (height < 150 || height > 193)) {
          isValid = false;
          console.log("Invalid hgt")
          break;
        }
        if (unit === "in" && (height < 59 || height > 76)) isValid = false;
        console.log("Invalid hgt")
        break;
      case "hcl":
        const isValidHairColor = /^\#[0-9a-f]{6}$/.test(value);
        if (!isValidHairColor) isValid = false;
        console.log("Invalid hcl")
        break;
      case "ecl":
        const acceptableValues = [
          "amb",
          "blu",
          "brn",
          "gry",
          "grn",
          "hzl",
          "oth",
        ];
        if (!acceptableValues.includes(value)) isValid = false;
        console.log("Invalid ecl")
        break;
      case "pid":
        const passportNum = Number(value);
        if (isNaN(passportNum) || passportNum > 999999999) isValid = false;
        console.log("Invalid pid")
        break;
    }
  }
  return isValid;
}

interface PassportDataTypes {
  byr: number | null;
  iyr: number | null;
  eyr: number | null;
  hgt: string | null;
  hcl: string | null;
  ecl: string | null;
  pid: number | null;
  cid: number | null;
}

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.
