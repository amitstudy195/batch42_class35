// prepare the biryani 

function getBiryaniItems(callback) {
    setTimeout(()=> {
        console.log("Got all the items from the market go prepare biryani");
        callback()
        
    },1000)
}
function startCooking(callback) {
    setTimeout(()=> {
        console.log("keep rice in cooker, steam the chicken");
        callback()
        
    },1000)
}
function waitForSometimeToCook(callback) {
    setTimeout(()=> {
        console.log("Boil and wait for sometime to cook");
        callback()
        
    },1000)
}
function cookingIsDone(callback) {
    setTimeout(()=> {
        console.log("cooking is Done");
        callback()
        
    },1000)
}
function serveBiryani(callback) {
    setTimeout(()=> {
        console.log("Biryani is serving");
        callback()
        
    },1000)
}
getBiryaniItems(function() {
    startCooking(function(){
        waitForSometimeToCook(function(){
            cookingIsDone(function(){
                serveBiryani(function(){
                    console.log("done");
                    
                })
            })
        })
    })
        
})