// A function declaration provides a function scoped arguments array like object. Any thing we passed as argument
// in the function can be accessed from arguments object inside the functions. Let us see an example


// Let us access the argument objects 
function sumAllNums() {
    console.log(arguments)
}

sumAllNums(1, 2, 3, 4, 5) // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }


// Example 1

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];       
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 30, 20, 10)) // 90
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) // 173

