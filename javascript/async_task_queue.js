// Design and implement an AsyncTaskQueue 
// class that manages the execution of asynchronous 
// tasks with a specified maximum concurrency limit. 
// The queue should execute tasks in the order they are added (FIFO) and 
// ensure that no more than the specified number of tasks run concurrently. 
// If a task’s Promise rejects, the rejection should be silently ignored, 
// allowing the queue to continue processing remaining tasks.

class AsyncTaskQueue {

    queuedTaskList = [];
    concurrencyCount = 1;
    runningTasks = 0;

    constructor(concurrency) {
        this.concurrencyCount = concurrency;
    }

    queue(task) {
        if (this.runningTasks < this.concurrencyCount) {
            this.runningTasks = this.runningTasks + 1;
            task()
                .then((data) => {
                    console.log("Task completed:", data);
                })
                .catch((error) => {
                    console.log("Task failed:", error);
                })
                .finally(() => {
                    this.checkQueue();
                });
        } else {
            this.queuedTaskList.push(task);
        }
    }

    checkQueue() {
        if (this.queuedTaskList.length !== 0) {
            this.runningTasks = this.runningTasks - 1;
            this.queue(this.queuedTaskList.shift());
        }
    }

}

// Example usage

const queue = new AsyncTaskQueue(2); // Allow up to 2 tasks to run concurrently

// Example async tasks

const task1 = () => new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));

const task2 = () => new Promise((resolve, reject) => setTimeout(() => reject("Task 2 failed"), 500));

const task3 = () => new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 200));

// Queue tasks

queue.queue(task1); // Starts immediately

queue.queue(task2); // Starts immediately (concurrency = 2)

queue.queue(task3); // Waits until one of the first two tasks comp