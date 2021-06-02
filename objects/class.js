//alternative to constructor/factory function

//class is a blueprint
//just a concept

// encapsulates data/functionality
class Area {
    constructor(length, height) {
        this.length = length; //data
        this.height = height;
    }
    totalArea() {
        console.log(this.height * this.length)
    }

}

const a = new Area(10, 123)//instance create
console.log(a.totalArea())
//actually describe

//inheritance
//polymorphism
//encapsulation
//abstraction