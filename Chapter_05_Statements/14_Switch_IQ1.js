let value = "5"

switch(value){
    case 5: 
    console.log("Number 5 printed");
    break;

    case "5": 
    console.log("String '5' printed");
    break;
}
// output: String "5" is printed
// Switch uses (===) strict equality, so, 5 != "5" (different type)