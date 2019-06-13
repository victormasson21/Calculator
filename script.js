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

// getElementById('id')


document.addEventListener('click', function(e) {
  for (let key of Object.keys(pad)) {
    if (document.getElementById(key).contains(e.target)) {
      let lastKey = operation[operation.length-1]
      switch (key) {
        case 'zero':
          if (operation.includes(0) && operation.length==1) {
            console.log('one zero is enough');
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
          if (current.includes('.')) {
            console.log('double decimal isn\'t a thing');
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
          if (current.length == 0) {
            if (key == 'substract') {
              operation.push(pad[key])
              current.push(pad[key])
              break
            }
          }

          if (operation.length == 0) {
            console.log('you might want to type a number first');
            break
          }

          if (operators.includes(lastKey)) {
            operation.pop(1)
            operation.push(pad[key])
            console.log('you need to pick just one operator');
            current = []
            break;
          }

          operation.push(pad[key])
          current = []
          break;

        case 'clear':
          operation = []
          current = []
          break;

        case 'equals':
          if (operators.includes(lastKey)) {
            operation.pop(1)
            console.log('we\'ve ignored that last ' + lastKey);
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
