// Addes all the divisors into an array and returns the array
function divisors(integer) {
  var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
      divs.push(i);
    }
  }
  
  return divs.length > 1 ? divs : integer + ' is prime';
};