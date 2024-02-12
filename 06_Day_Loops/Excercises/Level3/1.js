// Copy countries array(Avoid mutation)
// turkish: ülke dizisini kopyalayın (mutasyondan kaçının)

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

let countriesCopy = countries.slice()
console.log(countriesCopy) // [ 'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya' ]
