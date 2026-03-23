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


async function makeOrder() {
    try {
        await register();
        await login();
        await addToCart();
        await makePayment();
        await sendMail();
    } catch (error) {
        console.log(error);
        
    }
    
}

makeOrder()