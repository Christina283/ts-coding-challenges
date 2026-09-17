//Write a function that takes an array of strings and groups the anagrams together.
//groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// [["eat","tea","ate"], ["tan ","nat"], ["bat"]]

function groupAnagrams(a : string[]) : string[][] {
    const m = new Map<string, string[]>();
    for(let i=0; i < a.length; i++) {
        const sortedString = a[i].split('').sort().join('')
        const anagrams = m.get(sortedString) ?? [];
        anagrams.push(a[i]);
        m.set(sortedString, anagrams);
    }
    return Array.from(m.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))