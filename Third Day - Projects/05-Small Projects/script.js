// Day - 3 BMI Calculation

function calculateBMI(name, mass, height) {
    bmi = mass/(height*height);
    if (bmi < 18.5) {
      console.log(`${name}'s BMI is ${bmi} which is Underweight`);
    } else if (bmi < 24.9) {
      console.log(`${name}'s BMI is ${bmi} which is normal weight`);
    } else if(bmi < 29.9) {
      console.log(`${name}'s BMI is ${bmi} which is Overweight`);
    } else {
      console.log(`${name}'s BMI is ${bmi} which is Obese`);
    }
  }
  
  let name = 'Mark';
  let mass = 55;
  let height = 1.78;
  
  calculateBMI(name, mass, height);