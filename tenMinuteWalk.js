// Naive
function isValidWalk(walk) {
    let ns = 0, we = 0; 
      for (let dir of walk) { 
        if (dir == 'n') ns += 1; 
        if (dir == 's') ns -= 1; 
        if (dir == 'w') we += 1; 
        if (dir == 'e') we -= 1; 
      } 
  
      return walk.length == 10 && ns === 0 && we === 0; 
  }

// Better Solution 1 
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
  
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
  
    return dt === 10 && dx === 0 && dy === 0
  }

  // Better Solution 2 
  function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }

  // Better Solution 3
  function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;
  
    return walk.length === 10 && north === south && east === west;
  }