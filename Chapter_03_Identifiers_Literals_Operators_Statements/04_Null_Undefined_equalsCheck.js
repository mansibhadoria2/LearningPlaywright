console.log(0 == ""); //true
console.log(0 == "0"); //true
console.log(0 == false); // true
console.log(null == undefined); //true
console.log(`\n` == 0); true  // \n is the scpecial characters

console.log("------------");
//Rule breakers
console.log(null ==0); //false
console.log(null == true); //fasle
console.log(null == false); //false
console.log(null == ""); //false

console.log("------------");
console.log(undefined ==0); //false
console.log(undefined == true); //fasle
console.log(undefined == false); //false
console.log(undefined == ""); //false
console.log(NaN == NaN); //NaN--> not a number

console.log("------------");
console.log("" == false); //true
console.log("" === false);//false
console.log(null == undefined); //true
console.log(null === undefined); //false

console.log("------------");
console.log(0 == false);//true
console.log(0 === false); //false
console.log("0" == false); //true
console.log("" == "0"); //false
