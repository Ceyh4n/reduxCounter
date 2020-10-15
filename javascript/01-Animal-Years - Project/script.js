//assign your name into a variable
let myAge = 44;

//first two years of the dog
let earlyYears = 2;

//calculating dog's years
earlyYears *= 10.5;

//calculating later years
let laterYears = myAge - 2;

//Number of dog years
laterYears *= 4;

//getting the age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//assign the name
myName = "Subutay";

alert (
    "hello " +
    myName.toLowerCase() +
    ". I am " +
    myAge +
    " years old in human years which is " +
    myAgeInDogYears +
    "years old in dog years."
);

console.log (`Hello ${myName}, I am ${myAge} years old in human years which is  ${myAgeInDogYears} years old in dog years.`);
