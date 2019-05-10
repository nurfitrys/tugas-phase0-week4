// Exercises 12 - Toko X

function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  var array = []
  for (var i = 0; i < listBarang.length; i++) {
    var pembeli = [];
    var sisa = 0;
    for (j = 0; j < shoppers.length; j++) {
      if (shoppers[j].product == listBarang[i][0] &&
        sisa + shoppers[j].amount <= listBarang[i][2]) {
        sisa += shoppers[j].amount;
        pembeli.push(shoppers[j].name);
      }
    }

    var object = {}
    object.product = listBarang[i][0];
    object.shoppers = pembeli;
    object.leftOver = listBarang[i][2] - sisa;
    object.totalProfit = listBarang[i][1] * sisa;
    
    array.push(object)
  }
  if(shoppers.length == 0) {
    return []
  }
  return array;
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));

console.log(countProfit([]));
