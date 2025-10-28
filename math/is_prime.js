// [Efficient Approach] - Sieve of Eratosthenes
/**
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    // If n is less than 2, there are no prime numbers
    if (n <= 2) return 0;

    // Create boolean array "isPrime[0..n]" and initialize
    // all entries it as true. A value in isPrime[i] will
    // finally be false if i is Not a prime, else true.
    const isPrime = new Array(n).fill(true);

    // Mark 0 and 1 as non-prime
    isPrime[0] = isPrime[1] = false;

    // Use Sieve of Eratosthenes to mark non-prime numbers
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // Update all multiples of i starting from i * i
            // They are not prime
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Count number of prime numbers
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }

    return count;
};

// Self written solution
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n <= 2) return 0;

    let count = 0;
    for (let i = 2; i < n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;  // Exit inner loop once we find a divisor
            }
        }
        if (isPrime) {
            count++;
        }
    }
    return count;
};

console.log(countPrimes(19))