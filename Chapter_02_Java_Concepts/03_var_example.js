// var, let, const - variable declarations in JavaScript
//var- function scoped

var a = 10;
console.log("a ="+a);

 //function definition 
function printHello(){
    var a= 20;
    console.log("Inside the PrintHello function");
    console.log("a inside the function= ",a);
    if(true){
        var a= 30;
        console.log("a inside the condtion of the function= "+a);
    }
console.log("a outside the condtion of the function= "+a);
}

//function declaration
printHello();
console.log("a outside the function= "+a);


