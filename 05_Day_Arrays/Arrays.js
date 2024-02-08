// empty array 

// syntax

const arr = Array()

// or 
//let arr = new Array()

console.log(arr) // []

const arr2 = [] // most recommended way


const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegatables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// print the array and its length 

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// Array can have items of different data types
const dizi = [
    'Salih',
    144,
    true,
    { country: 'Turkey', city: 'Tokat' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Vue', 'Angular'] }
]
 // arr containing different data types
console.log(dizi)


// Split

let js = 'JavaScript'
let charInJavascript = js.split('')
console.log(charInJavascript)  // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

const companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt = 'I love teaching people. I teach HTML5, CSS3, JS, React, Angular, Vue'
const words = txt.split(' ')
console.log(words) // ['I', 'love', 'teaching', 'people.', 'I', 'teach', 'HTML5,', 'CSS3,', 'JS,', 'React,', 'Angular,', 'Vue']


// Accessing array items using index

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


const countries2 = [
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

console.log(countries2) // ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya', 'Turkey']
console.log(countries2[0]) // Albania
console.log(countries2[10]) // Kenya

let lastIndexOfCountries2 = countries2.length - 1
console.log(countries2[lastIndexOfCountries2]) // Turkey


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


// Modifying Array Element 

const numbers3 = [1, 2, 3, 4, 5]
numbers3[0] = 10 // changing 1 at index 0 to 10
numbers3[1] = 20 // changing  2 at index 1 to 20

console.log(numbers3) // [10, 20, 3, 4, 5]

const countries3 = [
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

countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex3 = countries.length - 1
countries[lastIndex3] = 'Korea' // Replacing Turkey by Korea

console.log(countries)

// Methods to Manipulate Array

// array constructor

const arr4 = Array() // create an empty array 
console.log(arr4)

const eightEmptyValues = Array(8)
console.log(eightEmptyValues) // [empty x 8]


// creating static values eith fill

const arr5 = Array()
console.log(arr5)

const eightXValues = Array(8).fill('X')
console.log(eightXValues) // ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

const eight0Values = Array(8).fill(0)
console.log(eight0Values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4VAlues = Array(4).fill(4)
console.log(four4VAlues) // [4, 4, 4, 4]


// Concetenating array using concat

const firstList = [1, 2, 3, 4]
const secondList = [5, 6, 7,8]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6, 7, 8]


const fruits5 = ['banana', 'orange', 'mango', 'lemon'] 
const vegetables5 = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
const fruitsAndVegatables = fruits5.concat(vegetables5) 
console.log(fruitsAndVegatables) // ['banana', 'orange', 'mango', 'lemon', 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']


// getting array length // dizinin içindeki değeri arar, eğer varsa dizini döndürür yoksa -1 döndürür

const numbers6 = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers6.length) // 7

console.log(numbers6.indexOf(5)) // 4
console.log(numbers6.indexOf(0)) // -1
console.log(numbers6.indexOf(1)) // 0
console.log(numbers6.indexOf(8)) // -1


const fruits7 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits7.indexOf('banana')  // 0

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

// getting last index of an element in array // lastIndexOF

const numbers8 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers8.lastIndexOf(2)) // 7 
console.log(numbers8.lastIndexOf(0)) // -1
console.log(numbers8.lastIndexOf(1)) // 6
console.log(numbers8.lastIndexOf(4)) // 3
console.log(numbers8.lastIndexOf(6)) // -1


// Includes // Bir dizide bir öğenin mevcut olup olmadığını kontrol etmek için. Varsa true değerini döndürür, aksi takdirde false değerini döndürür.

let numbers9 = [10, 2, 8, 0, 213, 65]

console.log(numbers9.includes(2)) // true
console.log(numbers9.includes(0)) // true
console.log(numbers9.includes(213)) // true
console.log(numbers9.includes(5)) // false


const webTechs9 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Angular',
    'Vue',
    'Node',
    'MongoDB'
] 

