// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.
// Turkish: Diziler için for of döngüsünü kullanırız. Eğer dizideki her bir elemanın index'ine ilgi duymuyorsak, dizide dolaşmak için çok kullanışlı bir yoldur.


// Example 1

for (const element of elements) {
    // code goes here 
}

// Example 2

const numbers = [1, 2, 3, 4, 5]

for (const number of numbers) {
    console.log(number) // Output: 1 2 3 4 5
}

// Example 3

for (const number of numbers) {
    console.log(number * number) // Output: 1 4 9 16 25
}


// adding all the numbers in the array
// turkish: dizideki tüm sayıları eklemek

let sum = 0

for (const number of numbers) {
    sum = sum + number }
// sum = 15


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
for (const tech of webTechs) {
    console.log(webTechs.toupperCase()) // Output: HTML CSS JAVASCRIPT REACT REDUX NODE MONGODB
}

for (const tech of webTechs) {
    console.log(tech[0]) // Output: H C J R R N M
}


const countries = ['Finland', 'Sweden', 'Norway','Turkey', 'Denmark', 'Iceland']

const newArr = []

for (const country of countries) {
    newArr.push(country.toUpperCase())
}

console.log(newArr) // Output: ["FINLAND", "SWEDEN", "NORWAY", "TURKEY", "DENMARK", "ICELAND"]w