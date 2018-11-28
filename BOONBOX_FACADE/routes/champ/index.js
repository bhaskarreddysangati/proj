require('dotenv').config();
var externalUrl=require('../externalUrl')

module.exports = function (params) {
    var app = params.app;

    // Language Selection
    app.get('/getAllLanguages', function (req, res) {
        'use strict';
        
    });  
    
    // Get Language Selection By ID
    app.get('/getLanguage/:languageCode', function (req, res) {
        'use strict';
        
    });  

    // Champ Profile API
    app.post('/userprofile', function (req, res) {
        'use strict';
        
    });
    
    // // Champ Profile API
    // app.get('/userprofile/:_id', function (req, res) {
    //     'use strict';
        
    // });

    // Champ Profile API
    app.put('/userprofile/:_id', function (req, res) {
        'use strict';
        
    });
    
    // Generate OTP
    app.get('/getVerifyOTP/:mobileno/:OTP', function (req, res) {
        'use strict';
        
    });  

    // Earnings Dashboard Screen
    app.get('/dashboard/:userid', function (req, res) {
        'use strict';
        
    }); 

    app.get("/getCategoriesById/:categoryid", function(req, res) {
        'use strict';
        
    });

    // //product 
    // app.get("/products/:productid", function(req, res) {
    //     'use strict';
        
    // });

    // Share -->

    //Add to Cart
    app.post("/addtocart", function(req, res) {
        'use strict';
        
    });    

    // View Cart
    app.get("/viewcart/:userid", function(req, res) {
        'use strict';
        
    });

    // Delete product from cart
    app.delete("/deleteproduct/:productid/:userid", function(req, res) {
        'use strict';
        
    });

    // Order Summary
    app.get("/ordersummary/:customerid/:userid", function(req, res) {
        'use strict';
        
    });

    // Get Order Id
    app.get("/getOrderId/:customerid", function(req, res) {
        'use strict';
        
    });
  
};

console.log("listening on 3000");
