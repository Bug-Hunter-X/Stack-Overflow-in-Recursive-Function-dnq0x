function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) {
    return NaN; // Handle negative inputs appropriately
  }
  return foo(a - 1, a + b);
}

console.log(foo(5, 10)); // Output: 35
console.log(foo(-5, 10)); // Output: NaN