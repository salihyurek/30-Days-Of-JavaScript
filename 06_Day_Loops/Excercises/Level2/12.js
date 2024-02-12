// Use the webTechs array to create the following array of arrays:
// webTechs dizisini kullanarak aşağıdaki dizi dizisini oluşturun:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let webTechsArray = []

for (let i = 0; i < webTechs.length; i++) {
    webTechsArray.push([webTechs[i], webTechs[i].length]);
}

console.log(webTechsArray); // [ [ 'HTML', 4 ], [ 'CSS', 3 ], [ 'JavaScript', 10 ], [ 'React', 5 ], [ 'Redux', 5 ], [ 'Node', 4 ], [ 'MongoDB', 7 ] ]