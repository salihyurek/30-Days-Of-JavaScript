// Using the above countries array, create an array for countries length'.
// Yukarıdaki ülke dizisini kullanarak ülke uzunlukları için bir dizi oluşturun.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

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

  let countriesLength = []

  for (let i = 0; i < countries.length; i++) {
    countriesLength[i] = countries[i].length
  }

    console.log(countriesLength) // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5] gibi bir çıktı alırız.