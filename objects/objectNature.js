const obj = {
    releaseDate: 1,
    isLatest: true,
    color: ['red', 'green', 'blue'],//first
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
delete obj.releaseDate

obj.isLatest = 1
console.log(obj)

// Math.sqrt