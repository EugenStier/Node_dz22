export function generateFibonacci(limit: number): number[] {
  const fibonacci: number[] = [0, 1];
  while (true) {
    const next =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (next >= limit) break;
    fibonacci.push(next);
  }
  return fibonacci;
}

export function generatePrimeNumbers(limit: number): number[] {
  const primes: number[] = [];
  for (let num = 2; num < limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
}
