// Accessing Array
// Accessing array items using index

// We access each element in an array using their index. An array index starts from 0. The picture below clearly shows the index of each element in the array.
// Bir dizideki her öğeye indekslerini kullanarak erişiriz. Bir dizi indeksi 0'dan başlar. Aşağıda dizideki her bir elemanın indeksini açıkça göstermektedir.
// Syntax // array[index]


const numbers = [1, 2, 3, 4, 5]
console.log(numbers[0]) // 1
console.log(numbers[1]) // 2
console.log(numbers[2]) // 3
console.log(numbers[3]) // 4
console.log(numbers[4]) // 5



const fruits2 = ['Banana', 'Orange', 'Mango', 'Lemon']

let firstFruits2 = fruits2[0] // we are accessing the first item using its index
console.log(firstFruits2) // Banana

let secondFruits2 = fruits2[1] // we are accessing the second item using its index
console.log(secondFruits2) // Orange

let lastFruit = fruits2[3] // we are accessing the second item using its index
console.log(lastFruit) // Lemon

let lastIndex = fruits2.length - 1
lastFruit = fruits2[lastIndex]
console.log(lastFruit) // Lemon



const num = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers.length) // 6
console.log(numbers) // [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]) // 0
console.log(numbers[5]) // 100

let lastIndexOfNum = num.length - 1
console.log(num[lastIndexOfNum]) // 100



const webTechnologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Angular',
    'Vue',
    'Node',
    'MongoDB'
]

console.log(webTechnologies) // ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'Vue', 'Node', 'MongoDB']
console.log(webTechnologies.length) // 8
console.log(webTechnologies[0]) // HTML%
console.log(webTechnologies[6]) // Node



const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'Turkey'
  ]

console.log(countries) // ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya', 'Turkey']
console.log(countries[0]) // Albania
console.log(countries[10]) // Kenya

let lastIndexOfCountries = countries.length - 1
console.log(countries[lastIndexOfCountries]) // Turkey

const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ] 

console.log(shoppingCart) // ['Milk', 'Mango', 'Tomato', 'Potato', 'Avocado', 'Meat', 'Eggs', 'Sugar']
console.log(shoppingCart[0]) // Milk 
console.log(shoppingCart[7]) // Sugar

let lastIdx = shoppingCart.length - 1;
console.log(shoppingCart[lastIdx]) // Sugar