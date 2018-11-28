module.exports = function(params) {
    var app = params.app;

    //get all catalogue
    app.get("/catalogues", function(req, res) {
        'use strict';
    });
       
       
       
    //create catalogue
    app.post("/createCatalogue",function(req,res){
        'use strict';
        
    });

    // get catalogue based on id
    app.get("/getCatalogue/:catalogueId", function (req, res) {
        'use strict';
        
    });
    
    //update catalogue based on id
    app.put("/updateCatalogueById/:catalogueId", function (req, res) {
        'use strict';
      
    });

    //delete catalogue based on id
    app.put("/deleteCatalogueById/:catalogueId", function (req, res) {
        'use strict';
    });

    //product
    app.get("/products", function(req, res) {
        'use strict';
        
    });  

    //product
    app.get("/products/:categoryid", function(req, res) {
        'use strict';
        
    });

    //product
    app.get("/productDetail/:productid", function(req, res) {
        'use strict';
        
    });
  

    //product
    app.get("/insertproductrequest", function(req, res) {
        'use strict';
        
    });
    app.get("/getProductRequest", function(req, res) {
        'use strict';
        
    });
    app.get("/getProductRequestById", function(req, res) {
        'use strict';
       
    });
    app.get("/nprCategorywiseCount", function(req, res) {
        'use strict';
        
    });
    app.get("/nprStatuswiseCount", function(req, res) {
        'use strict';
    });
    app.get("/nprDatewiseCount", function(req, res) {
        'use strict';
        
    });

    //category
    app.get("/getCategoriesFromMagento", function(req, res) {
        'use strict';
        
    });
    app.get("/getCategories", function(req, res) {
        'use strict';
        
    });
    app.get("/getCategoriesById/:categoryid", function(req, res) {
        'use strict';
        
    });

       //stores
       app.post("/insertStores", function(req, res) {
        'use strict';
       
    });
    app.get("/getStores",function(req,res){
        'use strict';
        
    });
    app.get("/getStoresById/:Id", function (req, res) {
        'use strict';
       
    });
    app.put("/updateStoresById/:Id", function (req, res) {
        'use strict';
        
    });
    app.put("/deleteStoresById/:Id", function (req, res) {
        'use strict';
        
    }); 

  };
