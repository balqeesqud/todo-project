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

 let answer=[]
  function questions(){
   let answer1= prompt ("Do you want to be  a programmer?").toLowerCase();
   if (answer1== "no") {
    answer.push(answer1);

   }else if(answer1=="yes") {
    answer.push(answer1);
   } else {
    answer.push("invalid");
   }


   let answer2=prompt ("Do you need help in creating websites?") .toLowerCase();
    if (answer2== "no") {
      answer.push(answer2);
  
     }else if(answer2=="yes") {
      answer.push(answer2);
     } else {
      answer.push("invalid");
     }
    

   let answer3=prompt ("Are you good at English?") .toLowerCase();
    if (answer3== "no") {
      answer.push(answer3);
  
     }else if(answer3=="yes") {
      answer.push(answer3);
     } else {
      answer.push("invalid");
     }
   
  }
  questions();
  loop();
  
  function loop(){
    for(let i=0; i<answer.length; i++){
      console.log(answer[i]);
    }
  }



