// create the Stack class with two methods to remove and add an element
class Stack {
    constructor(initialArray = []) {
        this.container = initialArray;
    }

    //adds an item to the top of the stack
    addToStack(item) {
        this.container.push(item);
    }

    //removes the top iten from the stack and returns it
    removeFromStack() {
        return this.container.pop();
    }
}

module.exports = Stack;
