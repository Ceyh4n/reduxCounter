//AGE CALCULATION
let johnAge = 10;
let johnJob = "Teacher";

if (johnAge >= 18) {
    console.log ("John is allowed to buy Beer");
}

else {
    console.log ("John is not allowed to buy Beer, rather buy Juice.");
}

//ternary operator to check John's age
johnAge >= 18 ? console.log ("John is allowed to buy Beer") : console.log ("John is not allowed to buy Beer, rather buy Juice.");

switch (true) {
    case johnAge < 13:
      console.log("John is a boy and wants to be a " + johnJob);
      break;
    case johnAge >= 13 && johnAge < 20:
        console.log("John is a teenager and wants to be a " + johnJob);
      break;
    case johnAge >= 20 && johnAge < 30:
        console.log("John is a young man and a " + johnJob);
      break;
    default:
        console.log("John is a man and a " + johnJob);
      break;
  }