function insertionSort(array) {
    if (array.length == 1) return;

    for (let i = 1; i < array.length;i++) {
        const currentIndex = array[i];
        for (let j = i - 1; j > -1;j--) {
            if (array[j] > currentIndex) {
                array[j + 1] = array[j];
                array[j] = currentIndex;
            }
        }
    }
}

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
insertionSort(numbers);