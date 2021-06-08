const arr = ['a', 'b', 'c', 'd']

//removing from array
//Removes the last element from an array and returns it.
//  If the array is empty, undefined is returned and the array is not modified.
console.log(arr)

const last = arr.pop()

console.log(arr)

// *first element remove
// shift()

const first = arr.shift()
console.log(first, 'This is first')
console.log(arr, "This is arr")


//Remove one or more elements from the middle
//splice()
const arr1 = ['a', 'b', 'c', 'd','e']

const removedElement=arr1.splice(1,2)
console.log('===================================================')
console.log(removedElement)
console.log(arr1)
