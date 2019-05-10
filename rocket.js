/*
==================================
Array Mastery: Group Odd Evens
==================================
Nama:________
[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"
aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!
[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"
input: [1, 1, 1]
output: "ODDS: 1, 1, 1"
input: [2, 8, 10]
output: "EVENS: 2, 8, 10"
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/

/*
PSEUDOCODE
MAKE a function named groupOddEven
READ AND STORE oddArr without any value
READ AND STORE evenArr without any value
Do LOOPING
Make a CONDITION
  IF students modulus 2 equals to 0, push students to evenArr
  ELSE IF students modulus 2 not equals to 0, push students to oddArr
MAKE A  a CONDITION
  if oddArr without value AND evenArr without value, display nothing
  else if oddArr have a value and evenArr have a value, display OODS plus evenArr plus EVENS plus evenArr
  else if oddArr have a value and evenArr not have a value display OODS plus oddArr
  else if oddArr not have a value and evenArr have a value display EVENS plus evenArr
*/

function groupOddEven(students) {
  var oddArr = []
  var evenArr = []
  
  for (var i = 0; i < students.length; i++) {
    if (students[i] % 2 == 0) {
      evenArr.push(students[i])
    } else if (students[i] % 2 != 0) {
      oddArr.push(students[i])
    }
  }
  
  if (oddArr == '' && evenArr == '') {
    return ("")
  } else if (oddArr != '' && evenArr != '') {
    return ("ODDS: " + oddArr.join(', ') + " EVENS: " + evenArr.join(', '))
  } else if (oddArr != '' && evenArr == '') {
    return ("ODDS: " + oddArr.join(', '))
  } else if (oddArr == '' && evenArr != '') {
    return ("EVENS: " + evenArr.join(', '))
  }
}
  
// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
