
let a= 10; // gloabl value
console.log(a); // 10

if(true){
  //  console.log(a);  //TDZ - Cannot access 'a' before initialization
    let a= 20;  
    console.log(a); // 20-- block scoped
}