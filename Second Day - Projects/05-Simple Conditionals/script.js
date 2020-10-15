//Student's Grade

childMark = Number(prompt("what is child's mark?"));

if (childMark >= 80 && childMark <= 100 ) {
    console.log ("A");
}

else if (childMark >= 70 && childMark <= 79 ) {
    console.log ("B");
}

else if (childMark >= 60 && childMark <= 69 ) {
    console.log ("C");
}

else if (childMark >= 50 && childMark <= 59 ) {
    console.log ("D");
}

else if (childMark >= 0 && childMark <= 49 ) {
    console.log ("F");
}

else {
    console.log ("It is not a number");
}

//Checking Seasons
nameMonth = prompt("what Month is this?");
nameMonth = nameMonth.toLowerCase();

if (nameMonth === "january" || nameMonth === "december" || nameMonth === "february") {
      alert (
        "It is Winter."
        );
}

else if (nameMonth === "september" || nameMonth === "october" || nameMonth === "november") {
  alert (
    "It is Autumn."
  );
}

else if (nameMonth === "march" || nameMonth === "april" || nameMonth === "may") {
  alert (
    "It is Spring."
  )
}

else if (nameMonth === "june" || nameMonth === "july" || nameMonth === "august") {
  alert (
    "It is Summer."
  );
}

else {
  alert (
    nameMonth +  
    "It is not a month."
  );
}

//number of days in months
nameMonth = prompt("what Month is this?");
nameMonth = nameMonth.toLowerCase();

if (nameMonth === "january" || nameMonth === "march" || nameMonth === "may" || nameMonth === "july" || nameMonth === "august" || nameMonth === "october" || nameMonth === "december") {
  alert (
    nameMonth +
    " has 31 days."
    );
}

else if (nameMonth === "april" || nameMonth === "june" || nameMonth === "september" || nameMonth === "november") {
  alert (
    nameMonth +
    " has 30 days."
    );
}

else if (nameMonth === "february") {
  alert (
    nameMonth +
    " has 28 days."
    );
}

else {
  alert (
    nameMonth +
    "It is not a month."
   );
}