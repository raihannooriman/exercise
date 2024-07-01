// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
//   if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
//   if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
//   return "Player 2 won!";
// };

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   if (
//     (p1 === "rock" && p2 === "scissors") ||
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "paper" && p2 === "rock")
//   )
//     return "Player 1 won!";
//   return "Player 2 won!";
// };

// const rps = (p1, p2) =>
//   p1 === p2
//     ? "Draw!"
//     : (p1 === "rock" && p2 === "scissors") ||
//       (p1 === "scissors" && p2 === "paper") ||
//       (p1 === "paper" && p2 === "rock")
//     ? "Player 1 won!"
//     : "Player 2 won!";

// var rps = (p1, p2) => {
//   var r = {
//     rock: "scissors",
//     scissors: "paper",
//     paper: "rock",
//   };
//   return p1 === p2 ? "Draw!" : "Player " + (r[p1] === p2 ? 1 : 2) + " won!";
// };

rps = (a, b) =>
  a === b ? "Draw!" : `Player ${/rp|ps|sr/.test(a[0] + b[0]) ? 2 : 1} won!`;

console.log(rps("rock", "rock"));
