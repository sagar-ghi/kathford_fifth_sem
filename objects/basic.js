// const obj={
//     key:value
// }
// js object are kept as reference in heap while primitive types are shot lived

const obj = {
    color: ['red', 'green', 'blue'],//first
    // isLatest: true,
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


const state = 'isLatest'
obj[state] = false

console.log(obj)

//  key=>color