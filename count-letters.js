var input = process.argv.slice(2)

// create empty object
var tally = {};

function countLetters(input) {
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < input[i].length; j++) {
      var letter = input[i][j];
      if (letter in tally) {
        tally[letter] += 1;
      }
      else {
        tally[letter] = 1;
      }
    }
  }
}

countLetters(input);
console.log(tally);


