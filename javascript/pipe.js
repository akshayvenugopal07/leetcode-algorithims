function pipe(...funcs) {
  return (input) => {
    return funcs.reduce((result, func) => {
      return func(result);
    }, input);
  };
}

// Example usage
const getName = (object) => object.name;
const makeUpperCase = (string) => string.toUpperCase();
const slice = (string) => string.slice(0, 3);

const method = pipe(getName, makeUpperCase, slice);
const value = method({ name: 'devtools' });
console.log(value); // 'DEV'
