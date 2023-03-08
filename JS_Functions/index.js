//Normal Function
function myFunction(a, b){
	return a + b;
}

//Anonymous Function
const x = function(a,b) {return a * b};



//The call() Method
const person = {
	fullName: function(){
		return this.firstName + ' ' + this.lastName;
	}
};

const person1 = {
	firstName:'John',
	lastName:'Doe'
}

const person2 = {
	firstName:'Mary',
	lastName:'Doe'
}



//The apply() method
const personX = {
	fullName: function(){
		return this.firstName + ' ' + this.lastName;
	}
}

const person1X = {
	firstName: 'Alen',
	lastName: 'Poe'
}



//The bind() method
const personY = {
	fName: 'Joe',
	lName: 'Biden',
	fullName: function(){
		return this.fName + ' ' + this.lName;
	}
};

const member = {
	fName: 'Hege',
	lName: 'Nilsen',
};

let fullName = personY.fullName.bind(member);


//The bind() method  - PRESERVING "this"
// const personZ = {
// 	firstName: 'Edward',
// 	lastName:'Norton',
// 	display: function(){
// 		let x = document.getElementById('bind2');
// 		x.innerHTML = this.firstName + ' ' + this.lastName;
// 	}
// };
//  let display = personZ.display.bind(personZ);
//  setTimeout(display, 3000);

