//null -- intentionally we don't assign an value

let searchResult = null; // we use = operator to set value as null 
console.log(searchResult);

// Undefined-- no value is assigned yet i.e when we don't assihn any value the variable goes undefined
let count;  // automatically undefined-- no assignemnt operator is used
console.log(count);

///// some scenarios to check
console.log(null== 0);  //false
console.log(null== ""); //false

console.log(undefined== 0); //false
console.log(undefined== ""); //false 

//console.log(null=undefined); //SyntaxError: Invalid left-hand side in assignment
console.log(null== undefined); //true -- checks with loose Equality
console.log(null===undefined); //false -- checks with strict Equality-- for different data types

//console.log(5=5); //SyntaxError: Invalid left-hand side in assignment
console.log(5 == 5); //true -- checks with loose Equality
console.log(5 === 5);//true -- checks with strict Equality--for different data types 
                        // 5 is int in both LHS & RHS

console.log(5 == "5");//true -- checks with loose Equality
                     // 5 in LHS is EQUALS to "5"(string) in RHS
console.log(5 === "5");//False -- checks with strict Equality 
                      // 5 in LHS is NOT EQUALS to "5"(string) in RHS
//console.log(5 = 5.0);
    // SyntaxError: Invalid left-hand side in assignment
 console.log(5 == 5.0);//true -- checks with loose Equality
                       // 5 in LHS is EQUALS to 5.0(decimal) in RHS,since 5 & 5.0 belongs to same number family
  console.log(5 === 5.0);//true -- checks with strict Equality
                       // 5 in LHS is EQUALS to 5.0(decimal) in RHS,since 5 & 5.0 belongs to same number family
  



