//null -- intentionally we don't assign an value

let searchResult = null; // we use = operator to set value as null 
console.log(searchResult);

// Undefined-- no value is assigned yet i.e when we don't assihn any value the variable goes undefined
let count;  // automatically undefined-- no assignemnt operator is used
console.log(count);

///// some scenarios to check

//console.log(null=undefined); //SyntaxError: Invalid left-hand side in assignment
console.log(null== undefined); //true
console.log(null===undefined); //false -- strict-- for different types

console.log(null== 0);  //false
console.log(null== ""); //false

console.log(undefined== 0); //false
console.log(undefined== ""); //false 