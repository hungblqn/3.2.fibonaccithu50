// fibonacci.js

function fibonacciDP(n) {
  if (n < 2) return BigInt(n);

  const fib = [BigInt(0), BigInt(1)];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

// Kiểm tra với n = 10, 20, 50 và đo thời gian trung bình
const testValues = [10, 20, 50];

for (const n of testValues) {
  console.log(`\nTính F(${n}):`);
  let totalTime = 0;
  let result;

  for (let i = 0; i < 10; i++) {
    console.time(`Run ${i + 1}`);
    result = fibonacciDP(n);
    console.timeEnd(`Run ${i + 1}`);
  }

  console.log(`Kết quả F(${n}) = ${result.toString()}`);
}

// Tính thời gian trung bình cho n=50
const runs = 10;
let sumTime = 0;
let result50;

for (let i = 0; i < runs; i++) {
  const start = performance.now();
  result50 = fibonacciDP(50);
  const end = performance.now();
  sumTime += (end - start);
}

console.log(`\nF(50) = ${result50.toString()}`);
console.log(`Thời gian trung bình qua ${runs} lần: ${(sumTime / runs).toFixed(4)} ms`);
