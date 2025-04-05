/*

At any given point in the call stack the options we have are:
- to open the parenthesis if there are still left to open
- to close if there are still left to close

*/

function generateParenthesis(n) {
    const result = [];
    const stack = [];

    function generate(opened, toClose) {
        if (opened === n && toClose === 0) {
            result.push(stack.join(''));
            return;
        }
        if (opened < n) {
            stack.push('(')
            generate(opened + 1, toClose + 1);
            stack.pop();
        }
        if (toClose) {
            stack.push(')');
            generate(opened, toClose - 1);
            stack.pop();
        }
    }

    generate(0, 0);

    return result;
}