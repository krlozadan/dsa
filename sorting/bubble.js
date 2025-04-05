/*

Bubble sort
Simple sorting algorithm that steps throught the list, compares adjacent numbers
and swaps them if they are in the wrong order. Bubbling the largest element to
the end of the list

Time complexity O(n^2) making it relatively inefficient for large datasets
Space complexity O(1)

*/

function bubbleSort(array) {
    let sorted, tmp;
    let rightEndIndex = array.length - 1;
    do {
        sorted = true;
        for (let i = 0; i < rightEndIndex; i++) {
            if (array[i] > array[i + 1]) {
                sorted = false;
                tmp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = tmp;
            }
        }
        rightEndIndex--;
    } while (!sorted);
}

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
bubbleSort(numbers);