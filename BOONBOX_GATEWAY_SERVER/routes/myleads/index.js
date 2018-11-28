module.exports = function (params) {
    var app = params.app;
    
    app.post('/myleads', function (req, res) {
        'use strict';
        var list = ['_id','myleadsId','address','password','deliveryaddress','location','rsoId'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , myleadsId : "RETAIL001" , address: "Nungambakkam" , password : "123456", deliveryaddress : 'Pioneer Sudharshan Plaza', location : "Chennai", rsoId : "RSO1" };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
        });
    });
    app.get('/myleads', function (req, res) {
        'use strict';
        var list = ['_id','myleadsId','address','password','deliveryaddress','location','rsoId'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , myleadsId : "RETAIL001" , address: "Nungambakkam" , password : "123456", deliveryaddress : 'Pioneer Sudharshan Plaza', location : "Chennai", rsoId : "RSO1" };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });
    app.get('/myleads/:myleadsId', function (req, res) {
        'use strict';
        // var list = ['_id','myleadsId','address','password','deliveryaddress','location','rsoId','country','state','district','block','village','active'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , myleadsId : "RETAIL001" , address: "Nungambakkam" , password : "123456", deliveryaddress : 'Pioneer Sudharshan Plaza', location : "Chennai", rsoId : "RSO1" };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });
    app.put('/myleads/:myleadsId', function (req, res) {
        'use strict';
        var list = ['_id','myleadsId','address','password','deliveryaddress','location','rsoId','country','state','district','block','village','active'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , myleadsId : "RETAIL001" , address: "Nungambakkam" , password : "123456", deliveryaddress : 'Pioneer Sudharshan Plaza', location : "Chennai", rsoId : "RSO1" };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
        res.send(result);
    });
    });
    app.put('/removelead/:myleadsId', function (req, res) {
        'use strict';
        var list = ['_id','myleadsId','address','password','deliveryaddress','location','rsoId','country','state','district','block','village','active'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , myleadsId : "RETAIL001" , address: "Nungambakkam" , password : "123456", deliveryaddress : 'Pioneer Sudharshan Plaza', location : "Chennai", rsoId : "RSO1" };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
        });
    });
    app.get('/myleads/:rsoId/:active', function (req, res) {
        'use strict';
        var list = ['_id','myleadsId','address','password','deliveryaddress','location','rsoId','country','state','district','block','village','active'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , myleadsId : "RETAIL001" , address: "Nungambakkam" , password : "123456", deliveryaddress : 'Pioneer Sudharshan Plaza', location : "Chennai", rsoId : "RSO1" };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
        });
    });
    app.get('/myleadsbyrso/:rsoId', function (req, res) {
        'use strict';
        var list = ['_id','myleadsId','address','password','deliveryaddress','location','rsoId','country','state','district','block','village','active'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , myleadsId : "RETAIL001" , address: "Nungambakkam" , password : "123456", deliveryaddress : 'Pioneer Sudharshan Plaza', location : "Chennai", rsoId : "RSO1" };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
        });
    });
};
