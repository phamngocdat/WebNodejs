var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');


var cat = new Cat();
var mouse = new Mouse('aaa');
var dog = new Dog();

try {
    cat.eat(dog);
} catch (error) {
    console.log('Error while cat');
}

console.log(cat);
