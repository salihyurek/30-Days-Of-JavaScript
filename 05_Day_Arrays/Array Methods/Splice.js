// Splice 

// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
// Splice: Aralıklarını kaldırır: Başlangıç pozisyonu, kac tane silinecek ve kac tane eklenecek.

// Syntax
// arr.splice()
// arr.splice(startingPosition)
// arr.splice(startingPosition, number of times to be removed)
// arr.splice(startingPosition, number of times to be removed, number of items to be added)

const numbers = [1, 2, 3, 4, 5]
numbers.splice()
console.log(numbers) // [1, 2, 3, 4, 5] 

const numbersTwo = [1, 2, 3, 4, 5, 6]
numbersTwo.splice(3, 3, 7, 8, 9)
console.log(numbersTwo.splice(3, 3, 7, 8, 9)) // [1, 2, 3, 7, 8, 9] // it removes three item and replace three items