function customUnshift(...items) {
    // Write your solution below
    const length = this.length + items.length;
    
    // Shift existing elements to the right
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + items.length] = this[i];
    }
    
    // Add new items at the beginning
    for (let i = 0; i < items.length; i++) {
        this[i] = items[i];
    }
    
    return length;
}

Array.prototype.customUnshift = customUnshift;

// Example usage:
const arr = [3, 4, 5];
arr.customUnshift(1, 2);
console.log(arr); // Output: [1, 2, 3, 4, 5]