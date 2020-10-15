//Tip Calculator
// Day 3 Project-1
function calculateTips (bill = 0) {
    if (bill<50){  
      tip = bill*0.2;
      return tip;
      } else if(bill<200) {
      tip = bill*0.15;
      return tip;  
      } else if(bill>200) {
      tip = bill*0.10;
      return tip;   
      } else {
        console.log("invalid entry");
      }
  }
  
  function getTotalTips() {
    totalTips = Math.floor(calculateTips(bill1)) + Math.floor(calculateTips(bill2)) + Math.floor(calculateTips(bill3)) + Math.floor(calculateTips(bill4));
    return totalTips;
  }
  
  function budgetDust() {
    let budget = 650; 
    let totalBill = bill1 + bill2 + bill3 + bill4;
    let spent = totalBill + getTotalTips();
    let pocket = budget - spent;
    if (spent >= budget * 0.8) {
      console.log(`Total amount of bills is ${totalBill} and you paid ${getTotalTips()} tips. You spent ${spent} which is more than 80% of your budget. Remaining money is ${pocket}`);
    } else {
      console.log (`Total amount of bills is ${totalBill} and you paid ${getTotalTips()} tips. You spent ${spent} and remaining money is ${pocket}`);
    }
  }
  
  let bill1 = 124;
  let bill2 = 48;
  let bill3 = 75;
  let bill4 = 268;
  
  console.log("Tip for the first bill is " + Math.floor(calculateTips(bill1)));
  console.log("Tip for the second bill is " + Math.floor(calculateTips(bill2)));
  console.log("Tip for the third bill is " + Math.floor(calculateTips(bill3)));
  console.log("Tip for the fourth bill is " + Math.floor(calculateTips(bill4)));
  budgetDust();
  