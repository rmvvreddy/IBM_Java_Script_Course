let userRole ="admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;

if (isLoggedIn===true){
if (userRole==="admin") {
    accessLevel= "Full access granted";
    userMessage = "Welcome, Admin!";
}else if(userRole==="manager"){
    accessLevel = "Limited access granted";
    userMessage = "Welcome, User!";
}else {accessLevel = "No access granted";
userMessage = "Welcome, User!";
}


} else{
    userMessage = "Please log in to access the system"
}

console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);

switch (userType){
    case "admin":
        userCategory="Administrator";
        break;
    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
        userCategory="Subscriber";
        break;
    default:
        userCategory="Unknown" 
        
    
}
console.log("User Category:", userCategory);