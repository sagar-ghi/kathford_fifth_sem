//pure function 
//if you gave certian input to the function ,the output should be always same
//it should created a site efffect

// f(x)=2x

const double = x => 2 * x

console.log(double(2))


//impure case 
const impureFunc = (x, random) => {

    return random * x * 2
}

const rand = 2.3
console.log(rand)
console.log(impureFunc(2, rand))