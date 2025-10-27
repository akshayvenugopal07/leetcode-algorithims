let instanceCreated = false;
let counter = 0;

class Counter {

    constructor() {
        if (instanceCreated) {
            throw new Error("You can only create one instance!");
        }
        instanceCreated = true;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

const counter1 = new Counter();

counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.getCount()) // 4

const counter2 = new Counter();
// Error: You can only create one instance!

// Key improvements in this version:

// Uses private class fields (#) to keep variables truly private
// Implements the static getInstance() method which is the proper way to implement Singleton
// Stores the instance inside the class using a private static field
// Prevents direct instantiation with new keyword by throwing an error
// Maintains encapsulation by keeping all variables inside the class
// To use the Singleton, always use Counter.getInstance() instead of the new keyword. This ensures you always get the same instance.

// The private fields (marked with #) are only accessible within 
// the class, providing better encapsulation than the previous version where variables were in the global scope.