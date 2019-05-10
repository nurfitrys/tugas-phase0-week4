// Exercises 8 - Ubah Ukuran Huruf

function tukarBesarKecil(kalimat) {
  var baru = ''
  for (i = 0; i <= kalimat.length-1; i++) {
    if (kalimat[i] == kalimat[i].toUpperCase()) {
      baru += kalimat[i].toLowerCase()
    } else {
      baru += kalimat[i].toUpperCase()
    }
  } return baru
}

console.log(tukarBesarKecil('Hello World'));
console.log(tukarBesarKecil('I aM aLAY'));
console.log(tukarBesarKecil('My Name is Bond!!'));
console.log(tukarBesarKecil('IT sHOULD bE me'));
console.log(tukarBesarKecil('001-A-3-5TrdYW'));
