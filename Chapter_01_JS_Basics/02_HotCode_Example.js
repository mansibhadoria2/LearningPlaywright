let a = 10;
console.log(a);  //not a Hot Code

//Hot Code
for (let i = 0; i < 15000; i++) {
    console.log(i);
}
console.log("Addition")
function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);

}
console.log("After 10000 calls: ", +result);