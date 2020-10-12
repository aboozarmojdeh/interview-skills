let user={
    age:39,
    name:"aboozar",
    scream:function(){
        console.log('hooohuu')
    }
};

user.age //O(1)
user.spell='abra badrbra'; //O(1)
user.scream(); //O(1)
console.log(user)