var extenalUrl=require('../extenalUrl')
module.exports=function (params){
	var app=params.app;
	app.post('/authentication',function(req,res){
		//console.log('jlkjlkjlk')
		//console.log(req.body)

       app.post('/authentication', function (req, res) {
           'use strict';
            var postData={
              	data:req.body
    }
    require('request').post({ 
        uri:'http://localhost:3003/authentication',
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body:require('querystring').stringify(postData)
  });

	})
}