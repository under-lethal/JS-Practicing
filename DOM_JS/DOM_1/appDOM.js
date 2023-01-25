//https://www.youtube.com/watch?v=P7NgFfIaWgU&t

//1.SELECTING ELEMENTS

//In order to manipulate ELEM in a DOMTree - we fisrt have to SELECT that particular element.
//...several ways to do this. 
//5 Major ways - of selecting the Elements.


//GetElementById()

//GetElementBYClassName()

//GetElementByTagName()

//querrySelector()

//querrySelectorAll()



//GetElementById()
//..you can select element - using this Method - by its unique ID.
// "h1" in the main BROWSER has the id of "main-heading" so, this is the element we're going to be selecting.

//I'st we need to select (Document Object Model). [placed - INSIDE of a VARIABLE - so we can manipulate].

//const title = document.GetElementById('main-heading');
//console.log(title);

//now - we can SELECT that VAR - and can ADD (styles to the element, manipulate).


//GetElementByClassName()
//this METHOD returns a COLLECTION of ALL the ELEMENTS in the DOCUMENT with that "SPECIFIED CLASS NAME".
//all our <li> items - have that class name: "list-item".
//we can select them  using - "getElemByClassname() - method".

//const listItem = getElementByClassName('list-items');
//console.log(listItem);

//this METHOD returns - an array LIKE OBJECT (of all the child elements - which have all the given class names).


//GetElementByTagName()
//similar to "ClassName" - returns all of the ELEM. (of that specified tag name) - in order in WHICH THEY appear in the Document.
//returning an array LIKE OBJECT

//const listItem = getElementByTagName('li');
//console.log(listItem);

//we got an HTML collection of all the 5 list items.
//they're all indesed in order that appear in the html file.


//querrySelector()
//Is used to select THE FIRST ITEM that matches - the selector is  given.
//IF YOU HAVE MULTIPLE ITEMS WITH THE SAME CLASS NAME (or the sam ID / or TAG) - it will select the first ONE.
// IT also can ACCEPT - all CSS style SELECTORS. (by it's TAG, CLASS, ID)
// we can use THIS method TO grab ANY element in our HTML file.
//const container = document.querrySelector('div'); // we grab the "div" tag.
//console.log(container);


//querrySelectorAll();
//if we have more "divs" we were to select them all.
//const container = document.querrySelectorAll('div'); // we grab the "div" tag.
//console.log(container);

//This method returns a node (list of collections) of all the matchig elements - that MATCHES that specific CSS Selector
//(in this case is a div).
//similar to getElemByTag or getElemByClassName.

//-------------------------------------------------------------------------------------------------------------------------------

//2.DOM MANIPULATION - MANIPULATE/STYLING Elements

//2.1 Styling an Element
//How to change a STYLING of an Elmement
//We can acces these CSS ELEMENTS with JS:

//Select "this" MAIN Heading: - put in a VARIABLE:
const title = document.querySelector('#main-heading');

//now we manipulate this element and CHANGE it AROUND - using CSS Properties.
//1.First we grab the VAR we want to APPLY the styling; (titile - in this case)
//2.Simply type "style property"
//3.USE - any CSS property (you want to apply to this element).
title.style.color ='red';
console.log(title); 

//CSS Properties are written in camelCase.
const listItems = document.querySelectorAll('.list-items');

//NOT Working - because it's tryng to apply an INLINE STYLE (to 5 different list-items).
//IF we want to apply this styling - to all of the list-items- we NEED to LOOP through.
for (i = 0; i < listItems.length; i++){
	listItems[i].style.fontSize = '2rem';	
}
console.log(listItems);

//-------------------------------------------------------------------------------------------------------------------------------

//3.CREATING ELEMENTS
//Add another list item in our "Fav Movie";

const ul = document.querySelector('ul');
//now - use createElement - METHOD.
const li = document.createElement('li'); //we create a "list-item"

