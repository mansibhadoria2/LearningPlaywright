//Decrement Operator

// a= a-1;
// -- -> decrease the value by 1

//Pre-Decrement Operator
//decrement the value first then assign the value.
let a1 = 10;
let b1 = --a1;
console.log(b1); //o/p->9

//Post-Decrement Operator
//Assign the value first then decrease the value
let a2 = 10;
let b2 = a2--;
console.log(b2); //o/p->10
console.log(a2);//o/p->9

let c=10;
console.log(c-- + c);
//A=c-- -->c--=10, (value is assigned first as 10,then post decrement happens)
//B=c  --->c = 9  (after post decrement, value of C=9)
//A+B= 10+9= 19 

let d=11;
console.log(d + --d +d-- +d + d-- + --d);

//A=d   --->11(initial value of d=11, d=11)
//B=--d ->10 (pre-decrement of value of d, so d=10, now d=10)
//C=d-- ->10 (post-decrement of value of d=10,now d=9)
//D=d --->9 (after post-decrement of value of d,so d=9,d remains=9)
//E=d-- ->9 (post-decrement of value of d,so d=9,now d=8)
//F=--d --->7 (pre-decrement of value of d=8, so d=7)
//A+B+C+D+E+F=11+10+10+9+9+7=56