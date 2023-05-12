//Create some Variables: for OUR BUTTON & for QUOTE
let btn = document.querrySelector('#new-quote'); //we SELECT a BUTTON whichj has an ID of "new-quote"
let quote = document.querrySelector('.quote'); //WE're STORED the SPAN - which has the "quote" - INSIDE of IT.
let person = document.querrySelector('.person');

//Now - we need an Array - for al those quotes:
const quotes = [{
  quote: '"The mystery of human existence lies not in just staying alive, but in finding something to live for."',
  person: 'Fyodor Dostoevsky'
}, {
  quote: '"Brick walls are there for a reason. The brick walls arent there to keep us out. The brick walls are there to show us how badly we want things."',
  person: 'Randy Pausch'
}, {
  quote: '"The only difference between a problem and a solution is that people understand the solution."',
  person: 'Charles F. Kettering'
}, {
  quote: '"Have nothing in your houses that you do not know to be useful, or believe to be beautiful."',
  person: 'William Morris'
}, {
  quote: '"A blazing fire makes flame and brightness out of everything that is thrown into it."',
  person: 'Unknown'
} ];

//3.APPLY an eventListener - to our BUTTON. (When we press the button - we generate NEW QUOTE).
//(One of these quotes)

//First - we need to CREATE a VAR - WHICH holds a BASIC MATH Ecuation.
//A Built-In Math Object: (and "this Object" - has SEVERAL MEthods.)

btn.addEventListener('click', function(){
  let random = Math.floor(Math.random() * quotes.length); //"Math.random() * quotes.length" - will GENERATE a NUMBER between "0" and THE TOTAL NUMBER of Quotes - inside of our quote array. | And WRAP IT in "Math.floor()"
  //|^This "var"(random) - ACCESS our PROPERTIES of our Array (a.k.a./which are "VARIABLES of (quotes:|person":)
  //|^Also this "equastion" - will RANDOMIZE through our quotes ARRAy.
  
  //However - we need to DISPLAY: "The quote" and "person" | INSIDE of OUR Array - TO A STRING FORMAT.
  //1.GRAB the "quote"
  //2.CHANGE the InnerText
  //SET it to - "quotesArray" [] ([] - to TURN IT into a STRING FORMAT) ??? and put the "random VARIABLE"[random]
  quote.innerText = quotes[random].quote;
  //DO the SAME for "person."
  person.innerText = quotes[random].person;

  //|^This - should RANDOMIZE THROUGH our quotes Array | and DISPLAY NEW QUOTES.
})