// Linear data structure which follows the order of operations in the form of "First In First Out" (FIFO)
module.exports = function createQueue() {
    const queue = [];
    return {
        enqueue(item) {
            queue.unshift(item);
        },
        dequeue() {
            return queue.pop();
        },
        peek() {
            return queue[queue.length - 1];
        },
        get length() {
            return queue.length;
        },
        isEmpty() {
            return queue.length === 0;
        }
    }
}