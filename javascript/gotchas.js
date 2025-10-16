// Question 1: Hoisting and variable declarations
var a;
console.log(a); // undefined
// Answer: `var` declarations are hoisted. `a` exists but is uninitialized, so `undefined` is logged.



// Question 2: Object references and shallow copy
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.a = 100;
obj2.b.c = 200;
console.log(obj1.a); // 1
console.log(obj1.b.c); // 200
// Answer: Spread operator creates a shallow copy. `a` is primitive → separate copy. `b` is object → shared reference, so mutating it affects obj1.



// Question 3: Palindrome linked list check logic
// (The logic was discussed conceptually, actual code implementation omitted)
// Answer: Use two-pointer or stack method. Details skipped in this file.



// Question 4: Type coercion and equality
const objA = { a: 1 };
const objB = { a: 1 };
const objC = objA;
console.log(objA == objB); // false
console.log(objA === objB); // false
console.log(objA === objC); // true
// Answer: Objects compared by reference. objA and objB are different references → false. objC references objA → true.



// Question 5: Async/Await and microtasks
async function foo() {
    console.log('A');
    await Promise.resolve();
    console.log('B');
}
console.log('C');
foo();
console.log('D');
// Answer: Output is C A D B. `await` pauses foo(), schedules continuation as microtask. Synchronous logs run before microtasks.



// Question 6: Arrow function vs regular function and this binding
const obj = {
    name: 'Alice',
    regular() {
        console.log('R:', this.name);
    },
    arrow: () => {
        console.log('A:', this.name);
    }
};
obj.regular(); // R: Alice
obj.arrow();   // A: undefined
const fn = obj.regular;
fn();          // R: undefined
// Answer: Regular function `this` depends on call site. Arrow function `this` is lexical (from definition scope). Detached method loses object binding.



// Question 7: Destructuring with defaults and nested objects
const user = { name: 'Alice', address: { city: 'Wonderland', zip: undefined } };
const { name = 'Unknown', address: { city = 'Nowhere', zip = 12345 }, age = 30 } = user;
console.log(name); // Alice
console.log(city); // Wonderland
console.log(zip);  // 12345
console.log(age);  // 30
// Answer: Defaults apply only if value is undefined or missing. name & city exist → defaults not used. zip is undefined → default applied. age missing → default applied.



// Question 8: Spread operator and mutation (shallow vs deep copy)
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.a = 100;
obj2.b.c = 200;
console.log(obj1.a); // 1
console.log(obj1.b.c); // 200
// Answer: Spread is shallow copy. Primitive a is independent. Nested object b is shared reference → mutation affects original.



// Question 9: Prototype chain, method shadowing, delete
function Person(name) { this.name = name; }
Person.prototype.sayHi = function () { console.log('Hi,', this.name); };
const p1 = new Person('Alice');
p1.sayHi(); // Hi, Alice
p1.sayHi = function () { console.log('Hello from', this.name); };
p1.sayHi(); // Hello from Alice
delete p1.sayHi;
p1.sayHi(); // Hi, Alice
// Answer: Instance method shadows prototype. delete removes instance property → prototype method used again.



// Question 10: Async function with await
console.log('C');
async function foo() {
    console.log('A');
    await Promise.resolve();
    console.log('B');
}
foo();
console.log('D');
// Answer: Output C A D B. Synchronous logs first. await schedules microtask (B) to run after main stack.



// Question 11: Advanced Async + Microtasks
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve()
    .then(() => console.log('3'))
    .then(() => { setTimeout(() => console.log('4'), 0); console.log('5'); });
Promise.resolve().then(() => console.log('6'));
console.log('7');
// Answer: Output 1 7 3 6 5 2 4. Microtasks (Promises) run before macrotasks (setTimeout). Chained then runs after current microtasks.



// Question 12: Closure + loop + async nightmare
for (var i = 0; i < 3; i++) { setTimeout(function () { console.log('var:', i) }, 100); }
for (let j = 0; j < 3; j++) { setTimeout(function () { console.log('let:', j) }, 100); }
for (var k = 0; k < 3; k++) { (function (k) { setTimeout(function () { console.log('IIFE var:', k) }, 100); })(k); }
// Answer: var loop prints 3 3 3 (shared var). let loop prints 0 1 2 (block scope per iteration). IIFE with var prints 0 1 2 (new function scope per iteration).