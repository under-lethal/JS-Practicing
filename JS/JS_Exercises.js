//Global Scope
let name = "John";
function printName(){
	document.getElementById('ex1').innerHTML = name;
};
printName();


//Function Scope
function run(){
	let animal = 'Radar';
	document.getElementById('ex2').innerHTML = animal;
}
run();


//Nested Function
function two(){
	return function(){
		document.getElementById('ex2a').innerHTML = "Nested Function."
	}
}
let myFunction = two();
myFunction();


//Another Nested Function
function sayHi(fname,lname){
	function getFullName(){
		return fname + ' ' + lname;
	}
	return getFullName();
}
var message = sayHi("Andy", "Anderson");
document.getElementById('ex2b').innerHTML = message;
 

//Block Scope
function watchCourse(){
	const courseName = 'JS Fundamentals';
	let started = true;

	if(started){
		let progress = 50;
		document.getElementById('ex3').innerHTML = `I am ${progress} percent done with ${courseName}.`;
	}else{
		let progress = 0;
		document.getElementById('ex3').innerHTML = `I am ${progress} percent done with ${courseName}`;
	}
}

watchCourse();

function play(numberOfPlayers){
	if (numberOfPlayers === 1){
		var game = 'Super Mario Odyssey';
	} else {
		var game = 'Super Smash Brothers';
	}
	function format(){
		return `You're playing ${game}.`;
	}
	return format();
}
var game0 = play(1);
document.getElementById('x3').innerHTML = game0;
var game0 = play(0);
document.getElementById('x4').innerHTML = game0;

//Wrong solving
//Solving with "let"
function play(numberOfPlayers){
	let game1; //hoisting
	if(numberOfPlayers === 1){
		game1 = 'Super Mario Odyssey';
	}else{
		game1 = 'Super Mario Brothers';
	}
	function format(){
		return `You're playng ${game1}.`;
	}
	return format();
}
var game1 = play(1);
document.getElementById('x5').innerHTML = game1;



//var, let, const
var dog = 'Duke';
document.getElementById('ex4').innerHTML = dog;

var dog = 'Max';
document.getElementById('ex4').innerHTML = dog;

function Dog() {	
let dog1 = 'Radar';
document.getElementById('ex5').innerHTML = dog1;	
}
Dog();

function myDog(name){
	function outputMyDog(){
		return name;
	}
	return outputMyDog();
}
var output = myDog("Radar2");
document.getElementById('ex6').innerHTML = output;

function justAnotherDog(){
const doggy = {
	name: 'Bella'
}
document.getElementById('ex7').innerHTML = doggy.name;
}
justAnotherDog();

const dogs = ['Darla', 'Eva'];
document.getElementById('ex8').innerHTML = dogs;
dogs.push('Marco');
document.getElementById('ex8').innerHTML = dogs;

//Exercise 5;
var person = "Jack";
var person2 = person;
document.getElementById('ex9').innerHTML = person2;


//this.
function sayHi(){
	document.getElementById('ex10').innerHTML = this;
	document.getElementById('ex11').innerHTML = `Hello ${this.name}!`;
}

const person3 = {
	name: 'Preston',
	sayHi,
};

sayHi();
person3.sayHi();

//Exercise 12 "this" Determining context
const person4 = {
	name:'Alen',
	sayHello: function () {		
		document.getElementById('ex13').innerHTML = `Hello ${this.name}!`;
	},
};
person4.sayHello();


//Exercise 14-15 - this.
function sayHello() {
	document.getElementById('ex14').innerHTML = this;
	document.getElementById('ex15').innerHTML = `Hello ${this.name}!`;
}

const person5 = {
	name: 'Preston',
	sayHello,
	wife: {
		name: 'Amanda',
		sayHello,
	},
};
person5.sayHello();
person5.wife.sayHello();

//Ex 16-17-18
function sayOla(){
	document.getElementById('ex16').innerHTML = this;
	document.getElementById('ex17').innerHTML = `Hello, ${this.name1}!`;
}

const person6 = {
	name1: "Preston",
};

sayOla.call(person6);
//sayOla.apply(person6);
//const newFn = sayOla.bind(person6);
//newFn();

