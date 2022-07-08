// 1. dog & dog.breed
const dog = {
	breed : 'Labradoodle'
};
document.write(dog && dog.breed + "<br>");

// 2. What's the value of name?
const name = dog && dog.name;
document.write(name + "<br>");

// 2.1 What is the value of name?
let name1 = dog && dog.name1;
document.write(dog && dog.name1 + "<br>");

// 3. Provide values for val1 and val2 so that you enter the if statement.
const val1 = "Helllo";
const val2 = "World";
if (val1 && val2){
	document.write('You made it into the if statement' + "<br>")
}

document.write("<br>");
document.write("The AND operator <b>(&&)</b> returns TRUE if BOTH expressions ARE true - otherwise it RETURNS false." + "<br>");
//Execise 4:
let x = 6;
let y = 3;
document.write((x < 10 && y > 1) + "<br>" + (x < 10 && y < 1));

document.write('<h3>Logical NOT !</h3>');
document.write('The NOT Operator (!) - returns TRUE for FALSE STATEMENT and FLASE for TRUE STATEMENTS' + "<br>");
let a = 9;
let b = 7;
document.write(!(a === b) + "<br>" + !(a > b));

//5. Put "Hello World!" on the page in the "h1" tag
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h3>Hello World</h3>`;



