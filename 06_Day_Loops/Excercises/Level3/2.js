// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// Diziler değiştirilebilir. Orijinali değiştirmeyen bir dizi kopyası oluşturun. Kopyalanan diziyi sıralayın ve sortedCountries değişkeninde saklayın

let countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

let countriesCopy = countries.slice()
let sortedCountries = countriesCopy.sort()
console.log(sortedCountries) // [ 'Denmark', 'Finland', 'Iceland', 'Norway', 'Sweden' ]