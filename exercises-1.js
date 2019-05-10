// Exercises 1 - Angka Prima

function angkaPrima(angka) {
  var prima = true
  for (i = 2; i < angka; i++) {
    if (angka % i == 0) {
      return false
    }
  } return prima
}

console.log(angkaPrima(3));
console.log(angkaPrima(7));
console.log(angkaPrima(6));
console.log(angkaPrima(23));
console.log(angkaPrima(33));
