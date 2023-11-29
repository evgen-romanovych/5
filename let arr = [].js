function findMinNumber(arr) {
    if (arr.length === 0) {
        return "Масив порожній";
    }

    let minNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }

    return minNumber;
}

let arrayForMin = [3, 7, 1, 10, 4, 2];
let minResult = findMinNumber(arrayForMin);
console.log("Мінімальне число в масиві:", minResult);