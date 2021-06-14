// function add({name,age}) {
//     // const { name, age } = arg
//     return `My name is ${name} .My age is ${age}`

// }
const add = ({ name, age }) => `My name is ${name} .My age is ${age}`

console.log(add({ age: 12, name: 'Ram' }))
console.log(add({ name: "Hari", age: 12 }))


//chaining
const arr = [1, 2, 3, 'a', 12, 'b']
const result = arr.filter(item => typeof item === 'number')




//chaining
const arr = [1, 2, 3, 'a', 12, 'b']

// const forEachResult=arr.forEach(item=>)?.


const result = arr
    .filter(item => typeof item === 'number')
    .map(item => item * 2)
    .reduce((acc, curr) => acc + curr, 0)
console.log(result)