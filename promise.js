
// pending state
// const myPromise = new Promise((resolve, rehect)=>{
//     console.log("promise is pending");
    
// })

const checkAge= new Promise((resolve, reject)=>{
    let age = 16;
    if(age >= 18){
        resolve("Eligible for the vote")
    } else {
        reject("not eligible for the vote")
    }
})

checkAge
    .then((result)=>{
        console.log(result);
        
    })
    .catch((error)=>{
        console.log(error);
        
    })