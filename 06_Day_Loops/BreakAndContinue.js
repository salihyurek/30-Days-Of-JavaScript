// break 
// break: It is used to terminate the loop and transfer the control to the next statement following the loop.
// turkish: Döngüyü sonlandırmak ve kontrolü döngüden sonraki ifadeye aktarmak için kullanılır.

for (let i = 0; i < 5; i++) {
    if (i == 3) {
    break // when i=3, it will terminate the loop
    }   
}
// Output: 0 1 2


// Continue
// continue: It is used to skip the current iteration of the loop and continue with the next iteration.
// turkish: Döngünün mevcut iterasyonunu atlamak ve bir sonraki iterasyona devam etmek için kullanılır.

for (let i = 0; i < 5; i++) {
    if (i == 3) {
    continue // when i=3, it will skip the iteration
    }
    console.log(i)
}
// Output: 0 1 2 4