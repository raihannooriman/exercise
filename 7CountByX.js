// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//   return z;
// }

// function countBy(x, n) {
//   return [...Array(n)].map((e, i) => (i + 1) * x);
// }

var countBy = (x, n) => [...Array(n)].map((e, i) => ++i * x);

console.log(countBy(3, 5));
