// create the Queue class with two methods to remove and add an element
// Enforce FIFO - First-In, First-Out
class Queue {
    constructor(initialItems = []) {
        this.container = initialItems;
    }

    // Method to add an item at the end of the queue
    addToQueue(item) {
        this.container.push(item);
    }

    // Method to remove an item from the beginning of the queue
    removeFromQueue() {
        return this.container.shift(); // Returns the item that was removed
    }
}

module.exports = Queue;