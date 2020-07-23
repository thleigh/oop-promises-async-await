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
    this.intro = function() {
        console.log('Hi, my name is ' + this.name);
    }
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
console.log(steph);
console.log(steph.name);
steph.intro();

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

//Class

class Car {
    constructor(year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }
    drive() {
        console.log('Vroom');
    }
    intro() {
        console.log('This car is a ' + this.make + ' ' + this.model);
    }
}

let tesla = new Car('2020', 'Tesla', 'Model X', 'red');
console.log(tesla);

tesla.drive();
tesla.intro();


class GithubProfile {
    constructor(username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }
    intro() {
        console.log(`My name is ${this.name} and my username is ${this.username}.`)
    }
}
//https://api.github.com/users/thleigh

fetch('https://api.github.com/users/thleigh')
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data);
    let githubURL = data.url;
    let githubUsername = data.login;
    let githubName = data.name;

    let tanner = new GithubProfile(githubUsername, githubName, githubURL);
    console.log(tanner);

    tanner.intro();
});