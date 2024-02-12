// Write a script which generates a random rgb color number.
// turkish: Rastgele bir rgb renk numarası oluşturan bir betik yazın.
// rgb(240,180,80)


console.log(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
// rgb(240,180,80) gibi bir çıktı alırız. 0-255 arasında rastgele sayılar alırız. 0-255 arasında 256 farklı sayı vardır. Bu yüzden Math.floor(Math.random() * 256) kullanırız.