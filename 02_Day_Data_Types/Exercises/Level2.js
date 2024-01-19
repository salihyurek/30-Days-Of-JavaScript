
// 1

console.log('There is no exercise better for the heart than reaching down and lifting people up.')

// 2

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// 3

console.log('10' == 10) // true

// 4

console.log(parseFloat('9.8') == 10) // false 
console.log(Math.round('9.8') == 10) // true 

// 5

let python = 'python'
let jargon = 'jargon'
console.log('python in on?', python.match(/on/g))
console.log('jargon in on?', python.match(/on/g))

// 6

let text = 'I hope this course is not full of jargon.'
console.log(text.match(/jargon/g))

// 7

console.log(Math.floor(Math.random() * 101))

// 8

console.log(Math.floor(Math.random() * 51) + 50)

// 9

console.log(Math.floor(Math.random() * 256) + 50)

// 10

string = 'JavaScript'
randomIndex = Math.floor(Math.random() * string.length) 
console.log(string[randomIndex])

// 11

console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 27");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");

// 12 

let sentence = 'You cannot end a sentence with because because because is a conjunction'

newSentence = sentence.substr(0, 30)
newSentenceTwo = sentence.substr(55)
console.log(newSentence, newSentenceTwo)