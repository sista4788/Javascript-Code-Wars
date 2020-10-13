//Naive
var uniqueInOrder=function(iterable){
  let arr = [];
  for (let i = 0; i < iterable.length ; i++){
  if(iterable[i] !== iterable[i+1]){
    arr.push(iterable[i]);
  }
   }
  return arr;
}

//Better 
var uniqueInOrder=function(iterable){
    return Array.prototype.filter.call(iterable, function(current, index){ return iterable[index - 1] !== current})
  }