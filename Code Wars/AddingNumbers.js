// Function which splits the given number and adds it if the sum is greater than 10
function AddingNumber(number){
var result = 0;
if (number>=10){
var splitValue = number.toString().split('');
for (var i = 0 ; i< splitValue.length; i++){
  result  = result + parseInt(splitValue[i]);
 }
}
 return result >= 10 ? AddingNumber(result) : result;
}