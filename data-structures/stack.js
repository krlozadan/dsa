// Linear data structure which follows the order of operations in the form of "Last In First Out" (LIFO)
module.exports = function createStack() {
    const stack = [];
    return {
        push(item) {
            stack.push(item);
            console.log(stack);
        },
        pop() {
            return stack.pop();
        },
        peek() {
            return stack[stack.length - 1];
        },
        get length() {
            return stack.length;
        },
        isEmpty() {
            return stack.length === 0;
        }
    }
}
