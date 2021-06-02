//Operators
// that performs some operations on operands and produce some result
// example 5+5=10

//Arithmetic Operators => + - * / % ++ --
//comparison operators => == | === | != | > | < | >= | <=
//logical Operators => && || !
//Assignment Operators => = += -= /=  %=
//ternary/conditional operator // 
// bitwise operators Bitwise Not ~ 
// Bitwise Or |
//Bitwise and &

// !Arithmetic Operators
const result = 5 + 5
// const isOdd = 5 % 2


// console.log(result, isOdd)

// !comparison Operators
// ==
let num1 = 5
let num2 = '5'
let num3 = 7

// console.log(num1 == num2)
// console.log(num1 === num2)
// console.log(num1 != num3)

//! logical Operators

// console.log(typeof num1 === 'number' && typeof num3 === 'number');
// console.log(typeof num1 === !'number' || typeof num3 === 'string');


// !Assignment Operators
//=
// num1 = 7
// console.log("num1 is ===>", num1)

//+=
// num1 = num1 + 5
num1 += 7
console.log(num1)
// 12
//-=
num1 -= 10
console.log(num1)


//bitwise Operators
//  A => -(A+1)
const numbers = [1, 2, 3, 4, 5, 6]

function index(index) {
    return Boolean(~index)
}
// Array.indexOf(num)
// console.log(index(numbers.indexOf(9)))

//bitwise and &
//  1=> 00000001
//  2=> 00000010

// 15 00001111
function isOdd(int) {
    return (int & 1) === 1
}


console.log(isOdd(15))

// bitwise or
//  1=> 00000001
//  2=> 00000010
//  reutlt 3 

const role = { isManager: true, isAdmin: false }

// !Conditions
// ! control flow
const ramAge = 19
const hariAge = 19

// if (ramAge < hariAge) {
//     console.log('Ram is younger')

// } else if (hariAge < ramAge) {
//     console.log('Hari is younger')

// } else {
//     console.log('Both are at same age!')
// }

// if (ramAge < hariAge) {
//     console.log('Ram is younger')
// } else if (hariAge < ramAge) {
//     console.log('Hari is younger')
// }
//!ternary
// const younger = ramAge < hariAge ? 'Ram is younger!' : "Hari is younger"

// console.log("younger", younger)

// switch (ramAge < hariAge) {
//     case true:
//         return console.log('ram is younger')
//     case false:
//         console.log('hari is younger')
//     default:
//         console.log('Both are at same age')
// }


// [] => truthy / arr.length===0
//[]=>truthy
// {} => truthy  Object.keys(obj).length ===0
// undefined =>falsy
// null =>falsy
// '' =>falsy
// 0 =>falsy
// 's' =>truthy
//1 =>truthy


//loops
//iterate over something

// for 
//while
// do while
// for in
// for of


//! for(initial Expression ; condition ;increment/decrement Expression){
//! statement
// ! }
// for (let i = 0; i < arr.length; i++) {
//     if(i==3) break;
//     continue;
//     console.log(i)
// }

//while
let i = 0
let sum = 0
// const []
// while (i < 10) {
//     console.log(i);
//     i++
// }

//do while
// do {
//     console.log(i);
//     i++
// } while (i < 5)


//for in
// const arr=[4,5,6]
const arr = [1, 2, 3, 41, 5]
for (let i in arr) {
    console.log('Index is', i)
}
//for of
for (let i of arr){
    console.log("value is",i)
}



