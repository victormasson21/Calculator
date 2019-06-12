let pad = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'divide': '/',
  'multiply': '*',
  'substract': '-',
  'decimal': '.',
  'add': '+',
  'clear': '',
  'equals': '='}

let operation = [];


document.addEventListener('click', function(e) {
  for (let word of Object.keys(pad)) {
    if (document.getElementById(word).contains(e.target)) {
      operation.push(pad[word]);
      if (word == 'clear') {
        operation = [];
      }
      document.getElementById('display').innerHTML = operation.join('');

    }
  }
});
