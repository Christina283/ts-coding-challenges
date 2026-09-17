// Write a function flattenDeep(arr) that flattens an arbitrarily nested array into a single-level array, without using the built-in .flat() method.

type NestedArray = number | NestedArray[];

function flattenDeep(arr : NestedArray[] ) : number[]  {
    let flattenedArr : number [] = [];
    for(let i = 0 ; i< arr.length; i++) {
        const item = arr[i]
        if(Array.isArray(item))
            flattenedArr.push(...flattenDeep(item));
        else
            flattenedArr.push(item)
    }
    return flattenedArr;
}
 
console.log(flattenDeep([1, [2, [3, [4, 5]], 6], 7]))