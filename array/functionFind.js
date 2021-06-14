//find Element 

// const arr2 = [{ a: 1, b: 2 }, { a: 4, b: 10 }]


// let output = {}

// for (let key of arr2) {
//     if (key.b === 2) {output = key
// break;}
// }
// console.log(output, '0️⃣')
// console.log(arr2)
// target  find object that contains b=2

// const target = arr2.find((key) => (key.b === 2) ? key : '')


const arr1 = ['a', 'b', 'c', 'd']

// const target = arr1.find(key => key == 'c' ? key : "")
//c
//''

const target = arr1.find(key => key === 'b')
//find b
//find undefined


console.log("My target achieved", target)