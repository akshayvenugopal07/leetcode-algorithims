class Observable {
    constructor() {
        this.observers = []; // Array to store subscribed observer functions
    }

    // Method to add an observer to the list
    subscribe(observerFunction) {
        this.observers.push(observerFunction);
    }

    // Method to remove an observer from the list
    unsubscribe(observerFunction) {
        this.observers = this.observers.filter((observer) => observer !== observerFunction);
    }

    // Method to notify all subscribed observers
    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }
}

// Example Usage:

// 1. Create an instance of the Observable
const myObservable = new Observable();

// 2. Define observer functions (subscribers)
function logger1(message) {
    console.log(`Logger 1 received: ${message}`);
}

function logger2(message) {
    console.log(`Logger 2 says: ${message.toUpperCase()}`);
}

// 3. Subscribe observers to the observable
myObservable.subscribe((logger1));
myObservable.subscribe(logger2);

// 4. Trigger a notification from the observable
myObservable.notify("Hello from the observable!");

// 5. Unsubscribe an observer
myObservable.unsubscribe(logger1);

// 6. Trigger another notification (only logger2 will receive it)
myObservable.notify("Another event occurred.");