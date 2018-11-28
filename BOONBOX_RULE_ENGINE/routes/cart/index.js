module.exports = function (params) {
    var app = params.app;
    var RuleEngine = require('../../index');
    var R = new RuleEngine();
    var rules = require("../../rules/viewcart");

   app.get('/getcart',function(err,res){
    
    R.register(rules);
    /* Fact with more than 500 as transaction but a Debit card, and this should be blocked */
    var fact = {
        "name": "user1",
        "application": "MOB",
        "userId": "",
        
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