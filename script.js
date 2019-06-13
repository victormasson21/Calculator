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
let current = [];


document.addEventListener('click', function(e) {
  for (let key of Object.keys(pad)) {
    if (document.getElementById(key).contains(e.target)) {
      switch (key) {
        case 'zero':
        case 'one':
        case 'two':
        case 'three':
        case 'four':
        case 'five':
        case 'six':
        case 'seven':
        case 'eight':
        case 'nine':
          operation.push(pad[key])
          current.push(pad[key])
          break;

        case 'decimal':
          if (current.includes('.')) {
            break
          } else {
            operation.push(pad[key])
            current.push(pad[key])
          }
          break;

        case 'divide':
        case 'substract':
        case 'multiply':
        case 'add':
          operation.push(pad[key])
          current = []
          break;

        case 'clear':
          operation = []
          current = []
          break;

        case 'equals':
          current = [eval(operation.join(''))]
          operation = []
          break
        default:
      }

      document.getElementById('full-display').innerHTML = operation.join('');
      document.getElementById('current-display').innerHTML = current.join('');

    }
  }
});
