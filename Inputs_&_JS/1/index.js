//document- is REFFERING to our DOM. (Document Object Model).
//Basically - when a WEB PAGE is LOADED - browser create a DOM - WHICH IS A representation of a HTML Document.
//by TYPING "document" - we're making a REFERENCE to our HTML Document.
document.getElementById('myButton').onclick = () => {
	var myName = document.getElementById('myText').value;
	document.getElementById('int').innerHTML = 'Hello' + ' ' +myName;
};

//"button" - HAVE the property of "onclick". (when we click it - it's going to DO SOMETHING.)
//...we need to ACCESS the "value". (.value)

//Whatever we type into our textField(input) - HWEN we CLICK on put button, we're going to get the VALUE 
//(from our) text FIELD - and ASSIGN it to this variable of "myName".