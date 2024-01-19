
// 1

let challenge = '30 Days Of JavaScript'

// 2

console.log(challenge)

// 3

console.log(challenge.length)

// 4

console.log(challenge.toUpperCase())

// 5 

console.log(challenge.toLocaleLowerCase())

// 6

console.log(challenge.substr(3, 4))
console.log(challenge.substring(3, 7))

// 7

console.log(challenge.substring(3, 21))

// 8

console.log(challenge.includes('word')) // false

// 9

console.log(challenge.split(' '))

// 10

console.log(challenge.split(''))

// 11

let arr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(arr.split(', '))

// 12 

console.log(challenge.replace('JavaScript', 'Python'))

// 13

console.log(challenge.charAt(15)) // S

// 14 

console.log(challenge.charCodeAt(11)) // 74

// 15

console.log(challenge.indexOf('a')) // 4

// 16

console.log(challenge.lastIndexOf('a')) // 14

// 17

let text = 'You cannot end a sentence with because because because is a conjunction'
console.log(text.indexOf('because')) // 31

// 18

console.log(text.lastIndexOf('because')) // 47

// 19

console.log(text.search('because')) // 31

// 20

let string = ' 30 Days Of JavaScript '
console.log(string.trim())

// 21

console.log(challenge.startsWith('30 Da')) // true

// 22

console.log(challenge.endsWith('f JavaScript')) // true

// 23

 console.log(challenge.match(/a/g)) 

// 24

console.log(challenge.concat('30', 'Days', 'Of', 'JavaScript'))

// 25 

console.log(challenge.repeat(2))























