// charCodeAt() --- Takes index and it returns char code (ASCII number) of the value at the index
// Diziyi alır ve indeksteki ASCII kodunu döndürür 

// string.charCodeAt(index) // syntax

let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3)) // 38 // D = 68 for ASCII // Asabeneh false for 52

let lastIndex = string.length -1 
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116