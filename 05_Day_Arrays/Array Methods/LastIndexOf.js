// Getting last index of an element in arr array. lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
// Dizideki bir elemanın son indeksini getirir. lastIndexOf: Dizideki son elemanın konumunu döndürer. Eğer mevcutsa, indeksi döndürer, yoksa -1 döndürer.

// Syntax
// arr.lastIndexOf(element)
// arr.lastIndexOf(element, fromIndex) 


const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7 
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) // 6
console.log(numbers.lastIndexOf(4)) // 3
console.log(numbers.lastIndexOf(6)) // -1