let space = ' '
let firstname = 'Salih'
let lastName = 'Yürek'
let country = 'Turkey'
let city = 'Tokat'
let language = 'JavaScript'
let job = 'Software Developer'
let age = 24

let fullName = firstname + space + lastName
console.log(fullName)

let personInfoTwo = fullName + '. I am ' + age + '. I live in ' + country
console.log(personInfoTwo)

personInfoTwo =  `I am ${fullName}. I am ${age}. I live in ${country}` // tek tırnak kullanmak önemli
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}`

console.log(personInfoTwo)
console.log(personInfoThree)