const calc = (n) => {
  if (n <= 3) return n;
  if (n % 3 === 0) return Math.pow(3, n / 3);  // left 0 -> n to the power of n/3
  if (n % 3 === 1) return 4 * Math.pow(3, (n - 4) / 3);  // left 1 (2 of 2) -> n to the power ((n-4)/3) * 4 
  else return 2 * Math.pow(3, (n - 2) / 3);  // left 2 -> n to the power ((n-2)/3) *2
};

console.log(calc(8));

