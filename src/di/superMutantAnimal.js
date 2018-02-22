// Write an function that takes an array of animal species' as strings and
// returns a single string of all the names connected with a "-".

// example:
// input:  ["Elephant", "Antelope", "Zebra", "Platypus", "Goldfish", "Aligator", "Whale", "Shark", "Woodchuck", "Hummingbird", "Gazelle", "Anteater", "Dog", "Cat", "Polecat", "Ermine", "Turtle", "Octopus"]
// output: "Elephant-Antelope-Zebra-Platypus-Goldfish-Aligator-Whale-Shark-Woodchuck-Hummingbird-Gazelle-Anteater-Dog-Cat-Polecat-Ermine-Turtle-Octopus"

// name your function superMutantAnimal()
// -----------------------------------------------------------------------------

// one line! Woo!
const reduceToMutantAnimal = (array) => array.reduce((a, b) => a.concat("-" + b));


const animals = ["cat","dog","fish"];
const longAssListOfAnimals = ["Elephant", "Antelope", "Zebra", "Platypus", "Goldfish", "Aligator", "Whale", "Shark", "Woodchuck", "Hummingbird", "Gazelle", "Anteater", "Dog", "Cat", "Polecat", "Ermine", "Turtle", "Octopus"]

//examples
console.log("Mutant animal made -->", reduceToMutantAnimal(animals))
console.log('')
console.log("SUPERMutant animal made -->", reduceToMutantAnimal(longAssListOfAnimals))
console.log('')
