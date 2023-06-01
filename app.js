let Name= prompt("Please Enter Your Name");
console.log(Name);

let Gender=prompt ("Enter your gender").toLowerCase();
if(Gender=="female"){
console.log(Gender)
}else if (Gender=="male"){
  console.log("male");
}else { 
 console.log(Gender);
}

let Age=prompt("Enter your Age");
if (Age<=0) {
  alert ("please re-enter your age"); 
  prompt("Enter your Age");
}else{
  console.log(Age);
}

let conf=confirm( "Welcome to To Do Website" );

  switch(Gender) { 

  case "female": alert(("Welcome Ms "+ Name)); 
  break; 

  case "male" :alert ("Welcome Mr "+ Name);
  break;

  default: alert ("Welcome "+ Name);
  }

