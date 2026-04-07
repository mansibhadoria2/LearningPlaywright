//Do While loop- similar to "While" loop
//Do While loop-->it will "run at least once",condition check happens after each run.
//Initialization--> done outside
//Condition--> it is at the last
//Updation-->once condition is true, it will update the value

let retry=1;
do{
    console.log("Execute the code");
    console.log("Retrying...! ",retry);
    retry++;
}while(retry<=3)