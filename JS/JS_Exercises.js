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
var game = play(1);
document.getElementById('x3').innerHTML = game;
var game = play(0);
document.getElementById('x4').innerHTML = game;

//Wrong solving
//Solving with "let"
function play(numberOfPlayers){
	let game1;
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

//It doesn't work!!!

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






