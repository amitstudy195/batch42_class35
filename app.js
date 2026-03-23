
// synchronous : it will happen one operation after another opeartion
// previous operation should complete then only it will come to current operation

console.log("a");
console.log("b");
console.log("c");

//for loop
for(let i=0; i<=1000; i++){
    console.log(i);
    
}
console.log("d");
console.log("e");
console.log("f");
console.log("g");


//asynchronos programming nothing but it will not block the operation
// it will come to the operation and if its taking time it will not wait and it will immediately go the next operation..

console.log("a");
console.log("b");
console.log("c");

//for loop
setTimeout(()=>{

    for(let i=0; i<=1000; i++){
        console.log(i);
        
    }
},1000)
console.log("d");
console.log("e");
console.log("f");
console.log("g");
