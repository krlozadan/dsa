// Linear data structure which follows the order of operations in the form of "First In First Out" (FIFO)
class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.unshift(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[this.queue.length - 1];
    }
    get length() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length == 0;
    }
}