function divide(divisor: number, dividend: number): number {
  return divisor / dividend;
}

function doTheThing(): void {
  const divisor = 15;
  const dividend = 5;

  const result = divide(dividend, divisor);
  console.warn(result);
}

function countPositiveNumbers(arr: number[], countZero?: boolean) {
  // ...
}

function testNoEmptyArray() {
  const strings: string[] = [];

  if (strings.indexOf("foo") != -1) {}  // Noncompliant

  for (const str of strings) {}  // Noncompliant

  strings.forEach(str => console.log(str)); // Noncompliant
}

function testNoIdenticalConditions() {
  const param = Math.floor(Math.random() * 2);
  if (param == 1)
    console.log(42);
  else if (param == 2)
    console.warn(42);
  else if (param == 1)  // Noncompliant
    console.log(42);
}
