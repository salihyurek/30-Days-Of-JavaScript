// indexOf() --- Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
// indexOf() --- Takes bir alt dize alır ve alt dize bir dizede mevcutsa alt dizenin ilk konumunu döndürür, yoksa -1 değerini döndürür

// string.indexof(substring)

let string = '30 Days Of JavaScript'

console.log(string.indexOf('D')) // 3
console.log(string.indexOf('Days')) // 3
console.log(string.indexOf('days')) // -1
console.log(string.indexOf('a')) // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script')) // 15
console.log(string.indexOf('script')) // -1