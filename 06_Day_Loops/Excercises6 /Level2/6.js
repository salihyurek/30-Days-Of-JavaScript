// Use the countries array to create the following array of arrays:
// Yukarıdaki ülke dizisini kullanarak aşağıdaki dizi dizisini oluşturun: 
/*
[
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
]
*/


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

let result = []
for (let i = 0; i < countries.length; i++) {
    result.push(`'${countries[i]}', '${countries[i].substring(0,3).toUpperCase()}', '${countries[i].length}'`)
}

for (const arr of result) {
    console.log(arr)
} 