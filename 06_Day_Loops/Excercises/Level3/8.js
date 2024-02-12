// Extract all the countries containing two or more words from the countries array and print it as array
// turkish: ülkeler dizisinden iki veya daha fazla kelime içeren tüm ülkeleri çıkarın ve dizi olarak yazdırın

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

let twoOrMoreWordsCountries = []

for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes(' ')) {
        twoOrMoreWordsCountries.push(countries[i])
    }
}

console.log(twoOrMoreWordsCountries) 
