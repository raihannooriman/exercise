// var countSheep = function (num) {
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result += i + " sheep...";
//   }
//   return result;
// };

// var countSheep = function (num) {
//   return [...Array(num)].map((e, i) => `${++i} sheep...`).join("");
// };

var countSheep = (num) =>
  [...Array(num)].map((_, i) => `${++i} sheep...`).join("");

console.log(countSheep(3));
