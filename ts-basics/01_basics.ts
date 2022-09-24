let userName: string = "Vincent";
let hasLoggedIn: boolean = true;

// hasLoggedIn += " Lau";

console.log(hasLoggedIn);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Vincent",
  last: "Lau",
};

// Utility type
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

if (ids[30] === "D") {
}

for (let index = 0; index < 10; index++) {
  console.log(index);
}

[1, 2, 3].forEach((v) => console.log(v));
const out: number[] = [4, 5, 6].map((v) => 10 * v);
const out2: string[] = [4, 5, 6].map((v) => `${10 * v}`);
