// Exercises 5 - Ubah Huruf

function ubahHuruf(kata) {
  var baru = 'abcdefghijklmnopqrstuvwxyz'
  var hasil = ''
  for (i = 0; i <= kata.length-1; i++) {
    for (j = 0; j <= baru.length-1; j++) {
      if (kata[i] == baru[j]) {
        hasil += baru[j+1]
      }
    }
  } return hasil
}

console.log(ubahHuruf('wow'));
console.log(ubahHuruf('developer'));
console.log(ubahHuruf('javascript'));
console.log(ubahHuruf('keren'));
console.log(ubahHuruf('semangat'));
