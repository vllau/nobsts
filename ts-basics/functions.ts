export function addNumbers(a: number, b: number): number {
  return a + b;
}

// export function addStrings(str1: string, str2: string): string {
//   return `${str1} ${str2}`;
// }

export const addStrings = (str1: string, str2: string): string =>
  `${str1} ${str2}`;

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void =>
  console.log(`${title} ${param}`);

export const fetchData = (url: String): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

// ? is the optional chaining operator, checks user is defined before we dereference
// ?? null coalescing operatior
export function getName(user: {first: string; last: string}): string {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`
}

// Types are enforced during compile time not runtime
// module.exports = addNumbers;
