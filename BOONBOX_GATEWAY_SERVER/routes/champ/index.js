var request = require('request');
var externalUrl=require('../externalUrl');
require('dotenv').config();
const axios = require("axios");

module.exports = function (params) {
    var app = params.app;

        // Language Selection
        app.get('/getAllLanguages', function (req, res) {
            'use strict';
            var list=["_id","languageCode","languagename","status"];
            var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , languageCode : "en" , languagename: "English" , status : true };
            app.util.parserResponse(clientExpectedJSON,list,function(result){
                app.http.sendResponse(res,result,true);
            });
        });  
        
        // Get Language Selection By ID
        app.get('/getLanguage/:languageCode', function (req, res) {
            'use strict';
            var list=["_id","languageCode","languagename","status"];
            var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , languageCode : "en" , languagename: "English" , status : true };
            app.util.parserResponse(clientExpectedJSON,list,function(result){
                app.http.sendResponse(res,result,true);
            });
        });  
    
        // Champ Profile API
        app.post('/userprofile', function (req, res) {
            'use strict';
            var list=["_id","userid","qrcode","pancard","firstname","lastname","customer","dob","gender","OTP","mobileno","emailid","pincode","state","district","block","village","bankdetails"];
            var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", 
                                      qrcode : "qrdyudsyu78" , 
                                      userid : "U001",
                                      pancard: "pancet378" , 
                                      firstname : "rahul", 
                                      lastname: "sai vishnu", 
                                      customer : ['hdfguwyfg276','237t87236t62'],
                                      dob: "05/05/1997", 
                                      gender : "male",
                                      OTP : 1265,
                                      mobileno : 2342342342 , 
                                      emailid: "rahulsaivishnu@gmail.com" , 
                                      pincode : "6374673", 
                                      state: "Tamilnadu", 
                                      district: "Kanchipuram", 
                                      block : "kanchipuram",
                                      village : "enathur",
                                      bankdetails :[{
                                        accountholdername : "karthik",
                                        accountnumber : "62250111",
                                        confirmaccountnumber : "62250111",
                                        IFSCcode : "ICIC00011",
                                        UPIID : "0022"
                                      }]
                                    };
            app.util.parserResponse(clientExpectedJSON,list,function(result){
                res.send(result);
                // app.invoke.getSVCPostRequestJSON(clientExpectedJSON)
            });
        });
        
        // Champ Profile API
        app.get('/userprofile/:_id', function (req, res) {
            'use strict';
            var list=["_id","qrcode","userid","pancard","firstname","lastname","customer","dob","OTP","gender","mobileno","emailid","pincode","state","district","block","village","bankdetails"];
            var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", 
                                      qrcode : "qrdyudsyu78" , 
                                      userid : "U001",
                                      pancard: "pancet378" , 
                                      firstname : "rahul", 
                                      lastname: "sai vishnu", 
                                      customer : ['hdfguwyfg276','237t87236t62'],
                                      dob: "05/05/1997", 
                                      OTP : 5262,
                                      gender : "male",
                                      mobileno : 2342342342 , 
                                      emailid: "rahulsaivishnu@gmail.com" , 
                                      pincode : "6374673", 
                                      state: "Tamilnadu", 
                                      district: "Kanchipuram", 
                                      block : "kanchipuram",
                                      village : "enathur",
                                      bankdetails :[{
                                        accountholdername : "karthik",
                                        accountnumber : "62250111",
                                        confirmaccountnumber : "62250111",
                                        IFSCcode : "ICIC00011",
                                        UPIID : "0022"
                                      }]
                                    };
            app.util.parserResponse(clientExpectedJSON,list,function(result){
                app.http.sendResponse(res,result,true);
                // app.invoke.getSVCPostRequestJSON(clientExpectedJSON)
            });
        });
    
        // Champ Profile API
        app.put('/userprofile/:_id', function (req, res) {
            'use strict';
            var list=["_id","qrcode","userid","pancard","firstname","lastname","customer","dob","OTP","gender","mobileno","emailid","pincode","state","district","block","village","bankdetails"];
            var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", 
                                      qrcode : "qrdyudsyu78" , 
                                      userid : "U001",
                                      pancard: "pancet378" , 
                                      firstname : "rahul", 
                                      lastname: "sai vishnu", 
                                      customer : ['hdfguwyfg276','237t87236t62'],
                                      dob: "05/05/1997", 
                                      OTP : 3536,
                                      gender : "male",
                                      mobileno : 2342342342 , 
                                      emailid: "rahulsaivishnu@gmail.com" , 
                                      pincode : "6374673", 
                                      state: "Tamilnadu", 
                                      district: "Kanchipuram", 
                                      block : "kanchipuram",
                                      village : "enathur",
                                      bankdetails :[{
                                        accountholdername : "karthik",
                                        accountnumber : "62250111",
                                        confirmaccountnumber : "62250111",
                                        IFSCcode : "ICIC00011",
                                        UPIID : "0022"
                                      }]
                                    };
            app.util.parserResponse(clientExpectedJSON,list,function(result){
                res.send(result);
                // app.invoke.getSVCPostRequestJSON(clientExpectedJSON)
            });
        });
        
        
        
        // Generate OTP
        app.get('/getVerifyOTP/:mobileno/:OTP', function (req, res) {
            'use strict';
            var list=["OTP",'mobileno'];
            var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , OTP : 2341 , mobileno: 162757143 };
            app.util.parserResponse(clientExpectedJSON,list,function(result){
                app.http.resProcessor.sendResponse(res,result,true);
            });
        });  
    
    // Champ Profile API
    app.get('/userprofile/:_id', function (req, res) {
        'use strict';
        var list=["_id","qrcode","pancard","firstname","lastname","dob","gender","mobileno","emailid","pincode","state","district","block","village","bankdetails"];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", 
                                  qrcode : "qrdyudsyu78" , 
                                  pancard: "pancet378" , 
                                  firstname : "rahul", 
                                  lastname: "sai vishnu", 
                                  dob: "05/05/1997", 
                                  gender : "male",
                                  mobileno : 2342342342 , 
                                  emailid: "rahulsaivishnu@gmail.com" , 
                                  pincode : "6374673", 
                                  state: "Tamilnadu", 
                                  district: "Kanchipuram", 
                                  block : "kanchipuram",
                                  village : "enathur",
                                  bankdetails :[{
                                    accountholdername : "karthik",
                                    accountnumber : "62250111",
                                    confirmaccountnumber : "62250111",
                                    IFSCcode : "ICIC00011",
                                    UPIID : "0022"
                                  }]
                                };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.sendResponse(res,result,true);
            // app.invoke.getSVCPostRequestJSON(clientExpectedJSON)
        });
    });

    // Champ Profile API
    app.put('/userprofile/:_id', function (req, res) {
        'use strict';
        var list=["_id","qrcode","pancard","firstname","lastname","dob","gender","mobileno","emailid","pincode","state","district","block","village","bankdetails"];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf", 
                                  qrcode : "qrdyudsyu78" , 
                                  pancard: "pancet378" , 
                                  firstname : "rahul", 
                                  lastname: "sai vishnu", 
                                  dob: "05/05/1997", 
                                  gender : "male",
                                  mobileno : 2342342342 , 
                                  emailid: "rahulsaivishnu@gmail.com" , 
                                  pincode : "6374673", 
                                  state: "Tamilnadu", 
                                  district: "Kanchipuram", 
                                  block : "kanchipuram",
                                  village : "enathur",
                                  bankdetails :[{
                                    accountholdername : "karthik",
                                    accountnumber : "62250111",
                                    confirmaccountnumber : "62250111",
                                    IFSCcode : "ICIC00011",
                                    UPIID : "0022"
                                  }]
                                };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
            // app.invoke.getSVCPostRequestJSON(clientExpectedJSON)
        });
    });
    // Generate OTP
    app.get('/getVerifyOTP/:mobileno', function (req, res) {
        'use strict';
        var list=["OTP",'mobileno'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , OTP : "2341" , mobileno: 162757143 };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.resProcessor.sendResponse(res,result,true);
        });
    });  
    
    // Earnings Dashboard Screen
    app.get('/getEarnings/:_id', function (req, res) {
        'use strict';
        var list=["_id","totalearnings",'joiningbonus','referralbonus','comissionearned'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , totalearnings : 5000 , joiningbonus: 1000 , referralbonus : 1500 ,comissionearned : 2500 };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.resProcessor.sendResponse(res,result,true);
        });
    }); 

    // Earnings Dashboard Screen
    app.get('/homeScreen/:productid', function (req, res) {
        'use strict';
        var list=["_id","schemes",'banners','categorylist','productlist'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , schemes : "50% off" , banners: "Summer sale" , categorylist : "categories", productlist : "products" };
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.resProcessor.sendResponse(res,result,true);
        });
    }); 

    // Customer Details
    app.post('/customer', function (req, res) {
        'use strict';
        var list=["_id","name","mobileno","address"];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , name: "rahul" ,mobileno : 2342342342 , address : "address"};
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
        });
    }); 
    
    // Customer Details
    app.get('/customer/:_id', function (req, res) {
        'use strict';
        var list=["_id","schemes",'banners','categorylist','productlist'];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , name: "rahul" ,mobileno : 2342342342 , address : "address"};
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            app.http.resProcessor.sendResponse(res,result,true);
        });
    }); 

    // Customer Details
    app.put('/customer/:_id', function (req, res) {
        'use strict';
        var list=["_id","firstname","lastname","emailid","dob","gender","mobileno","aadharcard","qrcode","occupation","address","referralcode","bankdetails"];
        var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , firstname: "Rahul" , lastname : "Sai Vishnu", emailid : "rahulsaivishnu@cintanatech.com", dob : "08/02/1897", gender : "male" ,mobileno : 2342342342 , aadharcard : "2356artdatrcat", qrcode : "gdt37676dg76", occupation : "Champ",  address : "address", referralcode : "qwugdqu76", bankdetails : "SBI bank"};
        app.util.parserResponse(clientExpectedJSON,list,function(result){
            res.send(result);
        });
    }); 
   app.post('/otp', function (req, res) { 
        'use strict';
	/* var otp = Math.floor(1000 + Math.random() * 9000);
	 var mobile=req.body.mobile
	otpsend(otp,mobile)
	res.end();       */ 
          var postData={
                     mobile:req.body.mobile,
          }
          require('request').post({ 
              uri:process.env.FACABE_ENDPOINT+externalUrl.otp,
              headers:{'content-type': 'application/x-www-form-urlencoded'},
              body:require('querystring').stringify(postData)
        });

           res.end()

    }); 

        // Earnings Dashboard Screen
        app.get('/dashboard/:userid', function (req, res) {
            'use strict';
            var list=["_id","userid",'banners','totalearnings'];
            var clientExpectedJSON = { _id: "erwf63t63rvs7wraf3tf" , "userid" : "CHAMP0001" ,banners: "Summer sale" , totalearnings : 400 };
            app.util.parserResponse(clientExpectedJSON,list,function(result){
                app.http.resProcessor.sendResponse(res,result,true);
            });
        });  
};

function otpsend(otp,mobile){
  //https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=K1PCb1XBLESxCes5P1rq9A&senderid=TESTIN&channel=2&DCS=0&flashsms=0&number=7277593672&text=test message&route=Normal Connect
  console.log(otp.otpnumber)
  request('https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=Asb1Ty3MoUm0L0oAMJjSjw&senderid=TESTIN&channel=2&DCS=0&flashsms=0&number='+mobile+'&text='+otp+' message&route=Normal Connect', function (error, response, body) {
   /* console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.*/
	
  });
}
