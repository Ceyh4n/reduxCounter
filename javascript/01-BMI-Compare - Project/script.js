//mass of Mark
let massMark = 75;

//mass of John
let massJohn = 79;

//height of Mark
let heightMark = 179;

//height of Mark
let heightJohn = 165;

//BMI index of Mark
BMIHMark = massMark / heightMark*heightMark;

//BMI index of John
BMIHJohn = massJohn / heightJohn*heightJohn;

let higherBMI = BMIHMark > BMIHJohn;

alert (
    "Is Mark's BMI is higher than John's? Answer is " +
    higherBMI +
    ". Because Mark's BMI is " +
    BMIHMark +
    "and John's BMI is " +
    BMIHJohn
);