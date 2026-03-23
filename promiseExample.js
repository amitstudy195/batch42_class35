
// prepare the biryani 

function getBiryaniItems(callback) {
    return new Promise((resolve)=>{

        setTimeout(()=> {
            console.log("Got all the items from the market go prepare biryani");
            resolve()
            
        },1000)
    })
}
function startCooking(callback) {
     return new Promise((resolve)=>{

         setTimeout(()=> {
             console.log("keep rice in cooker, steam the chicken");
             resolve()
             
         },1000)
    })
}
function waitForSometimeToCook(callback) {
     return new Promise((resolve)=>{

         setTimeout(()=> {
             console.log("Boil and wait for sometime to cook");
             resolve()
             
         },1000)
    })
}
function cookingIsDone(callback) {
     return new Promise((resolve)=>{

         setTimeout(()=> {
             console.log("cooking is Done");
             resolve()
             
         },1000)
    })
}
function serveBiryani(callback) {
     return new Promise((resolve)=>{

         setTimeout(()=> {
             console.log("Biryani is serving");
             resolve()
             
         },1000)
    })
}

getBiryaniItems()
.then(()=>startCooking())
.then(()=>waitForSometimeToCook())
.then(()=>cookingIsDone())
.then(()=>serveBiryani())
.then(()=>{
    console.log("DONE");
    
})
.catch((error)=>{
    console.log("error");
    
})

// async function makeBiryani() {
//     try {
//         await getBiryaniItems();
//         await startCooking();
//         await cookingIsDone();
//         await serveBiryani();
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// makeBiryani()