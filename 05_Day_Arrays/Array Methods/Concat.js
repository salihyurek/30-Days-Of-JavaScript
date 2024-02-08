// Concatenating array using concat

// concat: To concatenate two arrays.
// concat: İki diziyi birleştirir.

// Syntax:
// array1.concat(array2)


const firstList = [1, 2, 3, 4]
const secondList = [5, 6, 7,8]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6, 7, 8]


const fruits = ['banana', 'orange', 'mango', 'lemon'] 
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
const fruitsAndVegatables = fruits.concat(vegetables) 
console.log(fruitsAndVegatables) // ['banana', 'orange', 'mango', 'lemon', 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

