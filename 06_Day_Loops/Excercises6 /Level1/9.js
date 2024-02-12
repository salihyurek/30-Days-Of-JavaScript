// Use for loop to iterate from 0 to 100 and print only prime numbers
// turkish: 0'dan 100'e kadar döngüyü tekrarlamak için for döngüsünü kullanın ve yalnızca asal sayıları yazdırın

for (let i = 0; i < 100; i++) {
    if (i === 2) {
        console.log(i)
    } else if (i > 1) {
        for (let j = 2; j < i; j++) {
            if (i % j !== 0) {
                console.log(i)
                break
            }
        }
    }
}
// Output: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97