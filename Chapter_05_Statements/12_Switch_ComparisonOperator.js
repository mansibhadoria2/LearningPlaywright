let TestScore= 98;

switch(true){
    case(TestScore>=90):
    console.log("Outstanding - Top Performer");
    break;
    case(TestScore>=85):
    console.log("Excellent - Above Expectation");
    break;
    case(TestScore>=75):
    console.log("Very Good - Passed Expectation");
    break;
    case(TestScore>=65):
    console.log("Good - Can improve more");
    break;
    case(TestScore>=50):
    console.log("Average Performance");
    break;
    default:
    console.log("Unsatisfactory result");
    break;
}
