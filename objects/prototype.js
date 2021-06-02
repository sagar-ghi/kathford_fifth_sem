function Car(name, color) {
    this.name = name
    this.color = color
    // this.start = function () {
    //     console.log(this.color, this.name)
    // }
    // const obj = {
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

    // }
    // return obj
}
Car.prototype.start = function () {
    console.log(this.color, this.name)
}

const bmwCar = new Car("BMW", 'red') //



