const arr = [1, 2, 3, 4, 5];

const pairArray = (array) => { //O(n^2)
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log("first method",[array[i], array[j]])
        }
    }
};

const pairArray2 = (array) => { //O(n^2) ---> Quadratic Time
   array.forEach((item1)=>{
array.forEach((item2)=>{
    console.log("second method",[item1,item2])
})
   })
};

pairArray(arr);
pairArray2(arr);

