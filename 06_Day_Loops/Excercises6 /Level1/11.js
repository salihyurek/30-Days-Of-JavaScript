// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// turkish: 0'dan 100'e kadar döngüyü tekrarlamak için for döngüsünü kullanın ve tüm çiftlerin toplamını ve tüm teklerin toplamını yazdırın.

let sumEven = 0
let sumOdd = 0
for (let i = 0; i <= 100; i++) {
    i % 2 == 0 ? sumEven += i : sumOdd += i
}

console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`) // Output: The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.