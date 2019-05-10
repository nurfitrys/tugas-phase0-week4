// Exercises 10 - Change Me

function changeMe(arr) {
  var nomor = 0
  var namaLengkap = ''
  for(var i=0; i < arr.length; i++){
    nomor++
    namaLengkap = arr[i][0] + ' ' + arr[i][1];
    var object = {};
    object.firstName = arr[i][0];
    object.lastName = arr[i][1];
    object.gender = arr[i][2];
    if(arr[i][3] == undefined || arr[i][3] > 2019){
      object.age = 'Invalid Birth Year';
    } else {
      object.age = 2019 - arr[i][3];
    }
  console.log(nomor + '. ' + namaLengkap + ':');
  console.log(object);
  }
  if (arr.length == 0) {
    console.log('')
  }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])
changeMe([])
