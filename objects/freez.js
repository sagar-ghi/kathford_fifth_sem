const freedObject = Object.freeze({ name: "hari", age: 21 })

freedObject.age = 22

console.log(freedObject)