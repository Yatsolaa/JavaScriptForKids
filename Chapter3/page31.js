var animals = [];
animals.push("cat");
animals.push("dog");
animals.unshift("mouse");
animals.unshift("birds");
var firstAnimal = animals.shift ();

var lastAnimal = animals.pop ();

animals.push (firstAnimal);

animals.unshift (lastAnimal);

animals;