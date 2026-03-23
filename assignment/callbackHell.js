
function register(callback) {
    
        setTimeout(() => {
           console.log("registration done");
           callback()
        }, 1000);
}


function login(callback) {
   
        setTimeout(() => {
            console.log("login done");
            callback()
            
        }, 1000);
  
}


function addToCart(callback) {
    
        setTimeout(() => {
            console.log("Product added to cart");
            callback()
        }, 1000);
}


function makePayment(callback) {
   
        setTimeout(() => {
         console.log("payment done");
         callback()
        }, 1000);
}


function sendMail(callback) {
   
        setTimeout(() => {
            console.log("mail sent order confirmed");
            callback()
        }, 1000);
}


register(function() {
    login(function() {
        addToCart(function() {
            makePayment(function() {
                sendMail(function() {
                    console.log("done");
                });
            });
        });
    });
});