// Shorting Elements in Array

// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
// sort: dizi öğelerini artan sırada düzenleyin. Sort bir geri arama fonksiyonuna sahiptir, önümüzdeki bölümlerde sort'u geri arama fonksiyonuyla nasıl kullandığımızı göreceğiz.

// Syntax
// arr.sort()

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  webTechs.sort()
  console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
  webTechs.reverse() // after sorting we can reverse it
  console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]