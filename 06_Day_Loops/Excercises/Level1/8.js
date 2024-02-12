// Use for loop to iterate from 0 to 100 and print only odd numbers
// turkish: 0'dan 100'e kadar döngüyü tekrarlamak için for döngüsünü kullanın ve yalnızca tek sayıları yazdırın

for (let i = 0; i < 100; i++) {
    console.log(i % 2 != 0 ? i : '') // Output: 1 3 5 7 9 11 ... 99
}