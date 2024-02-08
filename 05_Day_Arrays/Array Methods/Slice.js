// Slice Array Elements 

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
// Slice: Aralıktaki birden fazla öğeyi kesmek için. İki parametre alır: başlangıç ​​ve bitiş konumu. Bitiş konumunu içermez.

// Syntax
// arr.slice()
// arr.slice(startingPosition)
// arr.slice(startingPosition, endingPosition)

const numbers = [1,2,3,4,5]

console.log(numbers.slice()) // it copies all  item
console.log(numbers.slice(0)) // it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1,4)) // [2,3,4] // it doesn't include the ending position