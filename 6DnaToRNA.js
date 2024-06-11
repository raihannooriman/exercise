// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "T") {
//       rna += "U";
//     } else {
//       rna += dna[i];
//     }
//   }
//   return rna;
// }

// console.log(DNAtoRNA("TTTT"));

// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i] === "T" ? "U" : dna[i];
//   }
//   return rna;
// }

// function DNAtoRNA(dna) {
//   return dna
//     .split("")
//     .map((el) => (el === "T" ? "U" : el))
//     .join("");
// }

const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

console.log(DNAtoRNA("TTTT"));
