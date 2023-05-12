//Variable
const accordion = document.getElementsByClassName('content-container');
//content-container = houses the "Q&A"

//Go and ACCESS these classes.
// for Loop
for(var i = 0; i < accordion.length; i++){
  //BECAUSE we SELECTING the "Classes of the CONTAINER" - we want to APPLY an "eventList" - on each of these.
  accordion[i].addEventListener('click', function(){ //grab the "accordion" and then grab the var "i".
    //inside here - is refference the OBJ that is calling the function. IN our case "Accordion"
    //using "this" - we can INSERT a class of "active" (on all of these refference points) - a.k.a. our CONTAINERS.
    this.classList.toggle('active'); //to "TOGGLE" between "Add In" or "Removing" a "CLASS NAME" for an ELEMENT.
    //THE CLASS WE WANNA toggle IS "active".
  })
};

//1.WE STORE all our Elements - (with the class of "container") - inside of "accrdion" VAR.
//2. LOOP through this VAR.
//2.1 THIS allow US TO "ADDeVENTlISTENER()" to all of our "content-container" CLASSES.
//3.Inside of the Function() - we then - REFERENCE "this object"...(our accordion VAR) - then add/remove the CLASS ".active"