// Using the above countries array, find the country containing only 5 characters.
// Yukarıdaki ülke dizisini kullanarak, sadece 5 karakter içeren ülkeyi bulun.

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
    'Kenya'
  ]

let fiveCharacterCountry = []

for (let i = 0; i < countries.length; i++) {
    if(countries[i].length === 5) {
        fiveCharacterCountry.push(countries[i]);
    }
}  

console.log(fiveCharacterCountry); // [ 'Japan', 'Kenya' ]