let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal))) //prints all inherited properties
let rabbit = { jumps: true };
rabbit.__proto__ = animal; // OLD WAY - explicitly inherit from animal prototype
//console.log(rabbit.eats) // true, inherits prototype properties
console.log("-------------------------------------")
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(rabbit))) //prints all inherited properties
console.log("-------------------------------------")
console.log(rabbit)

