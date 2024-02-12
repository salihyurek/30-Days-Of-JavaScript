// For Loop Sructure

/*
for (initialization; condition; final-expression) {
    code goes here
} 
*/

for (let i = 0; i <= 5; i++) {
    console.log(i) // 0 1 2 3 4 5
}

for (let i = 5; i >= 0; i--) {
    console.log(`${i} * ${i} = ${i * i}`) 
}
// 5 * 5 = 25
// 4 * 4 = 16
// 3 * 3 = 9
// 2 * 2 = 4
// 1 * 1 = 1
// 0 * 0 = 0


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Turkey']

const newArr = []

for (let i = 0; i  < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())     
}
console.log(newArr) // [ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'TURKEY' ]


const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] // 1 + 2 + 3 + 4 + 5 = 15
}

console.log(sum) // 15


const numbers2 = [1, 2, 3, 4, 5]

const newArr2 = []

let sum2 = 0

for (let i = 0; i < numbers2.length; i++) {
    newArr2.push(numbers2[i] ** 2) // [ 1, 4, 9, 16, 25 ]
}

console.log(newArr2) // [ 1, 4, 9, 16, 25 ]

