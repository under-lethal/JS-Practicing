//Create an Object Literal

const person = {
	fName: 'John',
	lName:'Doe',
	age: 50,
	eyeColor: 'blue'
};

//JS for...in LOOP
const personL = {
	fname:" John",
  lname:" Doe",
  age: 25
};

let txt = '';
for (let x in personL){
	txt += personL[x];
}

//
