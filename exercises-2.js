// Exercises 2 - Persekutuan Terbesar

function fpb (angka1, angka2) {
  for (i = angka1; i > 0; i--){
    if(angka1 % i == 0 && angka2 % i == 0){
      return i
    }
  }
}

console.log(fpb(12, 16));
console.log(fpb(50, 40)); 
console.log(fpb(22, 99)); 
console.log(fpb(24, 36)); 
console.log(fpb(17, 23)); 
