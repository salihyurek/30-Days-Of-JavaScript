let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

for (let index = 0; index < itCompanies.length; index++) {
    const element = itCompanies[index];
        if(itCompanies[index].includes('o' || 'O'))
            console.log(itCompanies[index] , ' has an o') 
        else 
            console.log('No "o" in ' , itCompanies[index])
}