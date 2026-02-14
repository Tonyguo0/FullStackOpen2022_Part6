const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = numbers;
const newNumbers = [first, second, ...rest, 11];

console.log(first);
console.log(second);
console.log(rest);
console.log(newNumbers);
