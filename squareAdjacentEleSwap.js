// Function to square adjacent elements and swap them
function squareAndSwap(arr) {
   
    for (let i = 0; i < arr.length - 1; i += 2) {
       
        const squaredA = arr[i] ** 2;
        const squaredB = arr[i + 1] ** 2;

        arr[i] = squaredB;
        arr[i + 1] = squaredA;
    }

    return arr;
}


const originalArray = [1, 2, 3, 4, 5, 6];
const resultArray = squareAndSwap(originalArray);

console.log('Original Array:', originalArray);
console.log('Array after squaring and swapping adjacent elements:', resultArray);
