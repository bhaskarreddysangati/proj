module.exports = function(params) {
    var app = params.app;
    app.get("/orders", function(req, res) {
        'use strict';
        var list =["_id","orderSchemes","orderId","createdDate","lastModifiedDate","modifiedFlag","creator","orderType","status","value","tat","branch",
        "customer","items","paymentType","paymentRef","lmp","createdAt","updatedAt"];
       var clientExpectedJSON = {
        "_id" : "5bd6d6dc4688f044bc4a1224",
       "orderSchemes" : [ 
           "5bbc1388f7e0650cd08a8f62"
       ],
       "orderId" : "ORD10001",
       "createdDate" : "2018-10-05T06:32:52.235Z",
       "lastModifiedDate" : "2018-10-07T06:32:52.235Z",
       "modifiedFlag" : true,
       "creator" : "5bdc13b151344842f0eb8231",
       "orderType" : "Affiliate",
       "status" : "confirmed",
       "value" : 29990.95,
       "tat" : "2018-10-15T06:32:52.235Z",
       "branch" : "5bcf0a2bf06c331c29140d4b",
       "customer" : "5bd1b9c60968b207f0a1d83c",
       "items" : [ 
           {
               "itemSchemes" : [],
               "_id" : "5bd319f88387b30b305f68f4",
               "item" :"5bb6d3aef7e0650cd089fdbc",
               "quantity" : 10
           }
       ],
       "paymentType" : "loan",
       "paymentRef" : [ 
           {
               "_id" : "5bd319f88387b30b305f68f6"
           }, 
           {    
               "_id" : "5bd319f88387b30b305f68f5"
           }
       ],
       "lmp" : "5bbb67caf7e0650cd08a8670",
       "createdAt" : "2018-10-29T09:46:04.225Z",
       "updatedAt" : "2018-10-29T09:46:04.225Z",
       "__v" : 0
   }
   
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });  
  
       
        
    app.post("/createOrder",function(req,res){
        'use strict';
        var list =["_id","orderSchemes","orderId","createdDate","lastModifiedDate","modifiedFlag","creator","orderType","status","value","tat","branch",
        "customer","items","paymentType","paymentRef","lmp","createdAt","updatedAt"];
       var clientExpectedJSON = {
        "_id" : "5bd6d6dc4688f044bc4a1224",
       "orderSchemes" : [ 
           "5bbc1388f7e0650cd08a8f62"
       ],
       "orderId" : "ORD10001",
       "createdDate" : "2018-10-05T06:32:52.235Z",
       "lastModifiedDate" : "2018-10-07T06:32:52.235Z",
       "modifiedFlag" : true,
       "creator" : "5bdc13b151344842f0eb8231",
       "orderType" : "Affiliate",
       "status" : "confirmed",
       "value" : 29990.95,
       "tat" : "2018-10-15T06:32:52.235Z",
       "branch" : "5bcf0a2bf06c331c29140d4b",
       "customer" : "5bd1b9c60968b207f0a1d83c",
       "items" : [ 
           {
               "itemSchemes" : [],
               "_id" : "5bd319f88387b30b305f68f4",
               "item" :"5bb6d3aef7e0650cd089fdbc",
               "quantity" : 10
           }
       ],
       "paymentType" : "loan",
       "paymentRef" : [ 
           {
               "_id" : "5bd319f88387b30b305f68f6"
           }, 
           {
               "_id" : "5bd319f88387b30b305f68f5"
           }
       ],
       "lmp" : "5bbb67caf7e0650cd08a8670",
       "createdAt" : "2018-10-29T09:46:04.225Z",
       "updatedAt" : "2018-10-29T09:46:04.225Z",
       "__v" : 0
   }
   
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
        });
    });  
  
        
    app.get("/getOrder/:orderId", function (req, res) {
        'use strict';
        var list =["orderId","orderSchemes","orderId","createdDate","lastModifiedDate","modifiedFlag","creator","orderType","status","value","tat","branch",
        "customer","items","paymentType","paymentRef","lmp","createdAt","updatedAt"];
       var clientExpectedJSON = {
        "orderId" : "5bd6d6dc4688f044bc4a1224",
       "orderSchemes" : [ 
           "5bbc1388f7e0650cd08a8f62"
       ],
       "orderId" : "ORD10001",
       "createdDate" : "2018-10-05T06:32:52.235Z",
       "lastModifiedDate" : "2018-10-07T06:32:52.235Z",
       "modifiedFlag" : true,
       "creator" : "5bdc13b151344842f0eb8231",
       "orderType" : "Affiliate",
       "status" : "confirmed",
       "value" : 29990.95,
       "tat" : "2018-10-15T06:32:52.235Z",
       "branch" : "5bcf0a2bf06c331c29140d4b",
       "customer" : "5bd1b9c60968b207f0a1d83c",
       "items" : [ 
           {
               "itemSchemes" : [],
               "_id" : "5bd319f88387b30b305f68f4",
               "item" :"5bb6d3aef7e0650cd089fdbc",
               "quantity" : 10
           }
       ],
       "paymentType" : "loan",
       "paymentRef" : [ 
           {
               "_id" : "5bd319f88387b30b305f68f6"
           }, 
           {
               "_id" : "5bd319f88387b30b305f68f5"
           }
       ],
       "lmp" : "5bbb67caf7e0650cd08a8670",
       "createdAt" : "2018-10-29T09:46:04.225Z",
       "updatedAt" : "2018-10-29T09:46:04.225Z",
       "__v" : 0
   }
   
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
        });
    });  
    
    app.get("/pendingOrders", function (req, res) {
        'use strict';
        var list =["_id","userid","name","orderId","orderplaced","items","suborders"];
       var clientExpectedJSON = {
        
            "_id" : "5bdafd571e197421f738e654",
            "userid" : "xxxx",
            "name" : "karthik",
            "orderId" : "62250111",
            "orderplaced" : "16/11/2018",
            "items" : "3",
            "suborders" : [ 
              {
                  "productname" : "Redmi4A",
                  "SKUId" : "1243813498123",
                  "ordereddate" : "19/11/18",
                  "retiurnpolicyends" : "28/11/18"
              }, 
              {
                "productname" : "Redmi4A",
                "SKUId" : "1243813498123",
                "ordereddate" : "19/11/18",
                "retiurnpolicyends" : "28/11/18"
              }, 
              {
                "productname" : "Redmi4A",
                "SKUId" : "1243813498123",
                "ordereddate" : "19/11/18",
                "retiurnpolicyends" : "28/11/18"
              }, 
          ]
          }
          app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    }); 

  
    app.get("/deliveredOrders", function (req, res) {
        'use strict';
        var list =["_id","userid","name","orderId","orderplaced","items"];
       var clientExpectedJSON = {
    
            "_id" : "5bdafd571e197421f738e654",
            "userid" : "xxxx",
            "name" : "karthik",
            "orderId" : "62250111",
            "orderplaced" : "16/11/2018",
            "items" : "1"
            }
          app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    }); 

  
    app.get("/trackOrders", function (req, res) {
        'use strict';
        var list =["_id","userid","name","orderId","productdescription","status","orderdetails","Updated"];
       var clientExpectedJSON = {
        "_id" : "5bdafd571e197421f738e654",
        "userid" : "xxxx",
        "orderId" : "62250222",
        "productdescription" : "Redmi4A",
        "name" : "Rathina",
        "status" : "In-Shipping",
        "Updated" : "18 nov 18, 12.23PM",
        "orderdetails" : [
          {
            "placename" : "theni",
            "time" : "16 nov 18, 09.23AM"
          }
        ]
      }
          app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    }); 
   
        

    app.put("/updateOrderById/:orderId", function (req, res) {
        'use strict';
        'use strict';
        var list =["orderId","orderSchemes","orderId","createdDate","lastModifiedDate","modifiedFlag","creator","orderType","status","value","tat","branch",
        "customer","items","paymentType","paymentRef","lmp","createdAt","updatedAt"];
       var clientExpectedJSON = {
        "orderId" : "5bd6d6dc4688f044bc4a1224",
       "orderSchemes" : [ 
           "5bbc1388f7e0650cd08a8f62"
       ],
       "orderId" : "ORD10001",
       "createdDate" : "2018-10-05T06:32:52.235Z",
       "lastModifiedDate" : "2018-10-07T06:32:52.235Z",
       "modifiedFlag" : true,
       "creator" : "5bdc13b151344842f0eb8231",
       "orderType" : "Affiliate",
       "status" : "confirmed",
       "value" : 29990.95,
       "tat" : "2018-10-15T06:32:52.235Z",
       "branch" : "5bcf0a2bf06c331c29140d4b",
       "customer" : "5bd1b9c60968b207f0a1d83c",
       "items" : [ 
           {
               "itemSchemes" : [],
               "_id" : "5bd319f88387b30b305f68f4",
               "item" :"5bb6d3aef7e0650cd089fdbc",
               "quantity" : 10
           }
       ],
       "paymentType" : "loan",
       "paymentRef" : [ 
           {
               "_id" : "5bd319f88387b30b305f68f6"
           }, 
           {
               "_id" : "5bd319f88387b30b305f68f5"
           }
       ],
       "lmp" : "5bbb67caf7e0650cd08a8670",
       "createdAt" : "2018-10-29T09:46:04.225Z",
       "updatedAt" : "2018-10-29T09:46:04.225Z",
           "__v" : 0
   }
   
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
        });
    });  
  
        
        
    
    app.put("/deleteOrderById/:orderId", function (req, res) {
        'use strict';
        var list= ["_id","active","updated_by","updated_on"];
        var clientExpectedJSON = {
        
            "_id" : "5bdafd571e197421f738e654",
            "userid" : "xxxx",
            "orderId" : "62250111",
            "Message" : "The order is cancelled successfully",
            "status"  : false
                  }
                  app.util.parserResponse(clientExpectedJSON,list,function(result){
                    res.send(result);
                });
    });

  };
