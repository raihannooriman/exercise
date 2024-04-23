// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

const reverseSeq = (n) => [...Array(n)].map((e, i) => n - i);
console.log(reverseSeq(5));
