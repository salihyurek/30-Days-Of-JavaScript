let nums = [1, 2, 3]
nums[0] = 10
console.log(nums)

let nums2 = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums2 == numbers) // nums dediğim zaman hata aldım, değişkenin ismini nums1 olarak değiştirdim. halbuki hata vermemesi lazımdı

let userOne = {
    name: 'Salih',
    role: 'Software Developer',
    country: 'Turkey'
}

let userTwo = {
    name: 'Salih',
    role: 'Software Developer',
    country: 'Turkey'
}

console.log(userOne == userTwo)

let numbers1 = nums // yeniden bildirilmedi numbers
console.log(numbers1 == nums) // true 

let userOne1 = {
    name: 'Salih',
    role: 'Software Developer',
    country: 'Turkey',
    age: 24 
}

let userTwo1 = userOne1
console.log(userOne1 == userTwo1)