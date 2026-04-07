// For Loop -> Repeated block of code.

//Increment Operator

// a= a+1;
// ++ -> increase the value by 1

//Pre-Increment Operator
//Increment the value first then assign the value.
let a1 = 10;
let b1 = ++a1;
console.log(b1); //o/p->11

//Post-Increment Operator
//Assign the value first then increase the value
let a2 = 10;
let b2 = a2++;
console.log(b2); //o/p->10
console.log(a2); //o/p ->11

let c=10;
console.log(c++ + c);
//A+B-->(c++ + c)----> A=c++ ----> B=c
//A=c++ ....c++=10, after this c=11
//B=c .... c=11
// therefore, A+B=10+11=21

let d=11;
console.log(d + ++d +d++ +d);
//A=d   --->11(initial value of d=11)
//B=++d --->12 (pre-increment of value of d=12)
//C=d++ --->12 (post-increment of value of d=12)
//D=d ----->13 (After post increment,value of d= 13)
//A+B+C+D=11+12+12+13 = 48

