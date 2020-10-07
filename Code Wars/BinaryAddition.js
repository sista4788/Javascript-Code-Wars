// Converts the addition of two numbers to binary number.
function addBinary(a,b) {
    if(a+b >= 0) {
            return (a+b).toString(2);
        }
        else {
            return (~(a+b)).toString(2);
        }
    }