// Creating static values with fill

// fiil: Fill all elements in an array with a static value
// fill: Tüm dizi öğelerini statik bir değerle doldurur


const arr = Array(5).fill(1)
console.log(arr) // [1, 1, 1, 1, 1]

const arr2 = Array(5).fill('item')
console.log(arr2) // ['item', 'item', 'item', 'item', 'item']

const eightXValues = Array(8).fill('X')
console.log(eightXValues) // ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

const eight0Values = Array(8).fill(0)
console.log(eight0Values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4VAlues = Array(4).fill(4)
console.log(four4VAlues) // [4, 4, 4, 4]

// fill with a specific value
const arr3 = Array(5).fill(1, 2, 4)
console.log(arr3) 
