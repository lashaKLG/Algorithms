function longestWord(str) {
    let lenghts = str.split(' ').map(word => word.length)

    console.log(Math.max(...lenghts))
}
longestWord("May the force be with you")
longestWord("The quick brown fox jumped over the lazy dog")
