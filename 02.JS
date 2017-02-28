function greet(){
  console.log("hello");
}
greet();

function logGreeting(fn){
  fn();
}
logGreeting(greet);

var greetme = function(){
  console.log("Hello Jun!");
}
greetme();

logGreeting(greetme);
