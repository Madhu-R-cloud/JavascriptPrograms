function mergeUniqueArrays(arr1, arr2) {
   
    const uniqueSet = new Set([...arr1, ...arr2]);

    const uniqueArray = [...uniqueSet];

    return uniqueArray;
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const mergedArray = mergeUniqueArrays(array1, array2);

console.log('Array 1 :', array1);
console.log('Array 2 :', array2);
console.log('Merged Unique Array :', mergedArray);
