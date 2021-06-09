//js supports first class function
//function as a argument to another function or returns a new function when they are called

function area(func) {
    console.log(func)
    const result = func()
    console.log(result)
    return 'world'
    // return () => 'world'
}
console.log(area(() => 'hello'))

//commonly used when working with async code