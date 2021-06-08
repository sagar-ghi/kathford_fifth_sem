const numbers = ['This pc belongs to', 'ram', '.']

const joinedNumbers = numbers.join(' ')

// console.log(joinedNumbers)

const str1 = 'https://mail.google.com/mail/u/3/#inbox'

const splittedArr = str1.split('/')
console.log(splittedArr)
console.log(splittedArr.join('-'))

console.log(str1.split('/').join('-').split('#').join('*'))