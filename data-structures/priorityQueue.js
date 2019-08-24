const createQueue = require("./queue");

module.exports = function createPriorityQueue() {
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();

    return {
        enqueue(item, highPriority = false) {
            if (!highPriority) {
                lowPriorityQueue.enqueue(item);
                return;
            }
            highPriorityQueue.enqueue(item);
        },        
        dequeue() {
            if (highPriorityQueue.isEmpty()) {
                return lowPriorityQueue.dequeue();
            }
            return highPriorityQueue.dequeue();
        },
        peek() {
            if (highPriorityQueue.isEmpty()) {
                return lowPriorityQueue.peek();
            }
            return highPriorityQueue.peek();
        },
        get length() {
            return highPriorityQueue.length + lowPriorityQueue.length;
        },
        isEmpty() {
            return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
        }
    }
}