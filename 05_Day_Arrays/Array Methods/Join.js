// Join

// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
// join: Dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilip string olarak geri dönecektir. Varsayılan olarak virgülle birleştirilir, ancak öğeler arasında birleştirilebilecek farklı string parametresini de iletebiliriz.

// Syntax
// arr.join()

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const names = ['Salih', 'Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Salih,Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) // SalihAsabenehMathiasEliasBrook
console.log(names.join(' ')) // Salih Asabeneh Mathias Elias Brook
console.log(names.join(', ')) // Salih, Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) // Salih # Asabeneh # Mathias # Elias # Brook

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Angular',
  'Vue',
  'Node',
  'MongoDB'
]

console.log(webTechs.join()) // HTML,CSS,JavaScript,React,Angular,Vue,Node,MongoDB
console.log(webTechs.join(' # ')) // HTML # CSS # JavaScript # React # Angular # Vue # Node # MongoDB