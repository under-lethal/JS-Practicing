const myArray = [1, 2, 3, 4, 5];
const mySet = new Set(myArray);

let text = '';
mySet.forEach(function(value){
	text += value + ' ';
})

//ADD & Ouput an Object
mySet.add({channelName: 'JS-Mastery'});

let text2 = '';
for(const x of mySet.values()){
	text2 += x;
}

const myMap = new Map([['name', 'John'],['surname', 'Doe'],['age', 35]]);
let txt3 = '';
for(const y of myMap.entries()){
	txt3 += y + '<br>';
}

//myMap.forEach(function(value, key) {
	//txt3 += key + ': ' + value + '<br>';
//})

const myObject = {};

const a = {};
const b = {};

myObject[a] = 'a';

// let txt4 = '';
// for(const y of myObject.entries()){
// 	txt4 += y + '<br>';
// }

let txt7 = '';
myObject.forEach(function(value, key){
	txt7 += key + ': ' + value;
});

//Explore this problem - using Map();
const c = {};
const d = {};
const myMap2 = new Map([ [c,'c'], [d,'d'] ]);

// let txt5 = '';
// for(const z of myMap2.entries()){
// 	txt5 += z + '<br>'
// }

let txt8 = '';
myMap2.forEach(function(value, key){
	txt8 += key + ': ' + value;
});

//Map() - Set() Method:
//Map has a Set Method.
//Using "Set()" - we ca assign key:value pairs = to our "Set()".

const e = {};
const f = {};
const anotherMap = new Map([ [{},'e'], [{},'f'] ]); // let's EMPTY the OBJ. HERE: "{}".
anotherMap.set({}, 'g');

let txt6 = '';
for(const a of anotherMap.entries()){
	txt6 += a + '<br>'
}






	
