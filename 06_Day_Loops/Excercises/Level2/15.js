// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// Bu bir meyve dizisidir, ['banana', 'orange', 'mango', 'lemon'] döngü kullanarak reverse methodunu kullanmadan sırayı tersine çevirin.


let fruits = ['banana', 'orange', 'mango', 'lemon']

let reversedFruits = []

for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i])
}

console.log(reversedFruits); // [ 'lemon', 'mango', 'orange', 'banana' ]