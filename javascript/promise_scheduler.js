class PromiseScheduler {
    functionList = [];
    isPaused = false;
    isRunning = false;

    constructor(functionList) {
        this.functionList = [...functionList]; // Store functions, not promises
    }

    getState() {
        return {
            remaining: this.functionList.length,
            isPaused: this.isPaused,
            isRunning: this.isRunning
        };
    }

    run() {
        if (this.isRunning) return; // Prevent multiple simultaneous runs
        this.isPaused = false;
        this.isRunning = true;
        this.executeNext();
    }

    async executeNext() {
        if (this.isPaused || this.functionList.length === 0) {
            this.isRunning = false;
            return;
        }

        const func = this.functionList.shift();
        try {
            await func(); // Execute the function and wait for completion
        } catch (error) {
            console.error("Error executing function:", error);
        }
        
        this.executeNext(); // Continue to next
    }

    pause() {
        this.isPaused = true;
        return Promise.resolve();
    }

    async runAllUnexecutedFunctions() {
        const promises = this.functionList.map(func => func());
        this.functionList = []; // Clear the list since we're executing all
        await Promise.all(promises);
        console.log("All Done");
    }
}

const functions = [
    () => console.log("Task 1 - Sync"),
    () => new Promise(res => setTimeout(() => {
        console.log("Task 2 - Async");
        res();
    }, 1000)),
    () => console.log("Task 3 - Sync"),
    () => new Promise(res => setTimeout(() => {
        console.log("Task 4 - Async");
        res();
    }, 500)),
    () => console.log("Task 5 - Sync"),
    () => console.log("Task 6 - Sync"),
    () => console.log("Task 7 - Sync"),
    () => new Promise(res => setTimeout(() => {
        console.log("Task 8 - Async");
        res();
    }, 3000)),
    () => console.log("Task 9 - Sync"),
    () => new Promise(res => setTimeout(() => {
        console.log("Task 10 - Async");
        res();
    }, 4000)),
];

const scheduler = new PromiseScheduler(functions);

// Start running
scheduler.run();

// Pause after 1.5s
setTimeout(() => {
    console.log("---- PAUSING ----");
    scheduler.pause().then(() =>
        console.log("Paused State:", scheduler.getState())
    );
}, 1500);

// Resume after 3s
setTimeout(() => {
    console.log("---- RESUMING ----");
    scheduler.run();
}, 3000);

// Run all unexecuted after 5s
setTimeout(() => {
    console.log("---- RUNNING ALL REMAINING ----");
    scheduler.runAllUnexecutedFunctions();
}, 5000);

// Expected Behavior
// Functions execute sequentially: Task 1, then Task 2 (after 1s delay)
// Pause occurs after Task 2 completes
// State shows current progress and paused status
// Resume continues from Task 3
// runAllUnexecutedFunctions() executes remaining tasks concurrently


