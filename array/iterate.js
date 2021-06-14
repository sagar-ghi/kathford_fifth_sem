// TODO map

const arr = ['a', 'b', 'c', 'd']
console.log(arr)
//iterate
const arr2 = arr.map((item) => item + item)

console.log(arr2)

//forEach
const testArr = []
const arr4 = arr.forEach(item => item + 1)
console.log(arr4)


//filter
//a ,d
const arr3 = arr.filter(item => item === 'a' || item === 'c')
console.log(arr3)

//some
const isExist = arr.some(item => item === 'f')
console.log(isExist)


//every
const isString = arr.every(item => typeof item === 'string')
console.log(isString)


//reduce
const num = [1, 2, 3, 4, 5]

const prev = num.reduce((acc, currValue) => currValue + acc, 0)

const person = [{ age: 10, height: 6 }, { age: 15, height: 16 }]

const output = person.reduce((acc, curr) => {
    acc.age = acc.age + curr.age / 2;
    acc.height = acc.height + curr.height / 2
    return acc
}, { age: 0, height: 0 })

console.log(output)
