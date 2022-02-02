function paperRequirements(a, b, c) {
  const noOFPageInFistBook = 100;
  const noOFPageInSecondBook = 200;
  const noOFPageInThirdBook = 300;
  totalPage =
    noOFPageInFistBook * a + noOFPageInSecondBook * b + noOFPageInThirdBook * c;
  return totalPage;
}

let firstBook = 5;
let secondBook = 1;
let thirdBook = 1;
const result = paperRequirements(firstBook, secondBook, thirdBook);
console.log("Total pages required:",result);
