
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
let lastKey;

document.addEventListener('click', function(e) {
  for (let key of Object.keys(pad)) {
    if (document.getElementById(key).contains(e.target)) {
      // let lastKey = operation[operation.length-1]
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
          /* updates both arrays */
          operation.push(pad[key])
          current.push(pad[key])
          break;

        case 'decimal':
          /* Prevents using a decimal twice in the same number */
          if (current.includes('.')) {
            break
          }
          /* updates both arrays */
          operation.push(pad[key])
          current.push(pad[key])
          break;

        case 'substract':
        if (lastKey == '-') {
          console.log('mip mip');

          // current = []

          break;
        }
        
          if (current.length == 0) {
            operation.push(pad[key])
            current.push(pad[key])
            break
          }



          // still bugs when clicking on '-' several times in a row
          // doesn't allow double negative '--' > doesn't really have to..?


        case 'divide':
        case 'multiply':
        case 'add':
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
          /* updates both arrays */
          operation.push(pad[key])
          current = []
          break;


      }

      /* updates both displays based on new arrays */
      document.getElementById('full-display').innerHTML = operation.join('');
      document.getElementById('current-display').innerHTML = current.join('');

      if (key == 'clear') {
        operation = []
        current = []
        document.getElementById('full-display').innerHTML = operation.join('');
        document.getElementById('current-display').innerHTML = '0'; // doesn't work
      }


      if (key == 'equals') {
        /* Prevents ending with an operator before hitting = */
        if (operators.includes(lastKey)) {
          operation.pop(1)

        }
        current = [eval(operation.join(''))]
        operation = [eval(operation.join(''))]
        // operation.push(pad[key])
        document.getElementById('full-display').innerHTML = operation.join('');
        document.getElementById('current-display').innerHTML = current.join('');

      }
      lastKey = pad[key]
    }
  }
});
