// Write a script which generates a random hexadecimal number.
// turkish: Rastgele bir onaltılık(hex) sayı oluşturan bir betik yazın.

// function kullanmadan yapalım

let result = '#' // hexadecimal number starts with #
let characters = '0123456789ABCDEF' // 16 farklı karakter var
let charactersLength = characters.length 
for (let i = 0; i < Math.random() * 100; i++) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength))
}
console.log(result)
