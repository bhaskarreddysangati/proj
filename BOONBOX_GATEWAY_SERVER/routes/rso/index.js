module.exports = function (params) {
    var app = params.app;

    app.post('/rso', function (req, res) {
        'use strict';
        var list = ['_id', 'email', 'mobileno', 'password', 'type', 'pin', 'status', 'role'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", email: "r@g.com", mobileno: 215672698, password: "2621762", type: 'RSO', pin: 89798, status: true, role: 'admin' };
        app.util.parserResponse(clientExpectedJSON, list, function (result) {
            res.send(result);
        });
    });
    app.get('/rso', function (req, res) {
        'use strict';
        var list = ['_id', 'email', 'mobile', 'password', 'type', 'pin', 'status', 'role'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", email: "r@g.com", mobileno: 215672698, password: "2621762", type: 'RSO', pin: 89798, status: true, role: 'admin' };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });
    app.get('/rso/:rsoid', function (req, res) {
        'use strict';
        var list = ['_id', 'email', 'mobile', 'password', 'type', 'pin', 'status', 'role'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", email: "r@g.com", mobileno: 215672698, password: "2621762", type: 'RSO', pin: 89798, status: true, role: 'admin' };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });
    app.put('/rso/:rsoid', function (req, res) {
        'use strict';
        var list = ['_id', 'email', 'mobile', 'password', 'type', 'pin', 'status', 'role'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", email: "r@g.com", mobileno: 215672698, password: "2621762", type: 'RSO', pin: 89798, status: true, role: 'admin' };
        app.util.parserResponse(clientExpectedJSON, list, function (result) {
            res.send(result);
        });
    });
    app.put('/removerso/:rsoid', function (req, res) {
        'use strict';
        var list = ['_id', 'email', 'mobile', 'password', 'type', 'pin', 'status', 'role'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", email: "r@g.com", mobileno: 215672698, password: "2621762", type: 'RSO', pin: 89798, status: true, role: 'admin' };
        app.util.parserResponse(clientExpectedJSON, list, function (result) {
            res.send(result);
        });
    });
    app.get('/rso/:rsoId/:active', function (req, res) {
        'use strict';
        var list = ['_id', 'email', 'mobile', 'password', 'type', 'pin', 'status', 'role'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", email: "r@g.com", mobileno: 215672698, password: "2621762", type: 'RSO', pin: 89798, status: true, role: 'admin' };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    });
};
