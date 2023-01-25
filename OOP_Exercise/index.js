const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        document.write('draw'); //in this case THE VALUE is a function() - (that is for drawing the CIRCLE)
    }
};

//Let's define a few TERMS:
//This "circle" has 3 MEMBERS (radius, location, draw).
//If a MEMBER is a Func - we refer to that - as a METHOD. (DRAW - is a method). These OTHER members (radius, location) - are that we call PROPERTIES.
//In OOP - Properties are used - TO HOLD VALUES.

//Access it's members (using the DOT Notation)
circle.draw();

//Factory Function
//Create another Circle - but the CURRENT IMPLEMENTATION - we have to duplicate the code.
/*const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw'); 
};

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');  
};*/

//This can be a PROBLEM -if we have ONE or MORE Methods - in our Object.
//! Object - USUAL Synthax | it's not a GOOD WAY to create an Object and DUPLICATED - if this OBj (has at least ONE METHOD).
//Even if it has different Properties.
//The solution is to use: "FACTORY" or "CONSTRUCTOR" Function.

//Declare a Func() | and put all the CODE - inside of IT.
//We don't need to DECLARE  a "const" - we can SIMPLY "return {...]" <- this Obj.

function createCircle(radius){
	return {
		radius, // If the KEY: and the VALUE (are the same) - WE CAN REMOVE the VALUE. (!!! can only add "radius")
		draw: function() {			//Here - ADD  a "draw" METHOD. (with KEY:VALUE pairs).
			console.log('draw'); 
		}
	};
};

//CALL the Func();
const circle1 = createCircle(1);
circle2.draw();

//Constructor Function
//The CONVENTION for a (Constructor Function) is Different. (the FIRST letter should be UPPERCASE).
//In the "body of the Func()" - instead of RETURNING an OBJ - WE use the "this" keyword (to SET the PROPERTIES of this Obj).

function Circle3(radius){
	console.log(this); // this - <b>reffer to the circle{...} Obj. (Because we use the <b>new OPERATOR</b> (here: const another = <b>new</b> Circle(1)))
	this.radius = radius;
	this.draw = function(){
		console.log('draw');
	}
}
const another = new Circle3(1);


//this refer/ is a reference to the object that is executing this piece of code.
//this - is to reffer to that Obj. - and (.) dot notation - to set VARIOUS PROPERTIES - on that Obj.
//<mark>this.radius = radius;</mark> - <b>SET the "radius PROPERTY" to this "radius ARGUMENT"</b>

//Similary we can define ANOTHER property "this.draw = function()".
//Now - CREATE  a new Circle: <b>const another</b> - and use the <b>new</b> OPERATOR - <b>to call the Function</b> and pass (1) - ans an argument.

//this <b>new OPERATOR</b> - will create an <b>empty OBJ</b> - the IT WILL SET <b>this</b> - to <b>point to that (empty) OBJ</b>
//<b>by default - this - point to the GLOBAL Obj</b>
//We don't want to have /use "this" as a GLOBAL. (we don't want to DEFINE Global VAR).

//WHEN WE USE the <b>new OPERATOR</b> TO CALL a Function() - 3 things HAPPEN:
//1.This <b>new OP</b> - will create an EMPTY Obj.
//2.Then - it will set <b>this</b> to POINT to that Obj.
//3. It <b>will return the OBJ</b> from (that Function)...
//We dont have <b>an explicit return</b> statement - we're not <b>retunr this</b> - <b>this will happen automatically - when you use "new" OPERATOR</b>

//Basically - we have TWO ways to <b>create an Object</b> : Factory Func() | Constructor Func().

//What is the Difference between these TWO Patterns - for creating an OBJ? | Which Approach should I use?
//Both are OK.

//Factory Function
function createCircle2(radius){
    return{
        radius,
        draw:function(){
            console.log('draw2')
        }
    };
}
const circle2 = createCircle(1);

//Constructor Function
function Circle4(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw4')
    }
}
const another1 = new Circle3(1);