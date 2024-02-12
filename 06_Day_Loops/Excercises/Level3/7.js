// Extract all the countries containing only four characters from the countries array and print it as array
// turkish: ülkeler dizisinden sadece dört karakter içeren ülkeleri çıkarın ve dizi olarak yazdırın

let countries = [
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

let fourCharacterCountries = []

for (let i = 0; i < countries.length; i++) {
    if(countries[i].length === 4) {
        fourCharacterCountries.push(countries[i])
    }
}

console.log(fourCharacterCountries)