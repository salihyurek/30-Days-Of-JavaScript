// Find the longest word in the webTechs array
// webTechs dizisindeki en uzun kelimeyi bulun

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let maxCharacterCountry = webTechs[0]; // En fazla karaktere sahip web Tech saklar

for (let i = 0; i < webTechs.length; i++) {
    if(webTechs[i].length > maxCharacterCountry.length) {
        maxCharacterCountry = webTechs[i];
    }
}

console.log(maxCharacterCountry); // JavaScript