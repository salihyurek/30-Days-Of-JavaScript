
// 1

let result  = prompt('Enter your age:')

console.log(`Enter your age: ${result}`)

if(result >= 18) {
    console.log('You are old enough to drive')
}
else {
    let diff = 18 - result
    console.log(`You are left ${diff} years to drive`)
}

// 2

let yourAge = result 
let myAge = 24

console.log(`Enter your age: ${yourAge}`)

if(myAge > yourAge) {
    console.log('I am ' + (myAge - yourAge) + ' years older than you')
}
else if(myAge < yourAge) {
    console.log('Your are ' + (yourAge - myAge) + ' years older than me')
}
else if(myAge == yourAge) {
    console.log('our is age equal')
}
else if(yourAge < 0){
    console.log('Your age cannot be smaller than scratch!')
}
else {
    console.log('You entered the wrong value')
}

// 3

let a = 43
let b = 78

if(a > b)
    console.log('${a} is greater than ${b}')
else if (b > a)
    console.log('${b} is greater than ${a}')
else 
    console.log('a: ${a} and b: ${b} are equal to each other')


// 4

let number = 9

console.log('Enter a number: ' + number)

if(number % 2 == 0)
    console.log(`${number} is an even number`)
else
    console.log(`${number} is an odd number`)