console.clear();
function memoize(expensiveFn) {
  let cache = {};

  const memoized = (year, callback) => {
    if (year in cache) {
      callback(cache[year]);
    } else {
      expensiveFn(year, (result) => {
        cache[year] = result;
        callback(result);
      });
    }
  };

  // Add a method to clear the cache
  memoized.clear = () => {
    cache = {};
  };

  return memoized;
}

function expensiveFn(year, callbackFn) {
  setTimeout(() => callbackFn("movies list in " + year), 30);
}

const memoizedExpensiveFn = memoize(expensiveFn);

let t1 = performance.now();
memoizedExpensiveFn(2010, (result) => {
  let t2 = performance.now();
  console.log(`Response received: ${result} in ${t2 - t1}ms`);
});
// output: Response received: "movies list in 2010" in 30ms

setTimeout(() => {
  t1 = performance.now();
  memoizedExpensiveFn(2011, (result) => {
    let t2 = performance.now();
    console.log(`Response received: ${result} in ${t2 - t1}ms`);
  });
}, 100);
// output: Response received: "movies list in 2011" in 30ms

setTimeout(() => {
  t1 = performance.now();
  memoizedExpensiveFn(2010, (result) => {
    let t2 = performance.now();
    console.log(`Response received: ${result} in ${t2 - t1}ms`);
  });
}, 200);
// output: Response received: "movies list in 2010" in 0ms

setTimeout(() => {
  memoizedExpensiveFn.clear();
  t1 = performance.now();
  memoizedExpensiveFn(2010, (result) => {
    let t2 = performance.now();
    console.log(`Response received: ${result} in ${t2 - t1}ms`);
  });
}, 300);
// output: Response received: "movies list in 2010" in 30ms