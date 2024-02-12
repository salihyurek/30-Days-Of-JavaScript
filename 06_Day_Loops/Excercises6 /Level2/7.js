// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// turkish: Yukarıdaki ülkeler dizisinde, 'land' kelimesini içeren bir ülke veya ülkeler olup olmadığını kontrol edin. 'land' içeren ülkeler varsa, bunu dizi olarak yazdırın. 'land' kelimesini içeren bir ülke yoksa, 'Tüm bu ülkeler topraksızdır' yazdırın.

// ['Finland','Ireland', 'Iceland']

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Iceland',
    'Ireland',
    'Japan',
    'Kenya'
  ]

for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        console.log(countries[i])
    }
}
