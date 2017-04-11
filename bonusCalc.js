console.log("sourced");

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];
console.log(employees[0]);


// this function returns ratingBonus which is a percent
//   //Those who have a rating of a 2 or below should not receive a bonus.
// // Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// // Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// // Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
function checkRating(indivEmployeeArray){
  var ratingBonus;
  if (indivEmployeeArray[3] <= 2){
    ratingBonus = 0;
  }
  else if (indivEmployeeArray[3] === 3){
    ratingBonus = 4;
  }
  else if (indivEmployeeArray[3] === 4){
    ratingBonus = 6;
  }
  else if (indivEmployeeArray[3] === 5){
    ratingBonus = 10;
  }
  else {
    console.log("Error in checkRating function");
  }
  console.log("Rating Employee Bonus Percent = ", ratingBonus);
  return ratingBonus;
  // end ratingBonus/checkRating
}

//testing:
//console.log("Function Check: ", checkRating(atticus));


// // If they have an employee number with four digits, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
// // However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// // No bonus can be above 13% or below 0% total.
function employeeBonus(indivEmployeeArray){
  var bonusPercent = checkRating(indivEmployeeArray);
  var newBonusPercent = bonusPercent;
  if (indivEmployeeArray[1].length === 4){
    newBonusPercent = bonusPercent + 5;
    //console.log(newBonusPercent);
  }//

  if (indivEmployeeArray[2] > 65000){
      newBonusPercent = bonusPercent - 1;
      //console.log(newBonusPercent);
      }

  if (newBonusPercent > 13){
    newBonusPercent = 13;
  }

  if (newBonusPercent < 0){
    newBonusPercent = 0;
  }
  //newBonusPercent = Math.min(bonusPercent,13);
  //console.log(newBonusPercent);
  //newBonusPercent = Math.max(bonusPercent,0);
  console.log("New Bonus Percent", newBonusPercent);

  //console.log("Employee Bonus Percent = ", newBonusPercent);
  return newBonusPercent;
}

//testing:
//console.log("length", atticus[1].length);
//console.log("Employee Bonus Function Check: ", employeeBonus(atticus));
//console.log("Employee Bonus Function Check: ", employeeBonus(jem));
//console.log("Employee Bonus Function Check: ", employeeBonus(robert));


function buildInvidualBonus(indivEmployeeArray){
  var compensationArray = [];
  var salary = indivEmployeeArray[2];
  var bonusPercent = employeeBonus(indivEmployeeArray);

  compensationArray[0] = indivEmployeeArray[0];
  console.log(compensationArray);

  compensationArray[1] = bonusPercent;
  console.log(compensationArray);

  var bonusDollars = (bonusPercent*0.01) * salary;
  console.log("bonus dollars: ", bonusDollars);

  compensationArray[2] = salary + bonusDollars; // + ((employeeBonus(indivEmployeeArray)/100)) * indivEmployeeArray[2];
  console.log(compensationArray);
}

//buildInvidualBonus(atticus);

// function calculateAllBonus(employeesArray){
//   //This function runs the whole show
//   for (var i=0; i<employees.length; i++) {
//     //calculateIndivBonus(i);
//   }
//   //returns final bonus array
// }

//calcuateAllBonus(employees);
