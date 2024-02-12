// Extract all the countries contain the word 'land' from the countries array and print it as array
// turkish: 'land' kelimesini içeren tüm ülkeleri ülkeler dizisinden çıkarın ve dizi olarak yazdırın

let countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];

let landCountries = [];

for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes('land')) {
        landCountries.push(countries[i]);
    }
}

console.log(landCountries)