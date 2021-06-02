const car = {
    color: ['red', 'green', 'blue'],
    isLatest: true,
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
//loop
//in
// console.log(car.color)
// console.log(car.location)
// console.log(car.start)
console.log("==============================")
// car.color
const test = []
for (let key in car) {
    // if (key === 'isLatest' && !!car[key]) {
    // console.log("Hi! your condition is truthy")
    // }
    // console.log(key)
    test.push(key)
}
// console.log(test)
// console.log(Object.values(car))
// for(const key in Object.keys)


for (const key of Object.keys(car)) {
    console.log(key)
}

if ('is' in car) {
    console.log('is Latest lies inside the car object')
}
