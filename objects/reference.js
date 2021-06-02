// js object are kept as reference in heap while primitive types are shot lived

let name = 'hari'

let surname = name

// console.log(name, surname)

name = 'miracle'

console.log(name, surname)


//object

let car = { color: ['red', 'black'] }

let truck = car

// console.log(car, truck)

car.color = ['purple']

console.log(car, truck)