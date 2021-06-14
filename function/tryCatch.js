try {
    throw new Error('Something went wrong!')
    console.log("hello I'm on try block")
} catch (ex) {
    console.log("I'm on exception")
}