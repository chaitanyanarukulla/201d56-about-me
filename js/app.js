'use strict';
//Getting User name
function getToKnowMe() {/* function to ask questions when clicked on get to know me button on html */
  var userName = prompt('What is your name');
  alert('Greetings ' + userName + ' Lets play a game get to know Me');
  // Question 1
  var points = 0;
  var myCity = prompt(userName + ' do you think I am from Seattle');

  if(myCity ==='yes' || myCity === 'Yes' || myCity === 'y' || myCity === 'Y' || myCity === 'YES'){/* checking user
    answers with if else statements */
    points++;
    alert('You gussed it right! you got ' + points + ' correct out of 6');
    console.log('You gussed it right');
  }
  else if(myCity ==='no' || myCity === 'No'|| myCity === 'n' || myCity === 'N' || myCity === 'NO'){
    alert('You gussed it wrong');
    console.log('You gussed it wrong');
  }
  else{
    alert('Must answer all the questions with yes or no');
    console.log('Must answer all the questions with yes or no');
  }

  //Question 2
  var myPreJob = prompt(userName + ' do you belive I fixed Airplanes in my previous Job');

  if(myPreJob ==='yes' || myPreJob === 'Yes' || myPreJob=== 'y' || myPreJob === 'Y'){/* checking user
    answers with if else statements */
    points++;
    alert('You got it right , I was a aircraft machanic in the Navy '+ points + ' correct out of 6');
    console.log('You got it right , I was a aircraft machanic in the Navy');
  }
  else if(myPreJob ==='no' || myPreJob === 'No'|| myPreJob === 'n' || myPreJob === 'N'){
    alert('You gussed it wrong,I was a aircraft machanic in the Navy');
    console.log('You gussed it wrong,I was a aircraft machanic in the Navy');
  }
  else{
    alert('Must answer with yes or no');
    console.log('Must answer with yes or no');
  }

  //Question 3
  var mySport = prompt(userName + ' do you think i play soccer').toUpperCase();

  if(mySport==='YES' || mySport === 'Y'){/* checking user
    answers with if else statements */
    points++;
    alert('You gussed it right '+ points + ' correct out of 6');
    console.log('You gussed it right' );
  }
  else if(mySport ==='NO' || mySport === 'N'){
    alert('You gussed it wrong');
    console.log('You gussed it wrong');
  }
  else{
    alert('Must answer with yes or no');
    console.log('Must answer with yes or no');
  }

  //Question 4
  var myVetran = prompt(userName + ' do you think i am a Vetren').toLowerCase();

  if(myVetran === 'yes' || myVetran === 'y'){ /* checking user
    answers with if else statements */
    points++;
    alert('You gussed it right '+ points + ' correct out of 6');
    console.log('You gussed it right' );
  }
  else if(myVetran ==='no' || myVetran === 'n'){
    alert('You gussed it wrong');
    console.log('You gussed it wrong');
  }
  else{

    alert('Must answer with yes or no');
    console.log('Must answer with yes or no');
  }


  //Question 5
  var myFavFood = prompt(userName + ' do you belive i can speek 5 languages').toLowerCase();

  if(myFavFood === 'yes' || myFavFood === 'y'){/* checking user
    answers with if else statements */
    points++;
    alert('You gussed it right I speak and write 5 languages '+ points + ' correct out of 6');
    console.log('You gussed it right ' );
  }
  else if(myFavFood === 'no' || myFavFood === 'n'){
    alert('You gussed it wrong');
    console.log('You gussed it wrong');
  }
  else{
    console.log('You have to answer with yes and no');
    alert('You have to answer with yes and no');
  }

  //Question 7
  var stateIlived = prompt(userName + ' Can you guess a state that I have lived in besides Washington').toUpperCase();
  var states = ['VARGINIA','CALIFORNIA','NEVADA','OREGON','IDAHO','COLORADO'];
  var attempts = 0;
  for( var i = 0; i < states.length; i++){
    if (stateIlived === states[i]){
      points++;
      alert('You know me very well. you gussed it right' + points + ' correct out of 6');
    }
    else if ( attempts < 3 ){
      attempts++;
      prompt('Guess again');

    }
    else{
      alert('You had 4 trys and you failed');
      alert('You know me very well. you gussed ' + points + ' correct out of 6 get to know me questions');

    }
  }

}
//Question 6  Guessing Game
// random value generated
var randomNumber = Math.floor(Math.random() * 10 + 1);
console.log('random number',randomNumber);

// counting the number of guesses
var guess = 0;

document.getElementById('submitguess').onclick = function(){

  // number guessed by user
  var userGuessedNumber = document.getElementById('guessField').value;
  console.log('user guessednumber'+userGuessedNumber);

  while(guess < 4){
    if(randomNumber === userGuessedNumber)
    {
      prompt('CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN '+ guess + ' GUESS ');
      break;
    } else if(randomNumber < userGuessedNumber) {/* if guessed number is greater
                        than actual number*/
      console.log('this is the random number',randomNumber);
      prompt('OOPS SORRY!! TRY A SMALLER NUMBER');
      guess++;
    } else if(randomNumber > userGuessedNumber){ /* if guessed number is Smaller
        than actual number*/
      prompt('OOPS SORRY!! TRY A GREATER NUMBER');
      guess++;
    }
  }


  if(guess === 4){/* if number of tries is = 4 */
    alert('you failed to guess my number in 4 tryes');
  }

};
// function to hide and show guess number game on html

function guessTheNumber() {
  var guessGameB = document.getElementById('guessGameBlock');
  if (guessGameB.style.display === 'none') {
    guessGameB.style.display = 'block';
  } else {
    guessGameB.style.display = 'none';
  }
}

