// split(): The split method splits a string at a specified place.

// string.split(substring)

let string = '30 Days Of JavaScript'
console.log(string.split()) // [ '30 Days Of JavaScript' ]
console.log(string.split(' ')) // [ '30', 'Days', 'Of', 'JavaScript' ]

let firstName = 'Salih'
console.log(firstName.split()) // [ 'Salih' ]
console.log(firstName.split('')) // [ 'S', 'a', 'l', 'i', 'h' ]

let countries = 'Turkey, Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))
console.log(countries.split(', ')) // [ 'Turkey', 'Finland', 'Sweden', 'Norway', 'Denmark', 'and Iceland' ]