// Exercises 6 - Perkalian Minimum

function digitPerkalianMinimum(angka) {
  var hasilBagi = []
  var hasil = []
  for (i = 1; i <= angka; i++) {
    if (angka % i == 0) {
      hasilBagi.push(i)
    }
  }
  var pembagi = hasilBagi.length / 2
  for (j = 0; j < hasilBagi.length; j++) {
    hasil.push(hasilBagi[pembagi] + '' + hasilBagi[pembagi-1]);
  }
  if (angka < 2) {
    return angka + 1
  }
  return hasil[0].length
}

console.log(digitPerkalianMinimum(24));
console.log(digitPerkalianMinimum(90));
console.log(digitPerkalianMinimum(20));
console.log(digitPerkalianMinimum(179));
console.log(digitPerkalianMinimum(1));
