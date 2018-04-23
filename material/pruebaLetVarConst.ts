var varTest=function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // misma variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}


var letTest=function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // variable diferente
    console.log(x);  // 71
  }
  console.log(x);  // 31
}

var constTest=function constTest(){
  const x= 31;
  console.log(x); 
  x=51;
  console.log(x); 
}
