const {performance} = require("perf_hooks")
let large=new Array(10000).fill('nemo');

function findNemo(array){ //O(n) ---> Linear Time
  const t0=performance.now();
  for (let i=0;i<array.length;i++){
    if(array[i]==='nemo'){
      console.log('Found Nemo!')
    }
  }
  const t1=performance.now();
  console.log('Call function took '+(t1-t0)+'miliseconds');
//O(n) ---> Linear Time
};

findNemo(large);