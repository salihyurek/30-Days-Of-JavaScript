// Array of Array

// Array can store different data types including an array itself. Let us create an array of arrays
// Dizi, dizinin kendisi de dahil olmak üzere farklı veri türlerini depolayabilir. Bir dizi dizisi oluşturalım

// syntax
// const arr = Array()

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray = [[1, 2, 3],[1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3] 


const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]