//3.1 Append Child / ADDING Elements
//our VAR(and this elem.:"document.createElement('li')") - needs to be INSERTED -into OUR Document.
//The way - WE CAN ADD ELEMENETS (inside of the documents) - is USING "the append. - METHOD";
//...using - append METHOD.
//1. grab the "ul"; ('cause - we want to append this "listItems" inside this "ul").
//2. grab the "append" METHOD.
//3. then - the Elem. we want to append.
ul.append(li)

//4. add some content inside of our list-Item.
//Include or Modify Text.
//1.add a "span" inside the 1'st "li";
//2.create a VAR that GRAB that "span element". (and include innerText);

//const firstListItem = document.querySelector('.list-items');
//console.log(firstListItem.innerText);
//console.log(firstListItem.textContent);
//console.log(firstListItem.innerHTML);

//3.2 Modify Text
//!* There is a bit of a DANGER (using .innerHTML) - security ISSUES.
//You don;t want user INPUT to be DISPLAYED in the innerHTML (because - THIS actually allows THE USER to control the JS and HTML on your webPage.)
//IN most cases you're going to use (innerText); let's use it.

//grab the "li" (grab in a text);
li.innerText = 'X-Men';

//3.3 Modifying Attributes & Classes
//1.The SET Attribute Method (we GRAB our "li" item)
//- SET an Attribute to OUR Specify Element - (in our case - "li").
//for this ATTR - we NEED to INCLUDE TWO values.
//1. attr you want to SET.
//2. the NAME you want to GIVE that ATTR.

//li.setAttribute('id', 'main-heading');
// a marit "X-Men"  - la fel ca si 'main-heading'...


//3.4 We can actually REMOVE this ATTR:
//let's say - we want to remove the 'ID' from our "list-item"
//li.remove('id');
//now"X-Men" - it's REVERTED back to it's default styling. (e mic);
//as the others list-items - because we added the same class (as the rest of the list-items).


//3.5 There is also a WAY we can ACCES attributes in JS
//...let's say we want to get the (attr - of our "main-heading")
//1. create a VAR for it.
//const title = document.querySelector('#main-heading');
//console.log(title.getAttribute('id')); //???!?!?!?!?? main-heading

//DEAL with CLASSES
//1.grab our "li".
//2.use the PROPERTY of "classList"
//3.this "classList" - have a FEW METHODS. 
//(but we use "add" method) - to add a class to our LIST-iTEMS
li.classList.add('list-items'); // ("X-men" is exactly the same - as the other list-items)

//we can also REMOVE this:
//li.classList.remove('list-items'); 
//(revert back to its defalt styling - bevause remove that class)

//FIND out if whether an ELEM (has that "SPECIFIC class").
console.log(li.classList.contained('list-items'));
//true - because -> li.classList.add('list-items');
//false - because -> li.classList.remove('list-items');


//REMOVE Element:
//use - remove METHOD
li.remove(); // remove "X-Men" from "list-items";

//-------------------------------------------------------------------------------------------------------------------------------
//B.Traversing the DOM
//Parent Node Traversal

//create a VAR that GRAB the "ul"; to find out the PARENT and the GRANDPARENT
let ul1 = document.querySelector('ul1');
//console.log(ul);

//WE have PROPERTIES for NODES
//WE have PROPERTIES that covers ELEMENTS NODES

c.log(previousSibling);
c.log(nextSibling);

//Nodes
//Nodes in the DOM are referred to as parents, children or siblings;
//The parent of any node is a node - that is one level above it.
//or closer to the document in the DOM hierarchy

//To find out the parent Node - we have 2 Options:

console.log(ul.parentNode);
console.log(ul.parentElement);
//we getting the "div" with the class of "container" - because  - is the "parent" of the "ul".

//If we want to find the GRAND PAERNT of the "ul".
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);
//"body" - first is the "container" then is the "body".

//The DIFERENCE between ".parentNode" and ."parentElement"
const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement); //null - because the job of the ".parentElement" is to try and RETREIVE the parent element, of the "html" element;

