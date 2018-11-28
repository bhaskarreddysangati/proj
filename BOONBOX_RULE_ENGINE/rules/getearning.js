var RuleEngine = require('../index');
/* Sample Rule to block a transaction if its below 500 */
      /*  var keys = Object.values(resJSON);
        var newObject = {}
        keys.map((val,i)=>newObject[list[i]]=val);
        callback(newObject);*/
        var rule = {
            "condition": function(R) {
                R.when(this.transactionTotal <= 100);
            },
            "consequence": function(R) {
                this.result = false;
                this.reason = "The shipping charge will apply less than 100";
                R.stop();
            }
        };
module.exports=rule