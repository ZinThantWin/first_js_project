const person = {
    'name': 'Zai', 'age': 28, greet () {
        console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`)
    }
}
person.age = 20

console.log(person.age);
person.greet()
