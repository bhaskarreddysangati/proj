module.exports = function (params) {
    var app = params.app;
    var RuleEngine = require('../../index');
    var R = new RuleEngine();
    var rules = require("../../rules/complaint");

app.post('/complaint', function(req,res){
R.register(rules);
var fact = {
    userid : req.body.userid,
    complaint : req.body.complaint,
    complaintnature : req.body.complaintnature,
    complainttype : req.body.complainttype
};
R.execute(fact, function(data) {
    
    if (data.result) {
        // console.log(data.reason);
        res.status(200).json({
            success : true,
            message : data.reason
        })
    } else {
        res.status(500).json({
            success : false,
            message : data.reason 
        })
        // console.log("Blocked Reason:" + data.reason);
    }
});

})     
}