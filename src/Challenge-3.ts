// Given an array of integers where one number appears twice, write a function to find that duplicate number, in O(n) time and O(1) extra space if possible.

function findDuplicates(numArray : number[]) : number{
    let s = new Set<number>()
    for(let i=0; i< numArray.length ; i++) {
        if (s.has(numArray[i])) 
            return numArray[i]
        else 
            s.add(numArray[i])
    }
    return -1
}

console.log(findDuplicates([1, 3, 5, 7, 3, 4, 8, 9]))