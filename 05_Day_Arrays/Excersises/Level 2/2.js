let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text = text.replace(/[^\w\s]/g, '') // remove all non-alphanumeric characters // alfasayısal olmayan tüm karakterleri kaldır

let words = text.split(' ') // split the text into an array of words

console.log(words)
console.log(words.length)