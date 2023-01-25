//SAVE a REFFERENCE - for each <form> Element.
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//ADD an ."eventListener()" - on the <form>, on the "submit" Event.
//CALL - ".prevenDefault()" METHOD( on the EVENT) - to PREVENT the <form> from SUBMITTING. 'cause we want TO VALIDATE our <INPUTS>.
form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs(); //This Func. -will TRIGGER - every <form> Submit.
});

//(if - Function)
//Write a Func() (which RECEIVE an HTML "element" and an "error" Message - as a parameter).
const setError = (element, message) => {
    const inputControl = element.parentElement; //BASED on that "element" provided - we'll GET its PARENT (which is the <input> control).
    const errorDisplay = inputControl.querrySelector('.error');//SAVE a Referrence (for the "error display") - which is INSIDE the <input> control - AS A <div>.
    
    errorDisplay.innerText = message; //SET the "innerText" (of our "Error Display") - to be the MESSAGE - that we PROVIDED in the "parameter".
    inputControl.classList.add('error');//ADD "the Error Class" - to our "inputControl".
    inputControl.classList.remove('success');//REMOVE "Success Class" - if it's PRESENT. | THIS will ADD the RED Border - to our <input> field.
};

//"setSuccess Function()"
const setSuccess = element => {
    const inputControl = element.parentElement; //will GEt it's PARENT Element.
    const errorDisplay = inputControl.querrySelector('.error');//("error display")

    errorDisplay.innerText = '';//we're CLEAR the "text ('')" - (in the "ERROR display") - with an EMPTY String ('').
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//This Func() - will return i- if the user Provided a VALID Email address - and if IS or NOT - in the right/VALID format. -> (Regex).
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//What ths Function Does? | It gets the VALUE of all <input> Fields - and REMOVE (all the "WHITE SPACES") - that the STRING have.
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //ADD Every validation CONDITION - for EACH Value.
    if(usernameValue === ''){
    //CALL "setError" Func(). - with the "username" ELEM. & our "Error Message".
    //If the "username" is GIVEN - then we CALL the "setSuccess" Func().
    setError(username, 'Username is required');
    } else {
    //CALL "setSucces Func()" - with the "username".
    setSuccess(username);
    }

    //DO these CHECKS - for EVERY <input> Elem.
    if(emailValue === ''){
        setError(email, 'Email is required'); //If the "email VALUE" - is EMPTY - set an "error" (setError).
    } else if (!isValidEmail(emailValue)){ //Call Func() "isValidEmail" - to CHECK if the USER provded Email - in a VALID format - if it's not(!) - SET an Error.
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    //CHECK the Password Value:
    if(passwordValue === '') { //CHECK if there is ANY VALUE. (into the Input Field).
        setError(password, 'Password is required'); //if there is NOT - Set an "Error Message".
    } else if (passwordValue.length < 8) { //if there is a VALUE - we will CHECK it's LENGTH. | If it's LESS than "8" -> set an "error Message"
        setError(password, 'Password must be at least 8 characters.');
    } else {
        setSuccess(password);
    }

    //Password CONFIRMATION CHECK:
    if(password2Value === '') {
        setError(password2, 'Please confirm your password'); //CHECk if it HAs a Value.
    } else if (passwordValue2 !== passwordValue) { //CHECK if HAS the SAME VALUE - as the "Password field above".
        setError(password2,"Password doesn't match");
    } else {
        setSuccess(password2);
    }
};



