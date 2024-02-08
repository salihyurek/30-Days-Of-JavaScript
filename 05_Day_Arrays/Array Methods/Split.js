// Split Method

// The split method splits a string at a specified place.
// split yöntemi bir dizeyi belirtilen yerden böler.
// syntax // string.split(substring)

let js = 'JavaScript'
console.log(js.split('')) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

const companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt = 'I love teaching people. I teach HTML5, CSS3, JS, React, Angular, Vue'
const words = txt.split(' ')
console.log(words) // ['I', 'love', 'teaching', 'people.', 'I', 'teach', 'HTML5,', 'CSS3,', 'JS,', 'React,', 'Angular,', 'Vue']

let numbers = '1,2,3,4,5,6,7,8,9,10'
console.log(numbers.split(',')) // [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]

let names = 'Salih,Asabeneh,Mathias,Elias,Brook'
console.log(names.split(',')) // [ 'Salih', 'Asabeneh', 'Mathias', 'Elias', 'Brook' ]

let countries = 'Turkey, Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))
console.log(countries.split(', ')) // [ 'Turkey', 'Finland', 'Sweden', 'Norway', 'Denmark', 'and Iceland' ]