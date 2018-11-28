
module.exports=function (params){
    var app = params.app;
     
       app.post('/authentication', function (req, res) {
           'use strict';
            var postData={
               mobile:req.body.mobile,
               dob:req.body.dob
      
    }
    require('request').post({ 
        uri:'http://localhost:7000/authentication',
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body:require('querystring').stringify(postData)
  });

 })
}