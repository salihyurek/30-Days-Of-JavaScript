
// 1 

let firstName = 'Salih'
let lastName = 'Yurek'
let country = 'Turkey'
let city = 'Tokat'
let age = 24
let isMarried = false 
let year = 2023 

console.log(typeof firstName) // string
console.log(typeof lastName) // string
console.log(typeof country) // string
console.log(typeof city) // string
console.log(typeof age) // number 
console.log(typeof isMarried) // boolean 
console.log(typeof year) // number 


// 2 

console.log('10' == 10) // true


// 3

console.log(parseInt('9.8' == 10)) // NaN // not a number 


// 4

let job = 'Software Developer'

const now = new Date()

console.log(job == 'Software Developer') // true 
console.log(Math.round(Math.PI) == 3.14) // false 
console.log(Math.E > 2) // true
console.log(Math.ceil(6.2) == 7) // true
console.log(false) // false
console.log(now.getMinutes == now.getSeconds) // result mutable 

// 5

console.log('\n\n 5 \n')
console.log(6 > 5) // true
console.log(6 >= 5) // true
console.log(6 < 5) // false
console.log(6 <= 5) // false
console.log(6 == 6) // true
console.log(6 === 6) // true
console.log(6 != 6) // false
console.log(6 !== 6) // false
console.log(6 != '6') // false 
console.log(6 == '6') // true 
console.log(6 === '6') // false 
console.log('python'.length == 'jargon'.length) // true 

// 6 


console.log('\n\n 6 \n')
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
console.log('dragon'.includes('on') && 'python'.includes('on')) // true 

// 7

const nowVariable = new Date()

console.log(nowVariable.getFullYear())
console.log(nowVariable.getMonth()) + 1
console.log(nowVariable)
console.log(nowVariable.getDate()) // what day of the month
console.log(nowVariable.getHours())
console.log(nowVariable.getMinutes())
console.log(nowVariable.getTime())