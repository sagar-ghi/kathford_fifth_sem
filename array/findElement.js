const arr1 = ['a', 'b', 'c', 'd']
// const arr2 = [{ a: 1, b: 2 }, { a: 4, b: 10 }]

const indexOfC = arr1.indexOf('c')
const indexOfOne = arr1.indexOf(1)
console.log(indexOfC)
console.log(indexOfOne)

// const arr2 = []
if (indexOfC === -1) {
    console.log("I'm here")
    arr1.push('c')
}
if (indexOfOne === -1) {
    arr1.push(1)
}

// console.log(arr1)
//preferment
console.log(arr1.includes('b'))