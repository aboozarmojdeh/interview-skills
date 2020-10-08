const {performance} = require("perf_hooks")
let large=new Array(1000).fill('nemo');
const everyone=['dory','bruce','nemo','marlin','nigel','squirt']

function findNemo1(array){ //O(n) ---> Linear Time
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

findNemo1(everyone);

const findNemo2=(array)=>{//O(n) ---> Linear Time
array.forEach(fish=>{
  if(fish==='nemo'){
    console.log('Found Nemo!')
  }
})
};

findNemo2(everyone)

const findNemo3=(array)=>{//O(n) ---> Linear Time
for(fish of array){
  if(fish==='nemo'){
    console.log('Found Nemo!')
  }
}
}


findNemo3(everyone)