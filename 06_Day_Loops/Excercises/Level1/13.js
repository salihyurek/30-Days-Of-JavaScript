// Develop a small script which generate array of 5 random numbers
// turkish: 5 rastgele sayı dizisi oluşturan küçük bir betik geliştirin

let randomNumbers = []

for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100))
}

console.log(randomNumbers) // Output: [ 87, 23, 45, 56, 89 ] (random numbers)