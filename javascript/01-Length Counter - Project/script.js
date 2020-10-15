


const calculateCharacter = () =>{

//most retweeted tweet - tweeted by Obama.
let tweet = "No one is born hating another person because of the color of his skin or background or religion.";

//number of character assigned to tweetcount variable
let tweetcount = tweet.length;

//number of character allowance assigned to a variable
let tweetleft = 150 - tweetcount;

//writing the remaining character on the console
console.log(`You have written ${tweetcount} characters, you have ${tweetleft} characters remaining.`);

}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
