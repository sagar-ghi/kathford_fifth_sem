//types of scope model
//lexical scope
//dynamic scope

//lexical 
//compile time scope


function outer() {
    var num = 1
    function inner() {
        console.log(num)
    }
    inner()
}
outer()