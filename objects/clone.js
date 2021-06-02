const car = {
    color: ['red', 'green', 'blue'],
    isLatest: true,
    isBoolean: false,
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

// react 
// mutate
// car.color = 'red'
const newObject = {
    color: ['red', 'green', 'blue'],
    isLatest: false,
    isOriginal: false,
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
// console.log(newObject)
// console.log(car)

const newObject2 = Object.assign(newObject, car)
console.log(newObject2)
// console.log(car, newObject)