// Example 18-19
const person7 = {
	name: 'Andrew',
	sayAloha: () => {
		document.getElementById('ex18').innerHTML = this;
		document.getElementById('ex19').innerHTML = `Hello ${this.name}!`;
	},
};
person7.sayAloha();

//Exercises
/*function Dog(dogName, breed) {
	this.dogName = dogName;
	this.breed = breed;
}
 function bark() {
 	return `${this.dogName} is barking!`;
 }
 const myDog =  new Dog('Duke');
 document.getElementById('ex20').innerHTML = bark(); */

//2
function Person() {
  this.name = 'Preston';
}
const me = new Person();
document.getElementById('ex21').innerHTML = me;

//3 function as a Method
const newDog = {
	dogName: 'Fluffy',
	breed: '3 Headed Monster',
	sleep: function(){
		return `${this.dogName} is playing!`;
	}
}
document.getElementById('ex22').innerHTML = newDog.sleep();

//4 nested...?
function dogIsPlaying(){
	return `${this.dogName} is playing!`;
}
 
const parentDog = {
	dogName: 'Pongo',
	breed: 'Dalmatian',
	play: dogIsPlaying,
	puppy: {
		dogName: 'Patch',
		breed: 'Pittbul',
		play: dogIsPlaying
	}
}
document.getElementById('ex23').innerHTML = parentDog.play();
document.getElementById('ex24').innerHTML = parentDog.puppy.play();

//sau 
/*const pongo = parentDog.play();
const patch = parentDog.puppy.play();
document.getElementById('ex23').innerHTML = pongo;
document.getElementById('ex24').innerHTML = patch;
*/

//5 .call();
function eatBaseballs(){
	return `${this.dogName} ate another baseball!`;
}

const sandlotDog = {
	dogName: 'Hercules',
	breed: 'Huge ol dog'
}

const result = eatBaseballs.call(sandlotDog);
document.getElementById('ex24').innerHTML = result;

//determing the context inside
const person8 = {
	personName:'Criss',
	order: () => {
		return `${this.personName} ordered a pizza.`;
	}
}
document.getElementById('ex25').innerHTML = person8.order();

// 7.
const spouse = {
	personName1: 'Amanda',
	desiredToppings: ['peperoni', 'green pepper', 'olive', 'bacon'],
	order: function(){
		return this.desiredToppings.reduce(() =>{
			return `${this.personName1} wants a ${this.desiredToppings.length} topping pizza ${this.desiredToppings.join(', ')}.`;
			}, '')
		}
	}
document.getElementById('ex26').innerHTML = spouse.order();
 
 //Exercises console.log
document.getElementById('ex27').innerHTML = "Sergiu Chis";
document.getElementById('ex28').innerHTML = 20;

//an object that describes your favourite Pizza.
const pizza = {
	crust: 'thin',
	sauce: 'alfredo',
	toppings: ['chicken', 'bacon', 'ranch', 'tomatoes']
}
document.getElementById('ex29').innerHTML = pizza.toppings;

//an Array of friends
document.getElementById('ex30').innerHTML = ['Ana', 'Joe', 'Brooke', 'Amanda'];

//favorite pizza
let pizza2 = {
  crust: 'thin',
  sauce: 'alfredo',
  toppings: ['chicken', 'bacon', 'ranch', 'tomatoes']
};
document.getElementById('ex31').innerHTML = "My favorite pizza is:" +" "+ pizza2.crust +" with "+ pizza2.sauce +" sauce and "+ pizza2.toppings +" toppings.";

//Exercises console.log (2)
document.getElementById('ex32').innerHTML = "My favorite desert is: Strawberries";

const flavor = "Mango";
document.getElementById('ex33').innerHTML = "My favorite icecream is: " + flavor;

const desert = {
 	iceCream: "Apple",
 	toppings: ['Lemon', 'Strawberry', 'Mango']
};
document.getElementById('ex34').innerHTML = `My favorite ice cream is ${desert.iceCream} with topping of ${desert.toppings}.`

//Another 3 Exercises
const pizza3 = {
	crust: 'thin',
	sauce: 'onion',
	toppings: ['peperoni', 'bacon', 'tomatoes']
};

document.getElementById('ex35').innerHTML = `${pizza3.crust} ${pizza3.sauce} ${pizza3.toppings}`;
 









