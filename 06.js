var addclosure = (()=>{
  var count = 0;
  return()=>{
    count+=1;
    console.log(count);
  }
})();
addclosure();
addclosure();
addclosure();


var add = (x) =>{
  return(y) =>{
    console.log(x+y);
  };
}

var add5 = add(5);
add5(3);
