// Exercises 14 - Naik Angkot

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F']
  var biaya = 2000
  var hasil = []
  
  for (i = 0; i < arrPenumpang.length; i++) {
    var object = {};
    object.penumpang = arrPenumpang[i][0]
    object.naikDari = arrPenumpang[i][1]
    object.tujuan = arrPenumpang[i][2]
    object.bayar = biaya * (rute.indexOf(object.tujuan) - rute.indexOf(object.naikDari))
    
    hasil.push(object)
  }
  if (arrPenumpang.length == 0) {
    return []
  }
  return hasil
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));
