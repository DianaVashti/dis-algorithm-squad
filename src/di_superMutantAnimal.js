const animals = ["cat","dog","fish"];

const longAssListOfAnimals = ["Elephant", "Antelope", "Zebra", "Platypus", "Goldfish", "Aligator", "Whale", "Shark", "Woodchuck", "Hummingbird", "Gazelle", "Anteater", "Dog", "Cat", "Polecat", "Ermine", "Turtle", "Octopus"]

// one line! Woo!
const reduceToMutantAnimal = (array) => array.reduce((a, b) => a.concat("-" + b));


//examples
console.log("Mutant animal made -->", reduceToMutantAnimal(animals))
console.log('')
console.log("SUPERMutant animal made -->", reduceToMutantAnimal(longAssListOfAnimals))
console.log('')
