// Using the above countries array, create the following new array.
// turkish: Yukarıdaki ülke dizisini kullanarak aşağıdaki yeni diziyi oluşturun.

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

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

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i].toUpperCase())
}
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"] gibi bir çıktı alırız.