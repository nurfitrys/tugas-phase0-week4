// Exercises 7 - Urutkan Abjad

function urutkanAbjad(str) {
  var strBaru = str.split('')
  strBaru.sort()
  return strBaru.join('')
}

console.log(urutkanAbjad('hello'));
console.log(urutkanAbjad('truncate'));
console.log(urutkanAbjad('developer'));
console.log(urutkanAbjad('software'));
console.log(urutkanAbjad('aegis')); 
