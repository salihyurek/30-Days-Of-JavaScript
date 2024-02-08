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
let middleCountries = [];
const middleIndex = Math.floor(countries.length / 2);

if (countries.length % 2 === 0) {
    middleCountries.push(countries[middleIndex - 1]);
    middleCountries.push(countries[middleIndex]);
} else {
    middleCountries.push(countries[middleIndex]);
}

console.log("Middle country(ies):", middleCountries);
