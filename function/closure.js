//function inside the function
//Is closure a higher function?
//yes 

function outer() {
    const name = 'ram'
    const age = 12
    // anything inside the braces have their own lexical environment
    //the se contains their own local variables
    function inner() {
        //lexical environment
        return `Name:${name} age:${age}`
    }
    return inner
}

outer()