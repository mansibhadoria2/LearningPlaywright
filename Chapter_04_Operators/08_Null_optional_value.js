let user_name= "mansi" ?? "default_User";
/// ?? returns the RHS value if the LHS is null/Undefined
// else LHS value gets printed
console.log(user_name); //o/p: mansi

let user_name1= null ?? "default_User";

user_name1 = "the user is --> "+user_name1;
console.log(user_name1);
// this concept is very useful for Test Data Handling