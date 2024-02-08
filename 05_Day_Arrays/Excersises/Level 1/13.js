let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let companyToCheck = 'Google'

// Belirli bir şirketin itCompanies dizisinde var olup olmadığını kontrol etme
if (itCompanies.includes(companyToCheck)) {
    console.log(companyToCheck + " exists in the itCompanies array.")
} else {
    console.log("A company is not found.")
}