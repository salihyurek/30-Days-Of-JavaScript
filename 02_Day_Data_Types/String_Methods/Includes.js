// includes() --- It takes a substring argument and it check if substring argument exists in the string. include() retruns a boolean.
// It checks if a substring exists in a string and it returns true if it exists and false if it doesn't exist.
 // include() --- Bir alt dize argümanı alır ve dizede alt dize argümanının mevcut olup olmadığını kontrol eder. include() bir boole değerini döndürür.
// Bir dizede bir alt dizenin var olup olmadığını kontrol eder ve varsa true, yoksa false değerini döndürür.

let string = '30  Days Of JavaScript'
console.log(string.includes('Days')) // true
console.log(string.includes('days')) // false
console.log(string.includes('Script')) // true
console.log(string.includes('script')) // false
console.log(string.includes('java')) // false
console.log(string.includes('Java')) // true

let country = 'Turkey'
console.log(country.includes('Turkey')) // true
console.log(country.includes('urke')) // true
console.log(country.includes('tur')) // false
console.log(country.includes('key')) // true 
console.log(country.includes('key ')) // false
console.log(country.includes(' urkey')) // false 