//complete this code
class Animal {
	constructor(species) {
    // Store species in a property prefixed with an underscore
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
	bark() {
    console.log("woof");
}

class Cat extends Animal {
	purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
