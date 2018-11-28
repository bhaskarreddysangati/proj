var RuleEngine = require('../index');

var rules = [
    
    {
    "condition": function(R) {
       R.when(this.orderId == "001" && this.productId == "10");
    },
    "consequence": function(R) {
        this.result = true;
        this.reason = "View Cart sucessfully";
        R.stop();
    }
}
,
{
    "condition": function(R) {
        R.when(this.orderId != "001" && this.productId != "10");
    },
    "consequence": function(R) {
        this.result = true;
        this.reason = "orderId and productId not matched";
        R.stop();
    }
}


,
{
    "condition": function(R) {
        R.when(this.productId == "001" && this.productcommission != "10");
    },
    "consequence": function(R) {
        this.result = true;
        this.reason = "productId Exists but provide product commission price";
        R.stop();
    }
}
,
{
    "condition": function(R) {
       R.when(this.shippingaddress == "thiruvallur");
    },
    "consequence": function(R) {
        this.result = false;
        this.reason = "Please provide shipping address";
        R.stop();
    }
}];

/* Creating Rule Engine instance and registering rule */
var R = new RuleEngine();
R.register(rules);

var fact = {
    "userId":"xx1",
    "orderId":"001",
    "productId":"10",
    "productcommission":"10",
    "shippingaddress":"thiruvallur" 
    };

R.execute(fact, function(data) {
  //  console.log(data)
    if (data.result) {
        console.log("Product share successfully");
    } else {
        console.log("Blocked Reason:" + data.reason);
    }
});