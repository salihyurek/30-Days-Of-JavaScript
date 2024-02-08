// Modifying Array Element

// An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements
// Bir dizi değiştirilebilir (değiştirilebilir). Bir dizi oluşturulduktan sonra dizi elemanlarının içeriğini değiştirebiliriz.

// Modifying Array Element 

const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10 // changing 1 at index 0 to 10
numbers[1] = 20 // changing  2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  'Turkey'
]

countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Replacing Turkey by Korea

console.log(countries)