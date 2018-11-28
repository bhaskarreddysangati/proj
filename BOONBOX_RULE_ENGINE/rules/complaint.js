var rules = [
    {
        "condition": function(R) {
            R.when(this.userid == "U001");
        },
        "consequence": function(R) {
            this.result = true;
            this.reason = "complaint Registered Successfully";
            R.stop();
        }
    },
    {
    "condition": function(R) {
        R.when(this.userid != "U001");
    },
    "consequence": function(R) {
        this.result = true;
        this.reason = "User Id Doesn't Exist";
        R.stop();
    }
},
];

module.exports = rules;

