

function greet(greetings = 'Selam') {
    return greetings;
}

let greetings = prompt('Enter your greetings');
console.log (greet(greetings));

////////////////////////////////////////////////////////////


function canIDrive (age) {
    if (age<18) {
        console.log("Can't drive");
    }else {
        console.log("Can drive");
    }
    return; 
}

age = prompt ("Enter the age: ");
canIDrive(age);