module.exports = function(params) {
    var app = params.app;
    app.get("/schemes", function(req, res) {
        'use strict';
        'use strict';
        var list =["_id","storeSchemeId","name","image","scheme_type","is_coupon","couponcode","buy_sku","sku_type","condition_qty","discount_sku","discount_amount",
        "order_attributes","customer_attributes","from_date","to_date","is_active","uses_per_scheme","sequence","created_at","item_status","createdAt","updatedAt"];
        var clientExpectedJSON = {
            "_id" :"5bdafd571e197421f738e65a",
            "storeSchemeId" : "26",
            "name" : "Test",
            "image" : null,
            "scheme_type" : "by_percent_item",
            "is_coupon" : "0",
            "couponcode" : null,
            "buy_sku" : "895156",
            "sku_type" : "qty",
            "condition_qty" : "10",
            "discount_sku" : null,
            "discount_amount" : "20.00",
            "order_attributes" : null,
            "customer_attributes" : null,
            "product_attributes" : null,
            "from_date" : null,
            "to_date" : null,
            "is_active" : true,
            "uses_per_scheme" : "0",
            "sequence" : "jsonBody[i].sequence",
            "created_at" : "2017-11-22 19:41:03",
            "item_status" : null,
            "createdAt" : "2018-11-01T13:19:19.063Z",
            "updatedAt" : "2018-11-01T13:19:19.063Z",
            "__v" : 0
        }
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
        
        //app.controller.save(req,res,'');
    });
    app.post("/createScheme",function(req,res){
        'use strict';
        var list =["_id","name","image","uses_per_scheme","created_at","scheme_type","buy_sku","item_status","sku_type","condition_qty","from_date","to_date","is_active"];
        //app.controller.save(req,res,'');
    });
    app.get("/getScheme/:schemeId", function (req, res) {
        'use strict';
        var list =["_id","name","image","uses_per_scheme","created_at","scheme_type","buy_sku","item_status","sku_type","condition_qty","from_date","to_date","is_active"];
        //app.controller.save(req,res,'');
    });
    app.put("/updateSchemeById/:schemeId", function (req, res) {
        'use strict';
        var list =["_id","name","image","uses_per_scheme","created_at","scheme_type","buy_sku","item_status","sku_type","condition_qty","from_date","to_date","is_active"];
        //app.controller.save(req,res,'');
    });
    app.put("/deleteSchemeById/:schemeId", function (req, res) {
        'use strict';
        var list =["_id","active","updated_by","updated_on"];
        //app.controller.save(req,res,'');
    });

  
}
