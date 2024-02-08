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
let firstHalfCountries, secondHalfCountries;

if (countries.length % 2 === 0) {
    const middleIndex = countries.length / 2;
    firstHalfCountries = countries.slice(0, middleIndex);
    secondHalfCountries = countries.slice(middleIndex);
} else {
    const middleIndex = Math.ceil(countries.length / 2);
    firstHalfCountries = countries.slice(0, middleIndex);
    secondHalfCountries = countries.slice(middleIndex);
}

console.log("First half countries:", firstHalfCountries);
console.log("Second half countries:", secondHalfCountries);
