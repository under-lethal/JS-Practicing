//I'm gonna create a few functions, and it's Function it's gonna have it's own role.
//Example: A Function that (compare the hands); A Fuction that's gonna (update the SCORES)

//For now - I'm just gonna create a "big function" - that's basically the whole game.
//Inside we're gona create our code and our ADDITIONAL Functions. (SCOPING EVERYTHIG INSIDE of this "game Function") - so we don't have global variables.


//1. Get the SCORE: (and UPDATE the SCORE pScore++)
//
//3.Create another Function "StartGame()" - that fade out...fade other thing back.
//Put all the variable that I need - inside of this Function. All I need is (THE TWO PAGES). (I'm restraining).
//4. Create this "playBtn.addEventListener('click', )" - so everytime we "click" on "Lets' Play" we are gonna run "something".
//5. "match" - we need to FADE IN
const game = () => {
	let pScore = 0;
	let cScore = 0;

//START the GAME
	const startGame = () =>{
		const playBtn = document.querySelector('.intro button');//The "querySelector() method" - returns the first element that matches a CSS selector.
		const introScreen = document.querySelector('.intro'); //this is gonna be the "intro Screen"
		const match = document.querySelector('.match'); //...the match screen

		playBtn.addEventListener('click', () =>{
			introScreen.classList.add('fadeOut'); //'we wanna fadeOut the INTRO Screen'
			match.classList.add('fadeIn');
		});
	};

//PLAY Match
//here{} - we need THE Options. (we need the ROCK, PAPPER, SCISSOR) - the player's options.
const playMatch = () =>{	
	const options = document.querySelectorAll('.options button');  // select all the BUTTONS from the OPTIONS.
	//tHEN - we need "hands" (actual images).
	const playerHand = document.querySelector('player-hand');
	const computerHand = document.querySelector('computer-hand');

	//now - we need to also get the COMPUTER OPTIONS. (THIS IS GONNA BE randomly GENERATED).
	//We need to GENERATE a RANDOM number betewwn 0, 1, 2.
	//we gonna associate the different Numbers to a SYMBOL. (ROCK, PAPER, SCISSOR - to an Image.)
	//first - let's make an ARRAY
	const computerOptions = ['rock', 'paper', 'scissors'];

	//then - GENERATE a NUMBER - and then (based on that NUMBER index[i]) - we're gonna get the value of this.
	const computerNumber = Math.floor(Math.random() * 3); //M.random() - generate a number between 0 an 1. (and by *3 - 0,1,2)
	computerOptions[computerNumber]; //this is gonna GIVE US a RANDOM (rock, paper, scissors).

	//Computer Options
	//const computerOptions = ['rock', 'paper', 'scissors'];

	//we're getting the "(option)" - on each INDIVIDUAL Button that we choose.??!?!?!?!?!?!?
	//since, we have only "one parameter in (arrow Func) - get rid of "()"
	//on EACH BUTTON - we can add an eventListener.
	//THE REASON we USE a "Normal Function" - here is because if we use an "=>" - THE keyword "this" - it's not gonna BIND - to this (option).
	//This is gonna be "windowed now".
	//So - if we use a REGULAR Function - then "this" we will look at our "option.addEventListener..."

	//forEach() - because everytim we click  this is gonna be RANDOMLY generated and we can add this [computerNumber];
	//if we console.log(computerChoice) = it's gonna return arandom number/item from array.
	option.forEach(option =>{
		option.addEventListener('click' function(){
			//Computer Choice
			const computerNumber = Math.floor(Math.random() * 3);
			const computerChoice = computerOptions[computerNumber]; //computerNumber - cause everytime we click (this is gonna be RANDOMNLY generated).
		})
	});
}

//let's create a Function to CHECK who should get the score/who's winning...
//add {.} the VALUES of the CHOICES that we make from the play match.
const comparedHands = (playerChoice, computerChoice) =>{
	//Update Text
	const winner = document.querySelector('.winner');
	//cheching for a tie
	if(playerChoice === computerChoice){
		winner.textContent = 'It is a tie';
		return;
	}
}
//CALL all the InnerFunctions
startGame();
playMatch();
};

//starts the game
game();









	//now - we need to also get the COMPUTER OPTIONS. (THIS IS GONNA BE randomly GENERATED).
	//We need to GENERATE a RANDOM number betewwn 0, 1, 2.
	//we gonna associate the different Numbers to a SYMBOL. (ROCK, PAPER, SCISSOR - to an Image.)
	//first - let's make an ARRAY
	//const computerOptions = ['rock', 'paper', 'scissors'];

	//then - GENERATE a NUMBER - and then (based on that NUMBER index[i]) - we're gonna get the value of this.
	//const computerNumber = Math.floor(Math.random() * 3); //M.random() - generate a number between 0 an 1. (and by *3 - 0,1,2)
	//computerOptions[computerNumber]; //this is gonna GIVE US a RANDOM (rock, paper, scissors).

	//BUT BEFORE WE USE THIS we need to - ALSO GET THE Buttons.
	//We WANT this to RUN -after we click one of these (rock, paper, scissor) - buttons.

	//i'm gonna add this: "const computerNumber = Math.floor(Math.random() * 3);" - into eventListener.
	//i'm gonna LOOP THROUGH ecah. option.forEach()