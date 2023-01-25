//Checking if an E-mail or a phone is VALID (regex - stackoverflow)

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

//String()... check the STRING to make sure it MATCHES a particular format.

// We have these TWO Functions - that we're going to USE for (phone numbers) and (emails).
// Now, let's GRAB some of the DOM Elements OUT of the PAGE - to actually USE them.

//1.I wanna grab the actual FORM element itself:
//that will give us a FORM that going to ALLOW us to ADD an EVENT LISTENER
//When someone tries to SUBMIT the FORM ...we can do something.
const form = document.querySelector('form');
const thankYou = document.querySelector('.thank-you');
const nameInput = document.querySelector('input[name="full-name"]'); 
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea[name="message"]');

const inputs = [nameInput, emailInput, phoneInput, messageInput];

//The querySelector() method returns the first element that matches a CSS selector.
//To return all matches (not only the first), use the querySelectorAll() instead.

// We use document.querrySelector() - and I wanna GARB the "input Box" - that has a particular name attached to it. (name="full-name")
// So - grabbing (the "input Element") - that has the "name of full-name"

//3.Now we want to VERIFY - that THE input FIELD - has some type of VALUE TYPED into it.
//3.1 We can check (in THIS CALLBACK/EVENT Listener) basically CHECK (if the NAME INPUT.value HAS a VALUE => WE'RE GOOD) otherwise (we need to DISPLAY those (red) ERRORS)


let isFormValid = false; //...SHOW THAT "Success Message".
//let isValidationOn = false; //


const resetElm = (elm) => {
  elm.classList.remove('invalid');
  elm.nextElementSibling.classList.add('hidden');  
}

const invalidateElm = (elm) => {
  elm.classList.add('invalid'); //show that red border around the input box/field.
  elm.nextElementSibling.classList.remove('hidden');  //"that/the Function (red message)"
}

const validateInputs = () => {
  //if(!isValidationOn) return;
  
  isFormValid = true;
  //resetElm(nameInput);
  //resetElm(emailInput);
  //resetElm(phoneInput);
  //resetElm(messageInput);
  inputs.forEach(resetElm);
  

  if(!nameInput.value) {
    isFormValid = false;
    invalidateElm(nameInput);
  } 

  if(!isValidEmail(emailInput.value)) {
    isFormValid = false;
    invalidateElm(emailInput);
  }

  if(!isValidPhone(phoneInput.value)) {
    isFormValid = false;
    invalidateElm(phoneInput);
  }

  if(!(messageInput.value)) {
    isFormValid = false;
    invalidateElm(messageInput);
  }
};



//if(!nameInput.value) - IS not DEFINED (then we have some type of ERRORS).
//nameInput.nextElementSibling - we can GRAB that ERROR HINT (that we HAVE HIDDEN).
//So, if will be that ERROR "we can say" .classList.remove('hidden').

//nameInput.classList.add('invalid'); - to show up that red line around the inputField.

//.classList - RETURNS the CSS class - of an ELEMENT.3

//nextElementSibling - The nextElementSibling property returns the next element in the same tree level.
//The nextElementSibling property is read-only.

//if we type "asdf" or "gfgf" - is still red. For that we need to ADD an eventListener - to the (inputbox).

//form.addEventListener('submit', (e) => {... (on the form ELEM - WE add an EvLIstener.) (I will say: "Listen to the "Submit Event")
//and when someone triers to submit the button (clicking or pressing Enter) - we can "e.preventDefault"; (so' the page doesn't REFRESH).
//3.WE WANT TO VERIFY THAT THE INPUT field - has some type of value in it.
//We check if: nameInput.value - HAS A VALUE | then we're good  - otherwise we need to (display these errors (red text)). |^ |^ |^

form.addEventListener('submit', (e) => {
  e.preventDefault(); // the PAGE doesn't REFRESH
  //isValidationOn = true; //???
  validateInputs();   // CALL the/that Function (red error message)
  if(isFormValid){    // if isFormValid - ...show it when - we remove the "form" - and show that "Succes  Message";
    form.remove();
    thankYou.classList.remove('hidden'); // if isFormValid - ...show it when - we remove the "form" - and show that "Succes  Message";
  }
}); 

//IF the inputFiled - is empty => see that (red) error.

//...('submit') <- LISTENT to the SUBMIT Event!
//And when someone TRIES to Submit the FORM (by either Clicking this button/or pressing "Enter") - so the PAGE doesn't REFRESH

// e.preventDefault(); - The preventDefault() method CANCELS the EVENT if it is cancelable, meaning that the default action that belongs to the event WILL NOT OCCUR.
//For example, this can be useful when:
//Clicking on a "Submit" button, prevent it from submitting a form
//Clicking on a link, prevent the link from following the URL

//if we type "asdf" or "gfgf" - is still red. For that we need to ADD an eventListener - to the (inputbox).
//if something is typed into it - (i can do the input event); and  CALL the (validateInputs()) - again.

//nameInput.addEventListener('input', () => {
  //validateInputs();
//});
//emailInput.addEventListener('input', () =>{
  //validateInputs();
//});


inputs.forEach((input) => {
  input.addEventListener('input', () => {
  validateInputs();
  });
});

//Now that we ADD that - (eventListener) - to that (inputBox) - when i type something "wrong" - it's still not working.
//so - we can use an "else" in that "if" statement - or ADD THEM BACK every time (WE DO A VALIDATION).    
//nameInput.classList.remove('invalid') and nameInput.nextElementSibling.classList.add('hidden'); 
//Everytime you REVALIDATE your form -  JUST ADD or REMOVE those CLASSES.

//Now - IF WE CLICK "Submit" Button - (we could do an Ajax request) - to a backend - AND SEND SOME DATA - and show like a "success message".
//(inside of "validateInputs" - let-s track if there's an issue or not) - USING A Boolean. (declared above "validateInputs").

//if(isFormValid){form.remove();}... - If you type something (in that inputField) - and press Submit - you'll NOTICE that it cleared the "Form" - WHICH ALLOW US TO DISPLAY - the "Thank You Message".
//for the "Thank You Message" - add a "div" under the "form" <div class = "thank you">.
//style ".thank-you class" - in CSS
//grab that DOM Element  - const thankyou = document.querrySelector('.thank-you')