console.log(webTechs.includes('React')) // true
console.log(webTechs.includes('C++')) // false


// Checking Array
// isArray // Veri türünün dizi olup olmadığını kontrol etmek için

const numbers10 = [10, 342, 2, 9, 4, 0]
console.log(Array.isArray(numbers10)) // true 

const number100 = 100
console.log(Array.isArray(number100)) // false


// Coverting array to string 

const numbers11 = [51, 231, 76, 9, 5, 3, 23]
console.log(numbers11.toString()) // 51,231,76,9,5,3,23

const names = ['Salih', 'Asabeneh', 'Mathias', 'Elias']
console.log(names.toString()) // Salih,Asabeneh,Mathias,Elias


// Joining array elements 
// Join // Dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilip string olarak geri dönecektir.

const numbers12 = [1, 2, 3, 4, 5]
console.log(numbers12.join()) // 1,2,3,4,5

const names12 = ['Salih', 'Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names12.join()) // Salih,Asabeneh,Mathias,Elias,Brook
console.log(names12.join('')) // SalihAsabenehMathiasEliasBrook
console.log(names12.join(' ')) // Salih Asabeneh Mathias Elias Brook
console.log(names12.join(', ')) // Salih, Asabeneh, Mathias, Elias, Brook
console.log(names12.join(' # ')) // Salih # Asabeneh # Mathias # Elias # Brook

const webTechs12 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Angular',
  'Vue',
  'Node',
  'MongoDB'
]

console.log(webTechs12.join()) // HTML,CSS,JavaScript,React,Angular,Vue,Node,MongoDB
console.log(webTechs12.join(' # ')) // HTML # CSS # JavaScript # React # Angular # Vue # Node # MongoDB


// Slice array elements 
// dizinin elemanlarını bölme

const numbers13 = [1,2,3,4,5]

console.log(numbers13.slice()) // it copies all  item
console.log(numbers13.slice(0)) // it copies all  item
console.log(numbers13.slice(0, numbers.length)) // it copies all  item
console.log(numbers13.slice(1,4)) // [2,3,4] // it doesn't include the ending position


// splice method in array 

const numbers14 = [1, 2, 3, 4, 5]
numbers14.splice()
console.log(numbers14) // [1, 2, 3, 4, 5] 

const numbers15 = [1, 2, 3, 4, 5, 6]
numbers15.splice(3, 3, 7, 8, 9)
console.log(numbers15.splice(3, 3, 7, 8, 9)) // [1, 2, 3, 7, 8, 9] // it removes three item and replace three items


// Push 
// Push kullanarak bir diziye öğe ekleme

// syntax
const arr15  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr) // ['item1', 'item2','item3','new item']

const numbers16 = [1, 2, 3, 4, 5]
numbers16.push(6)
console.log(numbers16) // [1,2,3,4,5,6]

numbers16.pop() // remove one item from the end
console.log(numbers16) // -> [1,2,3,4,5]

let fruits16 = ['banana', 'orange', 'mango', 'lemon']
fruits16.push('apple')
console.log(fruits16)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits16.push('lime')
console.log(fruits16)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']


// pop
// Pop kullanarak bitiş öğesini çıkarma

const numbers17 = [1, 2, 3, 4, 5]
numbers17.pop() // remove one item from the end
console.log(numbers17) // [1,2,3,4]










Removing the end element using pop
pop: Removing item in the end.

const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4]
Removing an element from the beginning
shift: Removing one array element in the beginning of the array.

const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]
Add an element from the beginning
unshift: Adding array element in the beginning of the array.

const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning
console.log(numbers) // -> [0,1,2,3,4,5]
Reversing array order
reverse: reverse the order of an array.

const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> reverse array order
console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]
Sorting elements in array
sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
Array of arrays
Array can store different data types including an array itself. Let us create an array of arrays

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
🌕 You are diligent and you have already achieved quite a lot. You have just completed day 5 challenges and you are 5 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.