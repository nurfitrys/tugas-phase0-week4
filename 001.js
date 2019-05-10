/*
===================================
Array Mastery: Plus Minus Operation
===================================
Nama:________
[INSTRUKSI]
Akan dijalankan sebuah operasi matematika dengan urutan kali (+) dan kurang (-).
Function plusMinusProcess akan menerima satu parameter berupa array angka, dan memproses satu per satu angka tersebut.
Proses yang dilakukan adalah mengoperasikan setiap bilangan didalamnya, menggunakan simbol +, dan - berturut-turut.
Simbol akan berotasi kembali ke + jika operasi - sudah dilakukan, sampai semua angka selesai di proses.
Gambaran Proses:
0 + angka pertama - angka kedua + angka ketiga - angka keempat + angka kelima - angka keenam + ... (dan seterusnya)
Function akan mereturn hasil kalkulasi dari operasi tersebut.
Jika tidak ada angka yang diberikan, function akan me-return 0.
[CONTOH]
input: [1, 2, 3, 4, 5]
proses: 0 + 1 - 2 + 3 - 4 + 5
output: 3
input: [5, 4, 3, 2, 1, 2]
proses: 0 + 5 - 4 + 3 - 2 + 1 - 2
output: 1
input: [1, 1, 1, 1]
proses: 0 + 1 - 1 + 1 - 1
output: 0
input: []
proses: 0
output: 0
[RULE]
- WAJIB menuliskan PSEUDOCODE / ALGORITMA. Tidak ada / tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/

/*
PSEUDOCODE/ALGORITMA

Buat sebuah variable genap dengan nilai 0
Buat sebuah variable ganjil denga nilai 0
Lakukan looping dengan menggunakan variable i dan pertambahan 1
Buat sebuah kondisi
  Jika i habis dibagi 2 maka genap ditambah number ke [i]
  Jika i tidak habis dibagi 2 maka ganjil dikurang number ke [i]
Tampilkan genap ditambah ganjil

*/

function plusMinusProcess(numbers) {
  var genap = 0
  var ganjil = 0
  for(i=0; i<numbers.length; i++){
    if (i%2===0){
      genap += numbers[i]
    } else{
      ganjil -= numbers[i]
    }
  }
  return genap + ganjil
}
  
// TEST CASES
console.log(plusMinusProcess([1, 2, 3, 4, 5])); // 3
console.log(plusMinusProcess([5, 4, 3, 2, 1, 2])); // 1
console.log(plusMinusProcess([1, 1, 1, 1])); // 0
console.log(plusMinusProcess([0, 10, 2, 5, 7])); // -6
