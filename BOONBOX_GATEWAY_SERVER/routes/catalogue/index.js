module.exports = function(params) {
    var app = params.app;

    //get all catalogue
    app.get("/catalogues", function(req, res) {
        'use strict';
        var list =["_id","itemVariants","detailText","detailImages","order","catid","itemName","items","sku","brandid","storeid","description",
        "imageLarge","mediaUrl","giftOptionEnable","fromGift","toGift","giftIds","basePrice","specialPrice","otherIds"];
       var clientExpectedJSON = {"_id":"1",
       "itemVariants":[],
       "detailText":[{"details1":"samsung note 10 slim desgin high pixel quality"},
       {"details2":""},
       {"details3":""},
       {"details4":""}],
       "detailImages":[null,{"images1":""},{"images2":""},{"images3":""}],
       "order":[],
       "catid":["10"],
       "itemName":"samsung note 10",
       "sku":"116543",
       "brandid":"",
       "storeid":"44",
       "description":"",
       "imageLarge":"http://testcloud.in3access.in/media/catalog/product/cache/44/image/265x/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/boonbox.jpg",
       "mediaUrl":"","mediaThumbnail":"http://testcloud.in3access.in/media/catalog/product/cache/44/thumbnail/75x75/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/boonbox_2.jpg",
       "giftOptionEnable":"0",
       "fromGift":"false",
       "toGift":"false",
       "giftIds":"",
       "basePrice":1250,
       "specialPrice":"1250",
       "otherIds":[]
   }
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });  
  
       
       
    //create catalogue
    app.post("/createCatalogue",function(req,res){
        'use strict';
        var list =["_id","itemVariants","detailText","detailImages","order","catid","itemName","items","sku","brandid","storeid","description",
        "imageLarge","mediaUrl","giftOptionEnable","fromGift","toGift","giftIds","basePrice","specialPrice","otherIds"];
        var clientExpectedJSON = {"_id":"2",
        "itemVariants":[],
        "detailText":[{"details1":"OnePlus 6"},
        {"details2":""},
        {"details3":""},
        {"details4":""}],
        "detailImages":[null,{"images1":""},{"images2":""},{"images3":""}],
        "order":[],
        "catid":["10"],
        "itemName":"samsung note 10",
        "sku":"116543",
        "brandid":"",
        "storeid":"44",
        "description":"",
        "imageLarge":"http://testcloud.in3access.in/media/catalog/product/cache/44/image/265x/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/boonbox.jpg",
        "mediaUrl":"","mediaThumbnail":"http://testcloud.in3access.in/media/catalog/product/cache/44/thumbnail/75x75/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/boonbox_2.jpg",
        "giftOptionEnable":"0",
        "fromGift":"false",
        "toGift":"false",
        "giftIds":"",
        "basePrice":1250,
        "specialPrice":"1250",
        "otherIds":[]
    }
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
        });
        
        //app.controller.save(req,res,'');
    });

    // get catalogue based on id
    app.get("/getCatalogue/:catalogueId", function (req, res) {
        'use strict';
        var list =["catalogueId","itemVariants","detailText","detailImages","order","catid","itemName","items","sku","brandid","storeid","description",
        "imageLarge","mediaUrl","giftOptionEnable","fromGift","toGift","giftIds","basePrice","specialPrice","otherIds"];
       var clientExpectedJSON = {"catalogueId":"1",
       "itemVariants":[],
       "detailText":[{"details1":"samsung note 10 slim desgin high pixel quality"},
       {"details2":""},
       {"details3":""},
       {"details4":""}],
       "detailImages":[null,{"images1":""},{"images2":""},{"images3":""}],
       "order":[],
       "catid":["10"],
       "itemName":"samsung note 10",
       "sku":"116543",
       "brandid":"",
       "storeid":"44",
       "description":"",
       "imageLarge":"http://testcloud.in3access.in/media/catalog/product/cache/44/image/265x/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/boonbox.jpg",
       "mediaUrl":"","mediaThumbnail":"http://testcloud.in3access.in/media/catalog/product/cache/44/thumbnail/75x75/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/boonbox_2.jpg",
       "giftOptionEnable":"0",
       "fromGift":"false",
       "toGift":"false",
       "giftIds":"",
       "basePrice":1250,
       "specialPrice":"1250",
       "otherIds":[]
   }
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });
    
    //update catalogue based on id
    app.put("/updateCatalogueById/:catalogueId", function (req, res) {
        'use strict';
        var list =["_id","itemVariants","detailText","detailImages","order","catid","itemName","items","sku","brandid","storeid","description",
        "imageLarge","mediaUrl","giftOptionEnable","fromGift","toGift","giftIds","basePrice","specialPrice","otherIds"];
        var clientExpectedJSON = {"_id":"2",
        "itemVariants":[],
        "detailText":[{"details1":"OnePlus 6"},
        {"details2":""},
        {"details3":""},
        {"details4":""}],
        "detailImages":[null,{"images1":""},{"images2":""},{"images3":""}],
        "order":[],
        "catid":["10"],
        "itemName":"samsung note 10",
        "sku":"116543",
        "brandid":"",
        "storeid":"44",
        "description":"",
        "imageLarge":"http://testcloud.in3access.in/media/catalog/product/cache/44/image/265x/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/boonbox.jpg",
        "mediaUrl":"","mediaThumbnail":"http://testcloud.in3access.in/media/catalog/product/cache/44/thumbnail/75x75/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/boonbox_2.jpg",
        "giftOptionEnable":"0",
        "fromGift":"false",
        "toGift":"false",
        "giftIds":"",
        "basePrice":1250,
        "specialPrice":"1250",
        "otherIds":[]
    }
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
        });
        
        //app.controller.save(req,res,'');
    });

    //delete catalogue based on id
    app.put("/deleteCatalogueById/:catalogueId", function (req, res) {
        'use strict';
        var list =["_id","active","updated_by","updated_on"];
        //app.controller.save(req,res,'');
    });

    //product
    app.get("/products", function(req, res) {
        'use strict';
        var list =["_id","itemVariants","detailText","detailImages","order","catid","itemName","items","sku","brandid","storeid","description",
        "imageLarge","mediaUrl","giftOptionEnable","fromGift","toGift","giftIds","basePrice","specialPrice","otherIds"];
       var clientExpectedJSON = {
        "_id" : "5bdc127a05dc1323f8bd6cb3",
        "catid" : "4",
        "name" : "Electronics",
        "isRoot" : "true",
        "imagePath" : "false",
        "children" : [ 
            {
                "children" : [ 
                    {
                        "catid" : "1720",
                        "name" : "Video Players Accessories",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "1722",
                        "name" : "Computers & Accessories",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "1744",
                        "name" : "28 % Category",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "28",
                        "name" : "Head Phones",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "535",
                        "name" : "Data card",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "537",
                        "name" : "Computer speaker",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "625",
                        "name" : "Mobile Accessories ",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "707",
                        "name" : "SIM",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "788",
                        "name" : "Pen drives",
                        "isRoot" : "false",
                        "imagePath" : false
                    }
                ],
                "_id" : "5bdc127a05dc1323f8bd6cb6",
                "catid" : "44",
                "name" : "Accessories",
                "isRoot" : "false",
                "imagePath" : "false"
            }, 
            {
                "children" : [ 
                    {
                        "catid" : "15",
                        "name" : "Tablet",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "518",
                        "name" : "Laptops",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "634",
                        "name" : "Desktops",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "635",
                        "name" : "Gaming",
                        "isRoot" : "false",
                        "imagePath" : false
                    }
                ],
                "_id" : "5bdc127a05dc1323f8bd6cb5",
                "catid" : "519",
                "name" : "Computers",
                "isRoot" : "false",
                "imagePath" : "false"
            }, 
            {
                "children" : [ 
                    {
                        "catid" : "455",
                        "name" : "Home Entertainment",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "626",
                        "name" : "Television",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "636",
                        "name" : "DVD Players",
                        "isRoot" : "false",
                        "imagePath" : false
                    }, 
                    {
                        "catid" : "72",
                        "name" : "Camera",
                        "isRoot" : "false",
                        "imagePath" : false
                    }
                ],
                "_id" : "5bdc127a05dc1323f8bd6cb4",
                "catid" : "66",
                "name" : "Consumer Electronics",
                "isRoot" : "false",
                "imagePath" : "false"
            }
        ],
        "createdAt" : "2018-11-02T09:01:47.088Z",
        "updatedAt" : "2018-11-02T09:01:47.088Z",
        "__v" : 0
    }
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });  
  

    //product
    app.get("/insertproductrequest", function(req, res) {
        'use strict';
        var list =["productcategory","brandname","productname","description","imagepath","modelnumber",
        "status","otherreasons","comments","requestername","mobilenumber","requestertype","active","requestedby",
    "createdby","location","salesperson","repeatedsales","expectedquantity","statename","pincode","updated_on"];
        //app.controller.save(req,res,'');
    });
    app.get("/getProductRequest", function(req, res) {
        'use strict';
        var list =["productcategory","brandname","productname","description","imagepath","modelnumber",
        "status","otherreasons","comments","requestername","mobilenumber","requestertype","active","requestedby",
    "createdby","location","salesperson","repeatedsales","expectedquantity","statename","pincode","updated_on"];
        //app.controller.save(req,res,'');
    });
    app.get("/getProductRequestById", function(req, res) {
        'use strict';
        var list =["productcategory","brandname","productname","description","imagepath","modelnumber",
        "status","otherreasons","comments","requestername","mobilenumber","requestertype","active","requestedby",
    "createdby","location","salesperson","repeatedsales","expectedquantity","statename","pincode","updated_on"];
        //app.controller.save(req,res,'');
    });
    app.get("/nprCategorywiseCount", function(req, res) {
        'use strict';
        var list =["_id","total_cat"];
        //app.controller.save(req,res,'');
    });
    app.get("/nprStatuswiseCount", function(req, res) {
        'use strict';
        var list =["_id","status"];
        //app.controller.save(req,res,'');
    });
    app.get("/nprDatewiseCount", function(req, res) {
        'use strict';
        var list =["nprnormal","nprattention","nprdanger","datearray"];
        //app.controller.save(req,res,'');
    });

    //category
    app.get("/getCategoriesFromMagento", function(req, res) {
        'use strict';
        var list =["_id","catid","name","isRoot","imagePath","children","updated_on"];
        //app.controller.save(req,res,'');
    });
    app.get("/getCategories", function(req, res) {
        'use strict';
        var list =["_id","catid","name","isRoot","imagePath","children","updated_on"];
        var clientExpectedJSON = {
            "_id" : "5befa2f581be7b09706ae49b",
            "catid" : "6",
            "name" : "Appliances",
            "isRoot" : "true",
            "imagePath" : "false",
            "children" : [ 
                {
                    "children" : [ 
                        {
                            "catid" : "1287",
                            "name" : "UPS",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "447",
                            "name" : "Stabilizers",
                            "isRoot" : "false",
                            "imagePath" : false
                        }
                    ],
                    "_id" : "5befa2f581be7b09706ae49f",
                    "catid" : "446",
                    "name" : "Electricals",
                    "isRoot" : "false",
                    "imagePath" : "false"
                }, 
                {
                    "children" : [ 
                        {
                            "catid" : "102",
                            "name" : "Washing Machine",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "117",
                            "name" : "Air Conditioner",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "1430",
                            "name" : "Kitchen Ladders",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "60",
                            "name" : "Refrigerators",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "639",
                            "name" : "Water Heaters",
                            "isRoot" : "false",
                            "imagePath" : false
                        }
                    ],
                    "_id" : "5befa2f581be7b09706ae49e",
                    "catid" : "500",
                    "name" : "Large Appliances",
                    "isRoot" : "false",
                    "imagePath" : "false"
                }, 
                {
                    "children" : [ 
                        {
                            "catid" : "1454",
                            "name" : "Induction Stove",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "16",
                            "name" : "Fan",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "422",
                            "name" : "Sewing Machine",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "440",
                            "name" : "Coolers",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "637",
                            "name" : "Cleaning Accessories",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "73",
                            "name" : "Iron Box",
                            "isRoot" : "false",
                            "imagePath" : false
                        }
                    ],
                    "_id" : "5befa2f581be7b09706ae49d",
                    "catid" : "501",
                    "name" : "Small Appliances",
                    "isRoot" : "false",
                    "imagePath" : "false"
                }, 
                {
                    "children" : [ 
                        {
                            "catid" : "1045",
                            "name" : "Air Fryer",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "1173",
                            "name" : "Chimney",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "1428",
                            "name" : "Multi Cooker",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "1432",
                            "name" : "Multi Utility Jars",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "17",
                            "name" : "Gas Stove",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "556",
                            "name" : "Roti Maker",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "56",
                            "name" : " Induction Stove / Cooktops",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "581",
                            "name" : "Hand Blender",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "583",
                            "name" : "Multi Chopper",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "585",
                            "name" : "Snack Maker",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "610",
                            "name" : "Juicer",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "612",
                            "name" : "Coffee Maker",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "614",
                            "name" : "Toaster",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "616",
                            "name" : " Sandwich maker",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "62",
                            "name" : "Mixer Grinder",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "7",
                            "name" : "Thermoware",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "754",
                            "name" : "Water Purifier",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "77",
                            "name" : "Wet Grinder",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "813",
                            "name" : "Grill",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "823",
                            "name" : "Food Processor",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "86",
                            "name" : "Electric Rice Cooker",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "88",
                            "name" : "Electric Kettle",
                            "isRoot" : "false",
                            "imagePath" : false
                        }, 
                        {
                            "catid" : "935",
                            "name" : "Kitchen tools",
                            "isRoot" : "false",
                            "imagePath" : false
                        }
                    ],
                    "_id" : "5befa2f581be7b09706ae49c",
                    "catid" : "502",
                    "name" : "Kitchen Appliances",
                    "isRoot" : "false",
                    "imagePath" : "false"
                }
            ]
        };
    
         app.util.parserResponse(clientExpectedJSON,list,function(result){
          app.http.sendResponse(res,result,true);
      });
        //app.controller.save(req,res,'');
    });
    app.get("/getCategoriesById", function(req, res) {
        'use strict';
        var list =["_id","catid","name","isRoot","imagePath","children","updated_on"];
        //app.controller.save(req,res,'');
    });

       //stores
       app.post("/insertStores", function(req, res) {
        'use strict';
        var list =["name","storefrontId","catalog","storeConfig","status","created_by","created_on"];
        //app.controller.save(req,res,'');
    });
    app.get("/getStores",function(req,res){
        'use strict';
        var list =["name","storefrontId","catalog","storeConfig","status","created_by","created_on"];
        //app.controller.save(req,res,'');
    });
    app.get("/getStoresById/:Id", function (req, res) {
        'use strict';
        var list =["name","storefrontId","catalog","storeConfig","status","created_by","created_on"];
        //app.controller.save(req,res,'');
    });
    app.put("/updateStoresById/:Id", function (req, res) {
        'use strict';
        var list =["name","storefrontId","catalog","storeConfig","status","updated_by","updated_on"];
        //app.controller.save(req,res,'');
    });
    app.put("/deleteStoresById/:Id", function (req, res) {
        'use strict';
        var list =["status","updated_by","updated_on" ];
        //app.controller.save(req,res,'');
    }); 

  };
