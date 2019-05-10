// Exercises 4 - Cari Modus

function cariModus(arr) {
  var hasil = 0
  var modus = 0
  for(var i = 0; i < arr.length; i++){
    for(j = arr.length; j >= 0; j--){
      if(arr[i] == arr[j] && i != j){
        modus++
        hasil = arr[i];
      }
      if(modus == 0){
        hasil = -1;
      }
    }
  }
  var kembar = 0
  for (x = 0; x < arr.length; x++) {
    kembar += arr[x]
    if (kembar/arr.length == arr[x]) {
      hasil = -1
    }
  } return hasil;
}

console.log(cariModus([10, 4, 5, 2, 4]));
console.log(cariModus([5, 10, 10, 6, 5]));
console.log(cariModus([10, 3, 1, 2, 5]));
console.log(cariModus([1, 2, 3, 3, 4, 5]));
console.log(cariModus([7, 7, 7, 7, 7]));
