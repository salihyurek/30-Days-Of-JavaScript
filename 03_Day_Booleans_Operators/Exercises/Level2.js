
// 1

var base = prompt('Enter base')
var height = prompt('Enter height')


console.log('The area of the triangle is', 0.5 * parseFloat(base) * parseFloat(height))

// 2

var aSide = prompt('Enter side a:')
var bSide = prompt('Enter side b:')
var cSide = prompt('Enter side c:')

console.log('The perimeter of the triangle is', (parseFloat(aSide) + parseFloat(bSide) + parseFloat(cSide)))

// 3

var rectangleLongSide = 45
var rectangleShortSide = 12

console.log('rectangle is area', parseFloat(rectangleLongSide) * parseFloat(rectangleShortSide), '\nrectangle is perimeter', 2 * (parseFloat(rectangleLongSide) + parseFloat(rectangleShortSide)))

// 4

var circleRadius = 8.5

console.log('circle is area', 3.14 * parseFloat(circleRadius) ** 2, '\~circle is perimeter', 2 * 3.14 * parseFloat(circleRadius) )

// 5

var m = 2
var b = -2

var xIntercept = (0 - b) / m

console.log('Slope:', parseInt(m), 'x-intercept:', xIntercept, 'y-intercept:', parseInt(b))

// 6

let x1 = 2
let y1 = 2

let x2 = 6
let y2 = 10

let slope2 = (y2 - y1) / (x2 - x1)

console.log("İki nokta arasındaki eğim:", slope2)

// 7

m == slope2 ? console.log('Slope is equalty') : console.log('Slope is not equalty')  

// 8

let a = 1
let b = 6
let c = 9

let discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log("Solutions of the equation (y = 0): x =", x1, "and x =", x2);
} else if (discriminant === 0) {
    let x = -b / (2 * a);
    console.log("Solution of the equation (y = 0): x =", x);
} else {
    console.log("The equation has no real solutions for (y = 0).");
}

// 9

var hours = prompt('Enter hours:')
var ratePerHours = prompt('Enter rate per hours:')

console.log('Your weekly earning is', hours * ratePerHours)

// 10

let firstName10 = prompt('What is your name?')

firstName10.length > 7 ? console.log('Your name is long') : console.log('Your name is short')

// 11

let firstN = 'Salih'
let lastN = 'Yurek'

if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}.`);
} else if (firstName.length < lastName.length) {
    console.log(`Your family name, ${lastName}, is longer than your first name, ${firstName}.`);
} else {
    console.log(`Both your first name, ${firstName}, and family name, ${lastName}, have the same length.`);
}

// 12 

let myAge = 40;
let yourAge = 30;

if(myAge > yourAge)
    console.log(`I am ${myAge - yourAge} years older than you.`);
else if (yourAge > myAge)
    console.log(`You are ${yourAge - myAge} years older than me.`);
else 
    console.log(`we are equal in age`);

// 13 

let birthYear = prompt("Enter your birth year:");

birthYear = parseInt(birthYear);

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age >= 18) {
    console.log(`You are ${age} years old. You are old enough to drive.`);
} else {
    let yearsToWait = 18 - age;
    console.log(`You are ${age} years old. You will be allowed to drive after ${yearsToWait} years.`);
}

// 14 

let yearsToLive = prompt("Enter the number of years you intend to live:")

yearsToLive = parseInt(yearsToLive)

let secondsInYear = 365 * 24 * 60 * 60
let totalSeconds = yearsToLive * secondsInYear;

console.log(`You lived ${totalSeconds} seconds.`)

// 15

let currentDate = new Date()
let formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`
console.log(formattedDate)

let currentDate2 = new Date()
let formattedDate2 = `${currentDate2.getDate().toString().padStart(2, '0')}-${(currentDate2.getMonth() + 1).toString().padStart(2, '0')}-${currentDate2.getFullYear()} ${currentDate2.getHours().toString().padStart(2, '0')}:${currentDate2.getMinutes().toString().padStart(2, '0')}`
console.log(formattedDate2)

let currentDate3 = new Date()
let formattedDate3 = `${currentDate3.getDate().toString().padStart(2, '0')}/${(currentDate3.getMonth() + 1).toString().padStart(2, '0')}/${currentDate3.getFullYear()} ${currentDate3.getHours().toString().padStart(2, '0')}:${currentDate3.getMinutes().toString().padStart(2, '0')}`
console.log(formattedDate3)
