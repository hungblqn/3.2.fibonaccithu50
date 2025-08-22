// fibonacci_O1.js

function fibonacciO1(n) {
  if (n < 2) return BigInt(n);

  let a = BigInt(0);
  let b = BigInt(1);
  let c;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
}

// Kiểm tra với n = 10, 20, 50 và đo thời gian trung bình
const testValues = [10, 20, 50];
const runs = 10;

for (const n of testValues) {
  let sumTime = 0;
  let result;

  for (let i = 0; i < runs; i++) {
    const start = performance.now();
    result = fibonacciO1(n);
    const end = performance.now();
    sumTime += (end - start);
  }

  console.log(`\nF(${n}) = ${result.toString()}`);
  console.log(`Thời gian trung bình qua ${runs} lần: ${(sumTime / runs).toFixed(4)} ms`);
}
