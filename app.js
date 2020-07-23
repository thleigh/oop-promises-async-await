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


//Constructor Functions (constructor functions are always capitalized)
function User(name) {
    this.name = name;

    //return this

}

let adam = new User('Adam');
let pete = new User('Pete');

console.log(adam.name);
console.log(pete.name);

function NBAPlayer(name, team, threePointShooter) {
    this.name = name;
    this.team = name;
    this.threePointShooter = threePointShooter;
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
console.log(steph);
console.log(steph.name);

//make a constructor function
//make 3 new variables with that constructor function

function Spurs(name, number, position) {
    this.name = name;
    this.number = number;
    this.position = position;
}

let son = new Spurs('Heung-min Son', '7', 'Winger');
let kane = new Spurs('Harry Kane', '10', 'Striker');

console.log(son);
console.log(kane);