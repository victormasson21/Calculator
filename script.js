
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
let operators = ['+', '-', '/', '*']


document.addEventListener('click', function(e) {
  for (let key of Object.keys(pad)) {
    if (document.getElementById(key).contains(e.target)) {
      let lastKey = operation[operation.length-1]
      switch (key) {
        case 'zero':
          /* Prevents starting with more than one '0' */
          if (current.includes(0) && current.length==1) {
            break
          }

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
          /* Prevents using a decimal twice in the same number */
          if (current.includes('.')) {
            break
          }
          operation.push(pad[key])
          current.push(pad[key])
          break;

        case 'divide':
        case 'substract':
        case 'multiply':
        case 'add':
          /*
          if (current.length == 0) {
            if (key == 'substract') {
              operation.push(pad[key])
              current.push(pad[key])
              break
            }
          }
          */

          /* Prevents starting with an operator */
          if (operation.length == 0) {
            break
          }

          /* Prevents two operators in a row */
          if (operators.includes(lastKey)) {
            operation.pop(1)
            operation.push(pad[key])
            current = []
            break;
          }

          operation.push(pad[key])
          current = []
          break;

        case 'clear':
          operation = []
          current = []
          document.getElementById('current-display').innerHTML = '0'; // doesn't work
          break;

        case 'equals':
          /* Prevents ending with an operator before hitting = */
          if (operators.includes(lastKey)) {
            operation.pop(1)
          }

          current = [eval(operation.join(''))]
          operation.push(pad[key])
          break
        default:
      }

      document.getElementById('full-display').innerHTML = operation.join('');
      document.getElementById('current-display').innerHTML = current.join('');

    }
  }
});
