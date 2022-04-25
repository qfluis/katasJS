const anagrams = (word, words) => {
    const arrayResult = [];
    const arrayLettersOriginal = Array.from(word);
    let arrayLetters, search, letter;
    let anagram, index;
    for(let w of words) {
        anagram = true
        arrayLetters = [...arrayLettersOriginal];
        index = 0;
        while(anagram && index < w.length) {
            letter = w[index];
            search = arrayLetters.indexOf(letter);
            if (search === -1){
                anagram  = false;
            } else {
                arrayLetters.splice(search,1);
            }
            index++;
        }
        if(anagram) arrayResult.push(w);
    }
    return arrayResult;
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // =>  ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])); // => []

/* OTRAS SOLUCIONES
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}


*/