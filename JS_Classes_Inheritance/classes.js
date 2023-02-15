class Car {
  constructor(name, year){
    this.name = name;
		this.year = year;
  }
}

const myCar = new Car('Ford', 1970);

//Methods:
class CarMethod{
	constructor(name, year){
		this.name = name;
		this.year = year;
	}
	age(){
		let date = new Date();
		return date.getFullYear() - this.year;
	}
}

const myCarMethod = new CarMethod('Ford', 2020);

//INHERITANCE
class CarInherit {
	constructor(brand){
		this.carname = brand;
	}
	present() {
		return 'I have a ' + this.brand;
	}
}

class Model extends CarInherit {
	constructor(brand, mod){
		super(brand);
		this.model = mod;
	}
	show() {
		return this.present() + ', it is a ' + this.model;
	}
}

let myCarInherit = new Model('Ford', 'Mustang');




//--Youtube Example--
class Animal {
	constructor(alive){
		this.alive = alive;
	}
	eat(){
		console.log('This animal is eating');
	}
}

class Rabbit extends Animal{
	run(){
		console.log('This rabbit is running.')
	}
}
class Fish extends Animal{
	swim(){
		console.log('This fish is swimming.');
	}
}
class Hawk extends Animal{ 
	fly(){
		console.log('This hawk is flying.');
	}
}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

rabbit.run();
fish.swim();
hawk.fly();




//Example III ---
/**
class | extends | constructor | super | get | set | static
 **/

class Vehicle {
	constructor(_wheels){
		this.numWheels = _wheels;
	}
	get wheels(){
		return this.numWheels;
	}
	set wheels(_wheels){
		this.numWheels = _wheels;
	}
	static accelerate(){
		document.getElementById('ex1').innerHTML = 'Go faster!';
	}
	static decelerate(){
		//document.getElementById('ex2').innerHTML = 'Go slower!';
	}
}

let car = new Vehicle(4);
let car1 = new Vehicle(2);
let car2 = new Vehicle(6);

//extends

class CarII extends Vehicle{
	constructor(_wheels, _name, _model, _year){
		super(_wheels);
		this.name = _name;
		this.model = _model;
		this.year = _year;
	}

	info(){
		document.write('The ', this.name,' ', this.model, ' was made in ', this.year, ' and has ', this.wheels, ' wheels.');
	}
}

let ferrari = new CarII(4,'Ferrari', 'Testarossa', 1985);
