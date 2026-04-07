let isLoggedIn = true;
let userRole="Admin";
// app.vwo.com -> viewer, editor or admin
//viewer = limited access ->view only
//Editor = Can Read and edit
// admin= has all the rights on the website

if(isLoggedIn){
    if(userRole === "viewer")
    {
        console.log("logged in with Viewer role");
    }
    else if(userRole === "Editor")
    {
        console.log("logged in with Editor role");
    }
    else if(userRole === "Admin")
    {
        console.log("logged in with Admin role");
    }
    else{
        console.log("No valid role")
    }

}else{
   console.log("You are not logged in. Please login in.") 
}