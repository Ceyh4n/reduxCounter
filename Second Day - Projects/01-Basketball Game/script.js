let tJohnAvg = (89+120+103)/3; //get the average of John's team
let tMikeAvg = (116+94+123)/3; //get the average of Mike's team
let tMaryAvg = (97+134+105)/3; //get the average of Mike's team

if (tJohnAvg > tMikeAvg && tJohnAvg > tMaryAvg) { //if john's average bigger than Mike's team.
    console.log (`John's team is the winner with ${tJohnAvg} points`);
}

else if (tJohnAvg < tMikeAvg && tMikeAvg > tMaryAvg) { //if john's average bigger than John's team.
    console.log (`Mike's team is the winner with ${tMikeAvg} points`);
}

else if (tMaryAvg > tJohnAvg && tMaryAvg > tMikeAvg) {
    console.log (`Mary's team is the winner with ${tMaryAvg} points`);
}

else { //if all teams have same average points.
    console.log (`It is a draw all teams have same average with ${tMikeAvg} points`);
}

//her fonksiyonun kendi () parantezi vardir.
