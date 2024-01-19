// lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
// lastIndexOf(): Bir alt dize alır ve alt dize bir dizede mevcutsa alt dizenin son konumunu döndürür, yoksa -1 değerini döndürür

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.lastIndexOf('love')) // 67
console.log(string.lastIndexOf('you')) // 63
console.log(string.lastIndexOf('JavaScript')) // 38