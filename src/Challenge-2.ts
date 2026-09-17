//Write a function reverseWords(str) that reverses the order of words in a string while keeping the words themselves intact.

function reverseWords(sentence : string) : string {
    return sentence.split(' ').reverse().join(' ')
}

console.log(reverseWords("Today is a good day"))