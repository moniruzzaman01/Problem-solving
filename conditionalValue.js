let arr = [
  23, 345, 4564, 47, 345, 64, 45, 756, 34, 234, 667, 5, 2, 46, 7, 9, 3,
];
let newArr = [];
for (const a of arr) {
  if (a > 100) {
    newArr.push(a);
  }
}
console.log(newArr);
