/*
Wagon Sorter

Wagon sorter adalah sebuah function yang berfungsi
untuk melakukan sorting penumpang dalam sebuah kereta.
Function wagonSorter akan menerima 1 nested array,
yang berisi data penumpang beserta kelas mereka.
Setiap kereta memiliki 4 kelas dan 4 gerbong yaitu 
Priority, Executive, Business, Economy.

RULES:
  - Tidak boleh memakai splice, slice, split, map, reduce, filter.
*/

function wagonSorter (people) {
  var kelompok = []
  var priority = []
  var business = []
  var economy = []
  var vip = []
  for (i = 0; i < people.length; i++) {
    if (people[i][1] == 'Priority') {
      priority.push(people[i][0])
    } else if (people[i][1] == 'VIP') {
      vip.push(people[i][0])
    } else if (people[i][1] == 'Business') {
      business.push(people[i][0])
    } else if (people[i][1] == 'Economy') {
      economy.push(people[i][0])
    }
  }
  kelompok.push(priority) 
  kelompok.push(vip)
  kelompok.push(business)
  kelompok.push(economy)
  return kelompok
}

console.log(wagonSorter([['Artour', 'Priority'],['Clinton', 'Priority'],['Omar', 'VIP'],['Mahrouj', 'Business'],['Jacky Mao', 'Economy'],['Kurtis', 'Economy']])) 
// [ [ 'Artour', 'Clinton' ],
//   [ 'Omar' ],
//   [ 'Mahrouj' ],
//   [ 'Jacky Mao', 'Kurtis' ] ]
console.log(wagonSorter([['Hikigaya', 'Economy'],['Rem', 'Priority'],['Inaba', 'VIP'],['Iori', 'Economy'],['Misa', 'Priority'],['Amane', 'Economy']])) 
// [ [ 'Rem', 'Misa' ],
//   [ 'Inaba' ],
//   [],
//   [ 'Hikigaya', 'Iori', 'Amane' ] ]
console.log(wagonSorter([['Bona', 'VIP'],['RongRong', 'Business'],['Bobo', 'Priority'],['Patrick', 'Priority'],['Sandy', 'Business'],['Crab', 'Business']])) 
// [ [ 'Bobo', 'Patrick' ],
//   [ 'Bona' ],
//   [ 'RongRong', 'Sandy', 'Crab' ],
//   [] ]
