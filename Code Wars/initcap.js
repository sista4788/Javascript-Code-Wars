// Naive
String.prototype.initCap = function () {
    let splitValue = this.split(" ");
  
        for(let i = 0; i < splitValue.length; i++){
        splitValue[i] = splitValue[i][0].toUpperCase() + splitValue[i].substr(1);
        }
        
       return splitValue.join(" "); 
  };

  // Better 
  String.prototype.initCap = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

  //More better 
  String.prototype.initCap = function () {
    return this.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (word) {
       return word.toUpperCase();
    });
 };