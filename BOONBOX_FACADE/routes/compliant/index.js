module.exports = function (params) {
    var app = params.app;
    
    app.post('/complaint', function (req, res) {
        'use strict';
        var list=["_id","complaintid","complaintans","compliantnature","complianttype","emailid","mobilenumber","firstname"];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , complaintid : "COMP001" , complaintans: "This is Compliant" , compliantnature : "Critical", complianttype : "High", emailid : "r@g.com", mobilenumber : 2671823189, firstname : "Rahul sai Vishnu"};
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
        });
    });
    app.get('/complaint', function (req, res) {
        'use strict';
        var list=["_id","complaintid","complaintans","compliantnature","complianttype","emailid","mobilenumber","firstname"];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , complaintid : "COMP001" , complaintans: "This is Compliant" , compliantnature : "Critical", complianttype : "High", emailid : "r@g.com", mobilenumber : 2671823189, firstname : "Rahul sai Vishnu"};
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });
    app.get('/complaint/:complaintid', function (req, res) {
        'use strict';
        var list=["_id","complaintid","complaintans","compliantnature","complianttype","emailid","mobilenumber","firstname"];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , complaintid : "COMP001" , complaintans: "This is Compliant" , compliantnature : "Critical", complianttype : "High", emailid : "r@g.com", mobilenumber : 2671823189, firstname : "Rahul sai Vishnu"};
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });
};
