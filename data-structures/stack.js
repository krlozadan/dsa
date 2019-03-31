// Linear data structure which follows the order of operations in the form of "Last In First Out" (LIFO)
class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    }
    get length() {
        return this.stack.length;
    }
    isEmpty() {
        return this.stack.length == 0;
    }
}