// Includes 

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
// Dizideki bir elemanın mevcut olup olmadıgını kontrol eder. Eğer mevcutsa, true döndürer, yoksa false döndürer.

// Syntax
// arr.includes(element)

let numbers = [10, 2, 8, 0, 213, 65]

console.log(numbers.includes(2)) // true
console.log(numbers.includes(0)) // true
console.log(numbers.includes(213)) // true
console.log(numbers.includes(5)) // false


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Angular',
    'Vue',
    'Node',
    'MongoDB'
] 

console.log(webTechs.includes('React')) // true
console.log(webTechs.includes('C++')) // false