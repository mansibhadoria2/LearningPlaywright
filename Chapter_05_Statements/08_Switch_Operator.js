//Switch statement uses the strict Equality(===)

let day = 2;
switch (day) {
  case 1:
    console.log("Monday - Sprint Planning");
    break;
  case 2:
    console.log("Tuesday - Development");
    let a=10;
    let b=20;
    console.log("Sum of a & b ="+(a+b));
    break;
  case 3:
    console.log("Wednesday - Code Review");
    break;
  case 4:
    console.log("Thursday - Testing");
    break;
  case 5:
    console.log("Friday - Deployment & Retrospective");
    break;
  case 6:
    console.log("Saturday - Weekly Off");
    break;
  case 7:
    console.log("Sunday - Weekly Off");
    break;
  default:
    console.log("Invalid Input");
    break;
}