// 

const arr1 = [1, 15, 2, 3, 4, 5]
//   0,1
console.log('🌛', arr1)

arr1.push(4, 5)
console.log(arr1)

arr1.unshift(1, 15)
console.log(arr1)

console.log(arr1.length)

//first parameter starting position
arr1.splice(1, 4, 44,232,23)
console.log(arr1)