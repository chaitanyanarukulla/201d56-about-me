'use strict'

var userName = prompt('What is your name')

var myCity = prompt(userName + ' do you belive i am from Seattle');

if(myCity ==='yes' || myCity === 'Yes' || myCity === 'y' || myCity === 'Y' || myCity === 'YES'){
    alert('You gussed it right');
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



var myPreJob = prompt(userName + ' do you belive I fixed Airplanes fro my previous Job');

if(myPreJob ==='yes' || myPreJob === 'Yes' || myPreJob=== 'y' || myPreJob === 'Y'){
    alert('You got it right , I was a aircraft machanic in the Navy');
    console.log('You got it right , I was a aircraft machanic in the Navy')
}
else if(myPreJob ==='no' || myPreJob === 'No'|| myPreJob === 'n' || myPreJob === 'N'){
    alert('You gussed it wrong,I was a aircraft machanic in the Navy');
    console.log('You gussed it wrong,I was a aircraft machanic in the Navy');
}
else{
    alert('Must answer with yes or no');
    console.log('Must answer with yes or no');
}



var mySport = prompt(userName + ' do you think i play soccer').toUpperCase();;

if(mySport==='YES' || mySport === 'Y'){
    alert('You gussed it right');
    console.log('You gussed it right');
}
else if(mySport ==='NO' || mySport === 'N'){
    alert('You gussed it wrong');
    console.log('You gussed it wrong');
}
else{
    alert('Must answer with yes or no')
    console.log('Must answer with yes or no')
}



var myVetran = prompt(userName + ' do you think i am a Vetren');
var myVetranLo = myVetran.toLowerCase();

if(myVetranLo === 'yes' || myVetranLo === 'y'){
    alert('You gussed it right');
    console.log('You gussed it right');
}
else if(myVetranLo ==='no' || myVetranLo === 'n'){
    alert('You gussed it wrong');
    console.log('You gussed it wrong');
}
else{
    
    alert('Must answer with yes or no');
    console.log('Must answer with yes or no');
}



var myFavFood = prompt(userName + 'do you think i like Pho');
var myFavFoodLo = myFavFood.toLowerCase();

if(myFavFoodLo === 'yes' || myFavFoodLo === 'y'){
    alert('You gussed it right I love it');
    console.log('You gussed it right I love it');
}
else if(myFavFoodLo ==='no' || myFavFoodLo === 'n'){
    alert('You gussed it wrong');
    console.log('You gussed it wrong');
}
else{
    console.log('You have to answer with yes and no');
    alert('You have to answer with yes and no');
}