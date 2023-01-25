//Global Scope
let name = "John";
function printName(){
	document.getElementById('ex1').innerHTML = name;
};
printName();


//Function Scope
function run(){
	let animal = 'dog';
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
 
// the || Operator
let isTrue =  5 > 3 || 6 > 8; 
let isFalse = 1 > 3 || 2 > 8;
if(isTrue || isFalse){
	document.getElementById('oo').innerHTML = "It's gonna be true or false?";
}

let isTrue1 = 3 > 1 || 1 === 1;
let isTrue2 = 5 > 1 || 9 > 7;
if (isTrue1 || isTrue2){
	document.getElementById('oo1').innerHTML = 'True?';
}

let isFalse1 = 'n' > 'n' || 0 > 1;
let isFalse2 = 9 >= 9 || 0 < 0;
if (isFalse1 || isFalse2){
	document.getElementById('oo2').innerHTML = 'False!';
}



//the && operator
let isTrue3 = 1 > 0 && 50 > 4 * 9;
let isTrue4 = 1 > 0 && 2 > 1;
if (isTrue3 && isTrue4){
	document.getElementById('ao').innerHTML = 'True!';
}

//true && false = false
let isFalse3 = 3 > 2 && 0 < 1;
let isFalse4 = 1 > 2 && 1 < 0;
document.getElementById('ao1').innerHTML = isFalse3 && isFalse4;

 //! - Operator
 let x = true;
 document.getElementById('ao2').innerHTML = !x;

 //Logical Op 2
 var a = 10; 
 var b = 10;

 if (a === 10 && b === 10){
 	document.getElementById('lo').innerHTML = "true";
 }else{
 	document.getElementById('lo1').innerHTML = "false";
 }

 if (a === 10 || b === 10){
 	document.getElementById('lo2').innerHTML = "true";
 }else{
 	document.getElementById('lo3').innerHTML = "false";
 }

 if (a === 5 && b === 1){
 	document.getElementById('lo4').innerHTML = "true";
 }else{
 	document.getElementById('lo5').innerHTML = "false";
 }

// || OR Operator Exercises

document.getElementById('or').innerHTML = '0' || null;

const name0 = '' || null || 3 || 'Jason';
document.getElementById('or1').innerHTML = name0;

const val1 = undefined;
const val2 = 'Jason';
document.getElementById('or2').innerHTML = val1 || val2;

// && Operator - Exercises

const dog1 = {
	breed: 'Labaradoodle'
}
document.getElementById('ao3').innerHTML = dog1 && dog1.breed;

const val3 = 'Labarador';
const val4 = null;
document.getElementById('ao4').innerHTML = val3 && val4;

//,,it stops at the FIRST FALSY value
const val5 = 'Hello';
const val6 = 'World';
if(val5 && val6){
	document.getElementById('ao5').innerHTML = "You've made it into the if statement";
}

// (!) Not Operator
const dog2 = {
	breed: 'Doberman'
}
document.getElementById('no').innerHTML = !dog2.breed;

//What is the value of name?
let name2 = !!dog.name2; //true
name2 = !dog.name2 // true(?)
document.getElementById('no1').innerHTML = name2;
document.getElementById('no2').innerHTML = name2;

const ifStatement = !dog3.name3;
if(ifStatement){
	dog3.name3 = 'Max';
}
document.getElementById('no3').innerHTML = dog3;


//JavaScript Loops
let points = [1,2,3,4];
document.getElementById('lp').innerHTML = points;

var ourArray = [];
for (var i = 0; i < 5; i++){
	ourArray.push(i);
}
document.getElementById('lp2').innerHTML = ourArray;


