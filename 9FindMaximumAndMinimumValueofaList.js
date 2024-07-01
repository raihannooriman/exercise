// var min = function (list) {
//   let min = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (min > list[i]) {
//       min = list[i];
//     }
//   }
//   return min;
// };
//
// var max = function (list) {
//   let max = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (max < list[i]) {
//       max = list[i];
//     }
//   }
//   return max;
// };

// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

const min = (list) => Math.min(...list),
  max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
