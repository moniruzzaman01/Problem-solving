function getArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

const result = getArea(3, 4, 5);
console.log("Area of triangle:", result);
