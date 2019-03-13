var a = []

function forLoop(){
  
  for (var i = 0; i < 25; i++){
    if (i === 1) {
      a.push("I am 1 strange loop.")
    }
    else {a.push(`I am ${i} strange loops.`)}
  }
  return (a);
  
}

function whileLoop(){
  var b
  while ( b >= 0) {
    console.log(b);
    --b;
  }
  return 'done';
}