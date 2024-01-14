// Introduction to Data types


// NUMBERS
// Integers: Integer (negative, zero and positive) numbers Example: ... -3, -2, -1, 0, 1, 2, 3 ... //Tamsayılar: Tamsayı (negatif, sıfır ve pozitif) sayılar Örnek: ... -3, -2, -1, 0, 1, 2, 3 ... 
// Float-point numbers: Decimal number Example ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ... // Ondalıklı Sayılar: Ondalık sayı Örnek ... -3,5, -2,25, -1,0, 0,0, 1,1, 2,2, 3,5 ...


// STRINGS 
// A collection of one or more characters between two single quotes, double quotes, or backticks.
// İki tek tırnak, çift tırnak veya geri tırnak arasında bir veya daha fazla karakterden oluşan koleksiyon.

// Example 

'c'
'Salih'
"Salih"
'Turkey'
'JavaScript is a beatiful programming language' // JavaScript harika bir programlama dilidir.
'i love teaching' // Öğretmeyi seviyorum 
'Türkçe karakter de yazılabilir, fakat kelime Türkçe olsa dahi genellikel tercih edilmez' 
'I hope you are enjoying the first day' // Umarım ilk günün tadını çıkarırsınız
// `We can also create a string using a backtick` // It gives an error because it has no function // herhangi bir işlevi olmadığı için hata veriyor // ters tırnak kullanarak da bir dize oluşturabiliriz
'A string could be just as small as one character or as big as many page' // Bir dize, bir karakter kadar küçük veya birçok sayfa kadar büyük olabilir
'Any data type under a single quote, double quote or backtick is a string' // Tek tırnak, çift tırnak veya geri tırnak altındaki herhangi bir veri türü bir dizedir


// BOOLEANS
// A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false.
// Boole değeri True veya False'tır. Herhangi bir karşılaştırma, doğru veya yanlış olan bir boole değeri döndürür.

// Example 
true // if the light is on, the value is true // true ise doğrudur
false // if the light is off, the value is false // false ise yanlıştır


// UNDEFINED 
// In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.
// JavaScript'te bir değişkene değer atamazsak değer tanımsızdır (undefined). Buna ek olarak, eğer bir fonksiyon hiçbir şey döndürmüyorsa, tanımsız değerini döndürür.

let firstName 
console.log(firstName) // undefined, because it is not assigned to a value yet // tanımsız, çünkü herhangi bir değer atanmadı


// NULL 
// Null in JavaScript means an empty value. // JavaScript'te null, boş bir değer anlamına gelir.

let emptyValue = null


// Checking Data Types
console.log(typeof 'Salih') // string
console.log(typeof 4) // number 
console.log(typeof true) // boolean 
console.log(typeof null) // object 
console.log(typeof undefined) // undefined 
