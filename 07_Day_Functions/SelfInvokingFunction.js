// Self invoking functions are anonymous functions which do not need to be called to return a value.

(function(n) {
console.log(n * n)
})(2) // 4

let squaredNum = (function(n) {
    return n * n
})(10) 

console.log(squaredNum) // 