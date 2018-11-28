var RuleEngine = require('../index');

var rules = [{
    "condition": function(R) {
        console.log(this.minquantity.length)
        R.when(this.minquantity.length > "1" && this.maxquantity.length < "10");
    },
    "consequence": function(R) {
        this.result = true;
        this.reason = "Min and Max quantity check is successfull";
        R.stop();
    }
},{
    "condition": function(R) {
        console.log(this.minquantity.length)
        R.when(this.minquantity.length < "1");
    },
    "consequence": function(R) {
        this.result = true;
        this.reason = "Please check Min quantity fails";
        R.stop();
    }
}];
/* Creating Rule Engine instance and registering rule */
var R = new RuleEngine();
R.register(rules);

var fact = {
    "totalquantity":"10",
    "minquantity":"1",
    "maxquantity":"10"
   };

R.execute(fact, function(data) {
    console.log(data)
    if (data.result) {
        console.log("Product added to cart");
    } else {
        console.log("Blocked Reason:" + data.reason);
    }
});

