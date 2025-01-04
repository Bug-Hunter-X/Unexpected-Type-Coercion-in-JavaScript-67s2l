function foo(a, b) {
  // Check if both inputs are numbers before performing addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    // Handle the case where inputs are not numbers (e.g., throw an error or return a default value)
    console.error('Inputs must be numbers');
    return NaN; // or any other appropriate handling
  }
}

console.log(foo(1, "1")); // Output: Error message
console.log(foo(1, 1)); // Output: 2