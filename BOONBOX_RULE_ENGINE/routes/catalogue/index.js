module.exports = function (params) {
    var app = params.app;
    var RuleEngine = require('../../index');
    var R = new RuleEngine();
    var rules = require("../../rules/catalogue");

   app.get('/getCategory',function(err,res){
    
    R.register(rules);
    /* Fact with more than 500 as transaction but a Debit card, and this should be blocked */
    var fact = {
       category_id: req.body.category_id,
       sub_category_id: req.body.sub_category_id,
       product_id : req.body.product_id
    };
    R.execute(fact, function(data) {
        
        if (data.result) {
            console.log("category is present");
        } else {
            console.log("Blocked Reason:" + data.reason);
        }
    });
      
   })

}