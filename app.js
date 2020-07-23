//Object Oriented Programming

//Prototypal Inheritance

const dog = {
    name: 'Michael',
    goodBoy: true,
    gender: 'girl'
};

console.log(dog);

const dogTwo = {
    name: 'Rocco',
}

dogTwo.__proto__ = dog;

console.log(dogTwo.goodBoy);
console.log(dogTwo.name);

//Make tow objects need to inherit from the object. 

const tanner = {
    name: 'Tanner',
    goodBoy: true,
    gender: 'boy',
    favoriteSport: 'soccer'
}

const rome = {
    name: 'Rome',
    goodBoy: true,
    job: 'GA instructor'
}

rome.__proto__ = tanner;

console.log(rome.favoriteSport);


//Constructor Functions