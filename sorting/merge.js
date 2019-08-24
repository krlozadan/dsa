function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return combineArrays(mergeSort(left), mergeSort(right));
}

function combineArrays(left, right) {
    const sorted = [];
    while(left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    const combined = [...sorted, ...left, ...right];
    return combined;
}

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(numbers));
