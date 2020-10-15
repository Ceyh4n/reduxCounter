//RACE DAY
let raceNumber = Math.floor(Math.random()*1000);
let regEarly = prompt ("early registration? (true/false)");
let runnersAge = Number(prompt ("Runners age?"));

if (runnersAge >= 18 && regEarly==="true") {
    raceNumber += 1000;
    console.log ("Your race is starting at 09:30 and your race number is " + raceNumber);
}

else if (runnersAge >= 18 && regEarly==="false") {
    //raceNumber = 1000 - raceNumber;
    console.log ("Your race is starting at 11:00 and your race number is " + raceNumber);
}

else {
    //raceNumber = 1000 - raceNumber;
    console.log ("Your race is starting at 12:30 and your race number is " + raceNumber);
}




