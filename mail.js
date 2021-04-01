let i = 10

function longWord(word) {
    if (word.length > i) {
        return word[0] + (word.length-2) + word[word.length-1]
    }
    else {
        return word
    }
}
console.log(longWord('localization'))
console.log(longWord('internationalization'))
console.log(longWord('maybe'))
console.log(longWord('word'))
