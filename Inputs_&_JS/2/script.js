// Select OUR different INPUTS.
const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

//In order to CATCH these ERRORS before they get submitted - we NEED to ADD an "eventListener" to OUR "form".
//and ADD "submit" to our "eventListener".
//"inside" - in order to CANCEL out our FORMS - from Submitting -> (e). and e.preventDefault.
//e.preventDefault - this is gonna PREVENT our page from Submitting. (CANCEL out our forms from SUBMITTING)
//5. but we only wanna do this if we have Errors. for that create a variable "messeges = []" = to ALL OUR ERROR MESSAGES.
form.addEventListener('submit', (e) => {
	let messages = []
	//let's CHECK for our FIRST Error.
	if(name.value === '' || name.value == null){ //this means - the users did not PASS any name.(so we send a message)
		messages.push('Name is required')
	}
	//if the "password" is going to have different requiirments - that we want to check in the JS?
	if(password.value.length <= 6 ){
		messages.push('Passoword must be longer than 6 characters')
	}

	// > 0 - we have some form of error - which means we want to prevent the actual form from SUBMITTING - and
	//send these ERRORS to our "error". (const errorElement = )
	if(messages.length > 0){
		e.preventDefault() //prevent our PAGE from submitting
		errorElement.innerText = messages.join(', ') //"take" our "error" element we want to "set" the innerText, take our messages and "join them"(', ')
	}
})

//WE actually don't need JS -to check if the name is required- we can do this (inside of OUR Input) just put a simple "required field".