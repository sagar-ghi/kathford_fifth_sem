let description = 'My name is {name} and I live in {city} of {country}'

const obj = {
    name: "hari",
    city: "kathmandu",
    country: 'nepal'
}
//pick obj //name//city//country

// for (let [key, value] of Object.entries(obj)) {

// }

for (let key of Object.keys(obj)) {
    console.log(key)
    console.log(obj[key])
    description = description.replace(`{${key}}`, obj[key])
    console.log(description)
}


//