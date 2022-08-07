// Sum Numbers
// function sum(numbers) {
//   "use strict";
//     if(numbers === [' ']){
//       console.log(0);
//     } else {
//       let total = 0;
//       for(let i = 0; i < numbers.length; i ++){
//         total = total + numbers[i];
//       }
//       console.log(total);
//     };
// };

// sum([ ]);

// function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
//   let rna = dna.replace(/T/g, 'U');
//   console.log(rna);
// }

// DNAtoRNA('GCATGATT');

function opposite(num){
  return num > 0? -num: num;
}
opposite(4);