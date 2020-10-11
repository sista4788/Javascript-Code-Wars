// adding the 2 numbers next to the current number in the given sequence
// till n numnber of values
function tribonacci(arr, n){
    let result = 0;
    for (let i = 0 ; i < n - 3 ; i++){
      result = arr[i] + arr[i+1] + arr[i+2];
       arr.push(result);
    }
    return n < 3 ? arr.slice(0,n) : arr;
  };