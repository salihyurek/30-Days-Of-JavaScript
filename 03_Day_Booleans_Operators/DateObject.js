
const now = new Date()

console.log(now)

console.log(now.getFullYear())

console.log(now.getMonth())

console.log(now.getDate())

console.log(now.getDay())

console.log(now.getHours())

console.log(now.getMinutes())

console.log(now.getSeconds())

// getting time 

console.log(now.getTime())

const allSeconds = Date.now()

console.log(allSeconds)

const timeInSeconds = new Date().getTime()

console.log(allSeconds == timeInSeconds) // true 


const nowTwo = new Date()

const year = now.getFullYear()

const month = now.getMonth() + 1

const date = now.getDate()

const hours = now.getHours()

const minutes = now.getMinutes()


console.log(`${date}/${month}/${year} ${hours}:${minutes}`)