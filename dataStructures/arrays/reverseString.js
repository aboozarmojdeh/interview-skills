const reverseStr1=(str)=>{
   return str.split('').reverse().join(''); // O(n)
}

const reverseStr2=str=> str.split('').reverse().join(''); // O(n)

const reverseStr3=str=> [...str].reverse().join(''); // O(n)

const reverseStr4=(str)=>{
    // check input
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
let backward=[];
let itemNumber=str.length-1;
for(let i=itemNumber;i>=0;i--){ // O(n)
    backward.push(str[i])
};
return backward.join('')
} ;



// let backward=reverseStr1("Aboozar Mojdeh");
// let backward=reverseStr2("Aboozar Mojdeh");
// let backward=reverseStr3("Aboozar Mojdeh");
let backward=reverseStr4("Aboozar Mojdeh");
console.log(backward);

