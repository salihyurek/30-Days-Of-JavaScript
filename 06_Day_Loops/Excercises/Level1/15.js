// Develop a small script which generate a six characters random id: 
// turkish: altı karakterli rastgele bir kimlik oluşturan küçük bir betik geliştirin:


// ASCII tablosunu kullanarak oluşturalım

let randomId = ''
for (let i = 0; i < 6; i++) {
    let randomAscii = Math.floor(Math.random() * 25 + 97)
    randomId += String.fromCharCode(randomAscii)
}

console.log(randomId) 