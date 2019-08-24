function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    const pivotIndex = array.length - 1;
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];
    for (let i = 0; i < pivotIndex;i++) {
        const currentItem = array[i];
        if (currentItem <= pivot) {
            left.push(currentItem);
        } else {
            right.push(currentItem);
        }
    }
    const result = [...quickSort(left), pivot, ...quickSort(right)];
    return result;
}

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(quickSort(numbers));