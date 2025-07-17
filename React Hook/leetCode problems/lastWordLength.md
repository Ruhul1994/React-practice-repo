function lastWordLength(s){

    const words = s.trim().split(' ');

    return words.length > 0 ? words[words.length - 1].length : 0;

}

console.log(lastWordLength("Hello World")); // 5

console.log(lastWordLength("   fly me   to   the moon  ")); // 4