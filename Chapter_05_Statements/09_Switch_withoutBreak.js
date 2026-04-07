//Switch statement uses the strict Equality(===)
// from case 4--> No break statement is used, So it will execute all the rest of the cases. 

let day = 4;
switch (day) {
  case 1:
    console.log("Monday - Sprint Planning");
    break;
  case 2:
    console.log("Tuesday - Development");
    break;
  case 3:
    console.log("Wednesday - Code Review");
    break;
  case 4:
    console.log("Thursday - Testing");
    
  case 5:
    console.log("Friday - Deployment & Retrospective");
   
  case 6:
    console.log("Saturday - Weekly Off");
    
  case 7:
    console.log("Sunday - Weekly Off");
    
  default:
    console.log("Invalid Input");
    
}