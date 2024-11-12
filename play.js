const name = 'Zai'
let age = 27
const female = true
let totalCount = 0

while (totalCount < 10) {
    age++
    totalCount++
}

function getBiographyWithPrint(name, age, female) {
    if (female) {
        console.log(`My name is ${name}. I am ${age} years old. I am a woman. This is a print function`);
    } else {
        console.log(`My name is ${name}. I am ${age} years old. I am a man. This is a print function`);
    }
}

const getBiographyWithoutPrint = (name, age, female) => {
    if (female) {
        return `My name is ${name}. I am ${age} years old. I am a woman. This is not a print function`;
    } else {
        return `My name is ${name}. I am ${age} years old. I am a man. This is not a print function`;
    }
}

const add = (a,b) => a+b

getBiographyWithPrint(name, age, female)
console.log(add(3,90));
console.log(getBiographyWithoutPrint(name, age, female));