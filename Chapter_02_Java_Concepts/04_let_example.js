// let - it is Block scoped

let b = 10; // global scopce
console.log("b= "+b);

//function definition
function printHello(){
    let b= 20; // local scope
    console.log("b inside the function= "+b);
    if(true){
        let b = 30;
        console.log("b is inside the condition of the function= "+b);
    }
     console.log("b is outside from condition of the function= "+b);
}

//function declaration
printHello();
console.log("b outside the function= "+b);

// let c= 40;   //in let re-declaration is not allowed, but re-initialization is allowed
// console.log(40);
//  c=67;
// console.log(c);

// var abc= 33;
// let abc= 45;  // SyntaxError: Identifier 'abc' has already been declared
