// Length Method

// length: The array length method returns the number of elements in an array.
// length özelliğini kullanarak dizinin uzunluk özelliğini bulabiliriz.

// syntax
// array.length


const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegatables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Turkey'] // array of strings, countries

// print array and its length // diziyi ve uzunluk değerini yazdırmak için length özelliğini kullanırız

console.log('Numbers: ', numbers) // Numbers:  [ 0, 3.14, 9.81, 37, 98.6, 100 ]
console.log('Number of numbers: ', numbers.length) // Number of numbers:  6

console.log('Fruits: ', fruits) // Fruits:  [ 'banana', 'orange', 'mango', 'lemon' ]
console.log('Number of fruits: ', fruits.length) // Number of fruits:  4

console.log('Vegetables: ', vegetables) // Vegetables:  [ 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot' ]
console.log('Number of vegetables: ', vegetables.length) // Number of vegetables:  5

console.log('Animal products: ', animalProducts) // Animal products:  [ 'milk', 'meat', 'butter', 'yoghurt' ]
console.log('Number of animal products: ', animalProducts.length) // Number of animal products:  4

console.log('Web technologies: ', webTechs) // ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
console.log('Number of web technologies: ', webTechs.length) // Number of web technologies:  7

console.log('Countries: ', countries) // ['Finland', 'Denmark', 'Sweden', 'Norway', 'Turkey']
console.log('Number of countries: ', countries.length) // Number of countries:  5