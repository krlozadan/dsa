/*
You are given a list of daily temperatures, T, where each element represents the temperature of a single day. 

Return a list such that, for each day in the input, it tells you how many days you would have to wait until you reach a day with a warmer temperature. 
If there is no future day for which this is possible, put 0 instead. 

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72], your output should be [1, 1, 0, 2, 1, 0].

Plan:
Create a stack to hold the index of the days that havent seen a temperature raise
Traverse the array
    if the stack is not empty
        compare the temperature of last element in the stack against the current day temp
            if the current day is warmer: pop the last element added to the stack and assign the number of days that have passed
            if the current temp is not warmer, just add it to the stack as well
    if the stack is empty
        add the current day index to the stack and move on

*/

const assert = require('node:assert');

// The time complexity of this is O(n) and the space complexity is O(n) as well
// because we are using a stack to keep track of the indices of the temperatures that we have seen so far.

function dailyTemps(temps) {

    const result = new Array(temps.length).fill(0);
    const stack = [];

    for (let i = 0; i < temps.length; i++) {
        while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
            result[stack[stack.length - 1]] = i - stack[stack.length - 1];
            stack.pop();
        }
        stack.push(i);
    }

    return result;
}

assert.deepStrictEqual(dailyTemps([73, 74, 75, 71, 69, 72]), [1, 1, 0, 2, 1, 0]);
assert.deepStrictEqual(dailyTemps([50, 51, 49, 48, 47, 49]), [1, 0, 0, 2, 1, 0]);