// Assignment Operators

//    operator            example              same as                 description
//       =                 x = y                x = y                  y is stored in x               
//      +=                 x += y               x = x + y              x + y result is stored in x                                                                             
//      -=                 x -= y               x = x - y              x - y result is stored in x                                                            
//      *=                 x *= y               x = x * y              x * y result is stored in x                                                            
//      /=                 x /= y               x = x / y              x / y result is stored in x                                                            
//      %=                 x %= y               x = x % y              x % y result is stored in x                                                            
//      **=                x +*= y              x = x ** y             x ** y result is stored in x                                                               


// Arithmetic Operators

// Addition(+): a + b
// Substraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a**b


let numOne = 6
let numTwo = 4
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 10 2 24 1.5 2 1296

const PI = Math.PI
let radius = 100 

const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)

const gravity = 9.81 
let mass = 72

const weight = mass * gravity
console.log(weight)

const bollingPoint = 100 
const bodyTemp = 37

console.log(`Suyun Kaynama Noktası ${bollingPoint} oC'dir. \nİnsanın vücut sıcaklığı ${bodyTemp}'dir. \nDünyanın yerçekimi ivmesi ${gravity}`)