//the documentNodeand the elementNode - aren't the same - hence we're getting this "null".
//So - the parentNode property will try to retrieve any node - REGARDLESS that type of node.



//This is how we navigate UPWARDS of the DOM. (Parent Node)
//...how we can traverse DOWNWARDS in the DOM.

//Child Node Traversal
//Traverse Downards into "list-items";
let ul2 = document.querySelector('ul');
console.log(ul2);

//just like parentNode and parentElement - we have - childNode properties and childElement properties.

//childNodes
console.log(ul.childNodes); // the console it's giving us a "nodeList"
//we get a list of every child node - inside of the "ul".

//Here comes the DSTINCTION between "nodes" and "Elements" becomes.
//You might EXPECT this property(childNodes) - to gives us 5 list-items, (but in ADDITION to that [5 li] - we have 6 textNodes)

//SELECT first and last Child
console.log(ul.firstChild);
console.log(ul.lastChild);
//returning the "textNodes" (because first and last index - is "text" node).
//fchild and lchild - is selecting the FIRST and LAST node. 

//If we want to styling:
ul.childNodes[1].style.backgroundColor = 'blue';

//We can also have the same thing with the "children" elements.
//it's gonna select the "element nodes".

console.log(ul.children); //ul, an then grab "children";
//insetad of a nodeList - it's returning an "HTMLCollection(5)" - and 5 list-items
// like fChild and lChild - we can do the same:
console.log(ul.firstElementChild); //The Matrix
console.log(ul.lastElementChild); //Marvel


//h1 and ul are on the same LEVEL.
//if we leave a comment betwen them => THAT would be classify as a SIBBLING

let ul3 = document.querySelector('ul');
console.log(ul.previousSibling);
console.log(ul.nextSibling);
//in the console - we're gettin two text Nodes.
//find out the SIBLING Element Nodes. (instead of using previous/nextSibling)
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

//-------------------------------------------------------------------------------------------------------------------------------
//C. Event Listeners
//EvListeners allow us to ADD INTERACCTIVE Funtionality to html Elements by listening to different EVENTS.
//...such as: When a USER PRESSES a KEY, when ELEMENTS LOADS, when a USER clicks a BUTTON.

//The most COMMON EV. are:
//LOAD Events | KEY DOWN Events(?) | MOUSE Over Events | CLICK Events.

//WE gonna add an EvList. inside of our index.html (directly inside of one of these elements).
//This EVENT is a Global OnEvent - ATTRIBUTE.
//let's include an EVENT into this <button> tag
//for this example - we're going to use "ONCLICK Event".
//What i want to FIRE off - (when we click on this button) - it's an ALERT BOX (that has the CONTENT of: "I love JavaScript!").
//alert('I love JS');
//we've included the "onclick" EVENT ATTR - SO when we click on this button in the BROWSER - (event WILL fireOff and the ALERT Function will be EXECUTED - and the text "I love Js")

//That's the I'st WAY we could include an EV in our projects.


//C.2 The JS - AddEventListener
//1. Element we wanna apply this EvListener.
//2.Inside () - we've include the TYPE of EVENT "click"
//2.1 then (the second PARAMETER) - is a Funct() - we want to FireOff

//The EvLIst - SYNTAX
//element.addEventListener('click', function);

//FOR button-2 - we gonna create Another Alert-Box.
//1. create a VARIABLE - (to have a reference from...(?))
//2. the bottonTwo - has a class of "two". (so we gonna GRAB that)
//3. CREATE a CallBack Function
//4. INCLUDE our EvListener

const buttonTwo = document.querySelector('.btn-2');
function alertBtn(){
	alert('I also love JavaScript');
};

buttonTwo.addEventListener('click', alertBtn);

//WE'VE INCLUDED an EVENT on the Btn2.
//when we click on "that Browser button" this "alert('I also ...')" should be fireOff (and appear at the TOP of the SCREEN)
























