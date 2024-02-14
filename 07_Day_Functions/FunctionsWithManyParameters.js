// function with multiple parameters
function functionName(param1, param2, param3, param4) {
    // code goes here 
}
let param1, param2, param3, param4
functionName(param1, param2, param3, param4)


// Exapmle 1

function sumArrValues(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(sumArrValues(arr)) // 55


// Example 2

const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius
    return area
}

console.log(areaOfCircle(5)) // 78.53981633974483
