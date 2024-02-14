// function with two parameters 
function functionName(param1, param2) {
    // code goes here 
}
let param1, param2
functionName(param1, param2)


// Example 1

function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}

sumTwoNumbers(3, 5) // 8


// Example 2

function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}

console.log(sumTwoNumbers(54, 21)) // 75


// Example 3

function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(printFullName('Salih', 'Yürek')) // Salih Yürek