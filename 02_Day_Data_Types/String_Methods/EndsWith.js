// endsWith() --- it takes a substring as an argumant and it checks if the string start with that specified substring. It returns  a boolean (true or false).
// argüman olarak bir alt dize alır ve dizenin o belirli alt dizeyle başlayıp başlamadığını kontrol eder. Bir boole değeri (doğru veya yanlış) döndürür.

// string.endsWith(substring)

let string = 'Love is the best to in this world'
console.log(string.endsWith('world')) // true 
console.log(string.endsWith('love')) // false
console.log(string.endsWith('in this world')) // true 

let country = 'Turkey'
console.log(country.endsWith('Turkey')) // true 
console.log(country.endsWith('key')) // true
console.log(country.endsWith('inland')) // false 