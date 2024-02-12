// Iterate 10 to 0 using for loop, do the same using while and do while loop
// turkish: for döngüsünü kullanarak 10'dan 0'a kadar döngüyü tekrarlayın, aynısını while ve do while döngüsünü kullanarak yapın


// for loop
for (let i = 10; i >= 0; i--) {
    console.log(i) // Output: 10 9 8 7 6 5 4 3 2 1 0
}


// while loop
let i = 10
while (i >= 0) {
    console.log(i) // Output: 10 9 8 7 6 5 4 3 2 1 0
    i--
}


// do while loop
let j = 10
do {
    console.log(j) // Output: 10 9 8 7 6 5 4 3 2 1 0
    j--}while (j >= 0)