const person = { "name": "Zai", 'age': 20 }

const hobbies = ["Gaming", '', 1, 'watching movies', person]

const copiedHobbies = [...hobbies]

const drinks = ["coffee", 'beer', 'tiger', 'change']

const combinedArray = hobbies.concat(drinks)

const transformedArray = hobbies.map((a) => String(a))

const toArrays = (...args) => args

console.log(toArrays(1,'abcd',2,3,false))