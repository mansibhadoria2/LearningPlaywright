
var a = "Mansi";

if(true){
 console.log(a); // o/p-- Mansi---- 'a' will take global value
 var a = 'temp';
 console.log(a); // o/p-- temp ---- 'a' will take local value , since var is function blocked
}