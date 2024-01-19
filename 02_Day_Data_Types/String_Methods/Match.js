// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
// match: bağımsız değişken olarak bir alt dize veya düzenli ifade modelini alır ve eşleşme varsa bir dizi döndürür, yoksa null değerini döndürür. Düzenli ifade modelinin nasıl göründüğünü görelim. / işaretiyle başlar ve / işaretiyle biter.

let string = 'love'
let patternOne = /love/
let patternTwo = /love/gi

// string.match(substring)

let stringOne = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))


let pattern = /love/gi
console.log(pattern.match(pattern))


let txt = 'In 2023, I run 30 Days of JavaScript. Now, in 2023 I super exited to start this challange'
let regEx = /\d/g

// Bu örnekte, /\d+/g ifadesi sayıları bulmak için kullanılan bir regex ifadesidir. \d bir sayıyı temsil ederken, + ise bir veya daha fazla sayıyı ifade eder. g flag'i tüm metindeki sayıları bulmak için kullanılır.
