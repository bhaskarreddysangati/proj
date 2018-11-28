module.exports=function (params){
    var app = params.app;
    var RuleEngine = require('../../index');
    var R = new RuleEngine();
    var rules = require("../../rules/loginrule");

    app.post('/login',function(req,res){
		    	/* Creating Rule Engine instance and registering rule */
		try{
			R.register(rules);
			var fact = {
			    "mobile": req.body.mobile,
			    "dob":req.body.dob
			};
		console.log(fact)
			R.execute(fact, function(data) {
			    
			    if (data.result) {
			        res.json({success:'true',message:data.reason})
			    } else {
			        //console.log("Blocked Reason:" + data.reason);
			        res.json({success:'false',message:data.reason})
			    }
			});
		}catch(err){
			res.json(err)
		}
		
    }) 
    
}