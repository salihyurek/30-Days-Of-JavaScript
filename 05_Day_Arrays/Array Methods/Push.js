// Adding item to an array using push

// Push: adding item in the end. To add item to the end of an existing array we use the push method.
// Push: sona ekleme. Mevcut bir diziye ekleme yapmak için push metodunu kullanın.

// Syntax
// arr.push(element)

const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr) // ['item1', 'item2','item3','new item']

const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // [1,2,3,4,5,6]

numbers.pop() // remove one item from the end
console.log(numbers) // -> [1,2,3,4,5]

let fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push('apple')
console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']