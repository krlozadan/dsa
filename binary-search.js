// time complexity 
// O (log N)
// space is constant
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1, mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// time complexity log of n
// space complexity log of n
function recursiveBinarySearch(arr, target) {
    function search(left, right) {
        if (left > right) {
            return -1;
        }
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            return search(mid + 1, right);
        } else {
            return search(left, mid - 1);
        }
    }
    return search(0, arr.length - 1);
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 0));