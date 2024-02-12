// Find the country containing the hightest number of characters in the countries array
// turkish: ülkeler dizisinde en fazla karakter içeren ülkeyi bulun

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

let maxCharacterCountry = countries[0]; // En fazla karaktere sahip ülkeyi saklar

for (let i = 1; i < countries.length; i++) {
    if(countries[i].length > maxCharacterCountry.length) {
        maxCharacterCountry = countries[i];
    }
}

console.log(maxCharacterCountry); // Ethiopia
