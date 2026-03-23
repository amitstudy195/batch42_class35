function register(callback) {
    return new Promise((resolve)=>{

        setTimeout(() => {
           console.log("registration done");
           resolve()
        }, 1000);
    })
}


function login(callback) {
    return new Promise((resolve)=>{
        
        setTimeout(() => {
            console.log("login done");
             resolve()
            
        }, 1000);
    })
  
}


function addToCart(callback) {
     return new Promise((resolve)=>{
        
         setTimeout(() => {
             console.log("Product added to cart");
              resolve()
         }, 1000);
    })
}


function makePayment(callback) {
    return new Promise((resolve)=>{
        
        setTimeout(() => {
         console.log("payment done");
          resolve()
        }, 1000);
    })
}


function sendMail(callback) {
    return new Promise((resolve)=>{
        
        setTimeout(() => {
            console.log("mail sent order confirmed");
             resolve()
        }, 1000);
    })
}

register()
.then(()=>login())
.then(()=>addToCart())
.then(()=>makePayment())
.then(()=>sendMail())
.then(()=>{
    console.log("DONE");
    
})
.catch((error)=>{
    console.log(error);
    
});


