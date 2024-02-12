// Reverse the countries array and capitalize each country and stored it as an array
// turkish: ülkeler dizisini tersine çevirin ve her bir ülkeyi büyük harfle yazın ve bir dizi olarak saklayın

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

let reverseCountry = []

for (let i = 0; i < countries.length; i++) {
    reverseCountry.push(countries[i].toUpperCase())
}

console.log(reverseCountry.reverse())