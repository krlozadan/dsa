function insertionSort(array) {
    for (let i = 1; i < array.length;i++) {
        for (let j = 0; j < i;j++) {
            if (array[i] < array[j]) {
                const [item] = array.splice(i, 1);
                array.splice(j, 0, item);
            }
        }
    }
    return array;
}

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(insertionSort(numbers));