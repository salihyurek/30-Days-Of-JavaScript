// Develop a small script which generate array of 5 random numbers and the numbers must be unique
// turkish: 5 rastgele sayı dizisi oluşturan küçük bir betik geliştirin ve sayılar benzersiz olmalıdır

let randomNumbers = []
let i = 0
while (i < 5) {
    let randomNumber = Math.floor(Math.random() * 100)
    if (randomNumbers.indexOf(randomNumber) === -1) {
        randomNumbers.push(randomNumber)
        i++
    }
}
console.log(randomNumbers)
