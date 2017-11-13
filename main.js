//Code Starts
for (i=0; i <= 100;i++) {
if (i%15 == 0){
//Making sure that it isn't 0
if (i != 0) {
  console.log("FizzBuzz");
}
}else if (i%3 == 0) {
  console.log("Fizz");
} else if (i%5 == 0) {
  console.log("Buzz");
} else {
  console.log(i);
}
  /* How it works
  for (i=0; i <=100; i++) <-- Declares a for loop
  i=0 <-- Delcares i
  i <= 100 <-- Is I greater than 100?
  i++ <= If not adds 1 to i
  
  if (i%15 ==0) <-- if i / 15 and the reminder is 0 then...
  console.log("FizzBuzz") <-- then print the string
  
  else if (i%3 == 0) <-- Instead if i / 3 and the reminder is 0 then...
  console.log("Fizz") <-- then print the string
  
   else if (i%5 == 0) <-- Instead if i / 5 and the reminder is 0 then...
  console.log("Buzz") <-- then print the string
  
  else { <-- Instead do this 
  In other words if all is not true then do this
  
  KTK27 
  */
  
  
