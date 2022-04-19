let me = {
    firstName: 'Jackie',
    lastName: 'Bearson',
    age: 29
}

me.lastName = 'Bearnson'

let attribute = 'age'

// console.log(me.firstName);
// console.log(me[attribute]);

delete me.age

let meal = {
    appetizer: 'Fries',
    entree: 'Burger',
    drink: 'Sprite',
    // fn: function test(param) {
    //     console.log('This works')
    // }
}

// meal.fn()

meal.dessert = 'Fried ice cream'

// let takeHome = meal.entree;
let {entree: takeHome} = meal
// let {appetizer} = meal
let {appetizer, drink} = meal



// console.log(me)

//For in loop

for(let attribue in me){
    console.log(attribue, me[attribue])
}

// for(let 'key stand-in' in "object to loop through") {
//     What you want to do
// }

//Classes
class Pet {
    constructor(value1, color, age) {
        this.name = value1,
        this.color = color,
        this.age = age
    }

    howOld() {
        console.log(`${this.name} is ${this.age} years old.`)
    }
}

// let object = new Pet('Gus Gus', 'Black and grey', 1)

// object.howOld()

class Dog extends Pet {
    constructor(name, color, age, breed) {
        super(name, color, age),
        this.breed = breed,
        this.trainingLevel = 0
    }

    train() {
        this.trainingLevel += 1
        console.log(`${this.name}'s training level is now ${this.trainingLevel}`)
    }
}

let myPet = new Dog('Gus Gus', 'Black and grey', 1, 'Bernedoodle')

myPet.train()

class Cat extends Pet {
    constructor(name, color, age, breed) {
        super(name, color, age),
        this.breed = breed
        this.temperment = 'sassy'
    }
}

