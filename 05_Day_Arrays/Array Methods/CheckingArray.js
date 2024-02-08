// Checking Array

// Array.isArray:To check if the data type is an array
// Dizinin veri türünün dizi olup olmadıgını kontrol eder

// Syntax
// Array.isArray(arr)

const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(Array.isArray(numbers)) // true
console.log(Array.isArray('hello')) // false

const number100 = 100
console.log(Array.isArray(number100)) // false