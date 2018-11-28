module.exports = function (params) {
    var app = params.app;
    var RuleEngine = require('../../index');
    var R = new RuleEngine();
    var rules = require("../../rules/otprule");
    var rulesprofileupdate = require("../../rules/otprule");
    var getearning=require('../../rules/getearning')

    // Language Selection
    app.get('/getAllLanguages', function (req, res) {
        'use strict';
        var list=["_id","languageCode","languagename","status"];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , languageCode : "en" , languagename: "English" , status : true };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
        });
    }); 
    app.post('/otp',function(req,res){

        try{
            const otp = Math.floor(1000 + Math.random() * 9000);
            R.register(rules);
            var fact = {
                "mobile": req.body.mobile,
                "otp":otp
            };
            R.execute(fact, function(data) {
                if (data.result) {
                   res.json({success:'true',message:'OTP sent successfully'})
                } else {
                   res.json({success:'false',message:data.reason})
                }
            });
        }catch(err){
            res.json(err)
        }
        
    }) 
    app.put('/profileupdate',function(req,res){
        try{
                 var R = new RuleEngine();
                R.register(rulesprofileupdate);
                  
                     var fact = {
                                "aadharDtl":{"name":req.body.aadharDtl.name,"number":req.body.aadharDtl.name},
                                "pancardPth": req.body.pancardPth,
                                "firstname":req.body.firstname,
                                "lastname":req.body.lastname,
                                "gender":req.body.gender,
                                "email":req.body.email,
                                "pincode":req.body.pincode,
                                "state":req.body.state,
                                "district":req.body.district,
                                "block":req.body.block,
                                "village":req.body.village,
                                "geolocation":{"lat":req.body.geolocation.lat,"long":req.body.geolocation.long}
                            
                        };
                        R.execute(fact, function(data) {
                            if (data.result) {
                                res.json({success:'true',message:'updated success'})
                                 if(data.result && data.pancardPth.length=="0"){
                                    res.json("Give pand card some percent TDS will reduce")
                                }
                            } else {
                                res.json("Blocked Reason:" + data.reason)
                            }
                        });
                }catch(err){
                    
                    res.json(err)
                }

    })
    app.get('/getearning',function(req,res){
         var R = new RuleEngine();
            R.register(getearning);
            /* Fact with less than 500 as transaction, and this should be blocked */
            var fact = {
                "joiningbonus": "50",
                "referralcode": "100",
                "commissionearn": "150",
             
            };

            R.execute(fact, function(data) {    
                console.log(data)
                if (data.result) {
                    res.json({success:'true',message:'Free shipping'})
                } else {
                    res.json({success:'false',message:data.reason})
                }
            });
    })

};

