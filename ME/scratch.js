//multidimensional array
var array = [['h','e','l','l','o'],['1','2','3','4','5'],['a','b','c','d','e']],
    x = 0,
    timesrun = 0;

function runcode() {
    timesrun += 1;
    for (var n = 0; n <= 4; n++) {
        console.log(array[x][n]);
    }
    if (timesrun == 2) {
        clearInterval(interval);
    }
}    

var interval = setInterval(function () {
    for (x = 0; x <= 2; x++) {
        runcode(array[x]);
    }
}, 1000);


    const uniqChar = new Map();
    const result = []
    for(const character of str) {
        if(uniqChar.has(character)) {}
            uniqChar.set(character, uniqChar.get(uniqChar) + 1)
     } else {
       uniqChar.set(character,1)
     }
   }
   uniqChar.forEach((val,key) => {
      if(val === 1) result.push(key)
   })
   return result;
}

