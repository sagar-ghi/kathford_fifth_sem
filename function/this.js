//In method this references to the object itself
//function :this references to global object(I.e windows in browser and global in node)

const person = {
    age: 13,
    walk() {
        console.log("The age of hari is", this.age)
    }
}
person.walk()


function walk() {
    console.log(this)
}
// walk()

function Add(num1, num2) {
    this.num1 = num1 //property
    this.num2 = num2 //property
    this.sum = function () { //method
        return this.num1 + this.num2
    }

}
const result = new Add(12, 14)

console.log(result.sum())

const test = {
    num: 1,
    add: function () {
        console.log(this)
    },
    multiply: () => console.log(this)
}
// bind call apply



