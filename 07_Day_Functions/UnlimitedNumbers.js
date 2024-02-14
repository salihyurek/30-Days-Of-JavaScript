// Unlimited number of parameters in arrow function
// Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited
// number of arguments in an arrow function we use spread operator followed by any parameter name. Any thing we
// passed as argument in the function can be accessed as array in the arrow function. Let us see an example

// Let us access the arguments objects 
const sumAllNums = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args)
}

sumAllNums(1, 2, 3, 4) // [1, 2, 3, 4]


// function declaration 

const sumAllNums2 = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}

console.log(sumAllNums2(1, 2, 3, 4)) // 10
console.log(sumAllNums2(10, 20, 30, 20, 10)) // 90
console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40)) // 173