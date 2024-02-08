// indexOf

// Getting index an element in arr array
// Dizideki bir elemanın indexini getirir

// Syntax
// arr.indexOf(element)

const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers.length) // 7

console.log(numbers.indexOf(5)) // 4
console.log(numbers.indexOf(0)) // -1
console.log(numbers.indexOf(1)) // 0
console.log(numbers.indexOf(8)) // -1


// Check an element if it exists in arr array
// Dizideki bir elemanın var olup olmadıgını kontrol eder

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}

let indexOfAvocado = fruits.indexOf('avocado')  // -1

if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}