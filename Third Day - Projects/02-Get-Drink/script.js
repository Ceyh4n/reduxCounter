// GET DRINK
// DAY 3 - PROJECT 2
function calcBottles(money, price) {
    bottles = Math.floor(money/price);
    return bottles;
  }
  
  function calcChange(money, price) {
    change = money - calcBottles(money, price)*price;
    return change;
  }
  
  function getDrink(money, price) {
    console.log("leave house");
    console.log("turn left");
    console.log("go to the market");
    console.log("buy " + calcBottles(money, price) +  " bottles of drinks");
    console.log("pay for drink");
    console.log("leave market");
    console.log("come back to the house");
    console.log("Hello master, here is your $" + calcChange(money, price) + " change.");
  }
  
  let money = 175;
  let price = 12;
  
  getDrink(money, price);