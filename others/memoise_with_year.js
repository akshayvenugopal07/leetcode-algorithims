console.clear();
function memoize(expensiveFn) {
    const cache = {};
    return (year, callback) => {
        if (year in cache) {
            // console.log('from cache')
            callback(cache[year]);
        } else {
            // console.log('from expensiveFn')
            expensiveFn(year, (result) => {
                cache[year] = result;
                callback(result);
            });
        }
    };
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