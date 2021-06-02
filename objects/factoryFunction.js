function Car(name) {
    const obj = {
        name: name,
        color: ['red', 'green'],
        start: function () {
            console.log('start is called')
        },
        location: {
            x: 34,
            y: 45,
            coordinates: {

            }
        }

    }
    return obj
}

const bmwProperties = new Car("BMW")
const hondaProperties = new Car('Honda')

// console.log(bmwProperties)
// console.log(hondaProperties)


console.log(Car.length)
console.log(Car.name)

// const newObject = new Function('truck', `  const obj = {
//     name: name,
//     color: ['red', 'green'],
//     start: function () {
//         console.log('start is called')
//     },
//     location: {
//         x: 34,
//         y: 45,
//         coordinates: {

//         }
//     }

// }`)