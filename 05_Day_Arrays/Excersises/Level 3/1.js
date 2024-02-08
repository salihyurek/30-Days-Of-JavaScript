const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort()

const minAge = ages[0];
const maxAge = ages[ages.length - 1]

let medianAge;
if (ages.length % 2 === 0)
    medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
else
    medianAge = ages[Math.floor(ages.length / 2)]

const sum = ages.reduce((total, age) => total + age, 0);
const averageAge = sum / ages.length;

const range = maxAge - minAge;

const differenceMin = Math.abs(minAge - averageAge);
const differenceMax = Math.abs(maxAge - averageAge);

console.log("Sorted ages: ", ages);
console.log("Minimum age: ", minAge);
console.log("Maximum age: ", maxAge);
console.log("Median age: ", medianAge);
console.log("Average age: ", averageAge);
console.log("Range of ages: ", range);
console.log("Difference between min and average: ", differenceMin);
console.log("Difference between max and average: ", differenceMax);
