// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// [2550, 2500]
// turkish: 0'dan 100'e kadar döngüyü tekrarlamak için for döngüsünü kullanın ve tüm çiftlerin toplamını ve tüm teklerin toplamını yazdırın. Çiftlerin toplamını ve teklerin toplamını dizi olarak yazdırın

let sumEven = 0
let sumOdd = 0
for (let i = 0; i <= 100; i++) {
    i % 2 == 0 ? sumEven += i : sumOdd += i
}

console.log([sumEven, sumOdd]) // Output: [2550, 2500]