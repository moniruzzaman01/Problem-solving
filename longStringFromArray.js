let arr = [
  "tonmoy",
  "shakib",
  "murad",
  "abir",
  "saikat",
  "anik",
  "tanisha",
  "moniruzzaman",
  "akib",
  "motin",
  "babul",
];

let longStrLn = arr[0].length;
let longStr = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (longStrLn < arr[i].length) {
    longStr = arr[i];
  } else {
    longStr = longStr;
  }
}
console.log("Long name of my friend is:",longStr);
