// Exercises 15 - Highest Score

function highestScore (students) {
  var listKelas = []
  var hasil = {}
  for (i = 0; i < students.length; i++) {
      listKelas.push(students[i].class)
  }
  for (j = 0; j < listKelas.length; j++) {
    var object = {}
    var highest = 0
    for (x = 0; x < students.length; x++) {
      if (listKelas[j] == students[x].class && students[x].score > highest) {
        highest = students[x].score
        object.name = students[x].name
        object.score = students[x].score
      }
      hasil[listKelas[j]] = object
    }
  }
  if (students.length == 0) {
    console.log('')
    return hasil
  }
  return hasil
}

console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

console.log(highestScore([]));
