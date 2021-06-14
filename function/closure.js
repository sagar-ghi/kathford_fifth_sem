//function inside the function
//Is closure a higher function?
//yes 
//disadvantages
// overuse of memory

//advantages
//data encapsulate

function outer() {
    const name = 'ram'
    const age = 12
    // anything inside the braces have their own lexical environment
    //the se contains their own local variables
    function inner() {
        //lexical environment

        return `Name:${name} age:${age}`
    }
    return inner
}

outer()

//java
// public 

//using oop
class Outer {
    constructor() {
        this.name = 'ram'
        this.age = 12
    }
    inner() {
        return `Name:${this.name} age:${this.age}`
    }
}

const instance = new Outer()
console.log(instance.inner())


// currying

function add(num1) {
    return function (num2) {
        return num1 + num2
    }
}
console.log(add(2)(3))