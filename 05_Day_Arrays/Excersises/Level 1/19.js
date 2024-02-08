let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let middleIndex = Math.floor(itCompanies.length / 2); 

let middleCompanies;
if (itCompanies.length % 2 === 0) {
    middleCompanies = itCompanies.slice(middleIndex - 1, middleIndex + 1);
} else {
    middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1);
}
console.log(middleCompanies);