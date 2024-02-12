// Develop a small script which generate any number of characters random id:
// turkish: Herhangi bir sayıda karakter içeren rastgele bir kimlik oluşturan küçük bir betik geliştirin:


let result = ''
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let charactersLength = characters.length
let length = 8
for (let i = 0; i < length; i++) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength))
}
console.log(result) 

