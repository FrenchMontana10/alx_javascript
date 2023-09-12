// Step 1
let globalVariable = 'Welcome';

// Step 2
function outer() {
  // Step 3
  alert(globalVariable);
  let course = 'Holberton';

  // Step 4
  function inner() {
    // Step 5
    alert(globalVariable + ' ' + course);
    let exclamation = '!';

    // Step 6
    function inception() {
      // Step 7
      alert(globalVariable + ' ' + course + exclamation);
    }

    // Step 8
    inception();
  }

  // Step 9
  inner();
}

// Step 10
outer();
