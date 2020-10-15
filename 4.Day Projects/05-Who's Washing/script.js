//Day 4 who is washing dishes.

let names = ['Jenny', 'Michael', 'Chloe', 'Timmy'];

function whoIsWashing() {
  let number = Math.floor(Math.random()*names.length);
  console.log(names[number] + " washing dishes.");
}

whoIsWashing();