const person = {'name' : 'Zai', 'age' : 30, 'isFemale' : false}

const personTwo = {'uni' : 'UMMG', 'property' : null, 'sex' : 'male'}

const combinedPerson = {...person, ...personTwo}

function printName({name,age,property}){
    console.log(name,age,property);
}

printName(combinedPerson)