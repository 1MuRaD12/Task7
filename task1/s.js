function revers(word) {
    let split = "";
    for (let i = word.length - 1; i >= 0; i--) {
        split += word[i]

    }
    return split;
}

const strig = "hello word"

const reverse = revers(strig);

console.log(reverse);




