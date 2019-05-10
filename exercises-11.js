// Exercises 11 - Shopping Time

function shoppingTime(memberId, money) {
  var sisa = money
  var item = []
  for(var i = 0; i < 5; i++){
    if(sisa >= 1500000){
      item.push('Sepatu Stacattu')
      sisa -= 1500000
    } else if(sisa >= 500000){
      item.push('Baju Zoro')
      sisa -= 500000
    } else if(sisa >= 250000){
      item.push('Baju H&N')
      sisa -= 250000
    } else if(sisa >= 175000){
      item.push('Sweater Uniklooh')
      sisa -= 175000
    } else if(sisa >= 50000){
      item.push('Casing Handphone')
      sisa -= 50000
      break
    }
  }
  var object = {};
  object.memberId = memberId;
  object.money = money;
  object.listPurchased = item;
  object.changeMoney = sisa;
  if(money < 50000){
    return 'Mohon maaf, uang tidak cukup';
  }
  else if(memberId == '' || memberId == undefined && money == undefined){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  return object;
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000)); 
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
