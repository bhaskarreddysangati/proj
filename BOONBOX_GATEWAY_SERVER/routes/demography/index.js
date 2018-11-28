module.exports = function(params) {
  var app = params.app;
  //country
  app.post("/insertCountry", function(req, res) {
    "use strict";
    var list =["_id","countryname","countryshortcode","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd0597eb339b81c30d3e7f2",countryname: "India" , countryshortcode : "IN" , status : true };
        
    app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
    });
    //app.controller.save(req,res,'');
  });
  app.get("/getCountry", function(req, res) {
    "use strict";
    var list =["_id","countryname","countryshortcode","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd0597eb339b81c30d3e7f2",countryname: "India" , countryshortcode : "IN" , status : true };
        
    app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
    });
    //app.controller.save(req,res,'');
  });
  app.get("/getCountryById/:Id", function(req, res) {
    "use strict";
    var list =["_id","countryname","countryshortcode","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd0597eb339b81c30d3e7f2",countryname: "India" , countryshortcode : "IN" , status : true };
        
    app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
    });
    //app.controller.save(req,res,'');
  });
  app.put("/updateCountryById/:Id", function(req, res) {
    "use strict";
    var list =["_id","countryname","countryshortcode","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd0597eb339b81c30d3e7f2",countryname: "India" , countryshortcode : "IN" , status : true };
        
    app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
    });
    //app.controller.save(req,res,'');
  });
  app.put("/deleteCountryById/:Id", function(req, res) {
    "use strict";
    var list =["_id","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd0597eb339b81c30d3e7f2",countryname: "India" , countryshortcode : "IN" , status : true };
        
    app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
    });
    //app.controller.save(req,res,'');
  });
  
  //state
  app.post("/insertState", function(req, res) {
    "use strict";
    var list =["_id","statename","stateshortcode","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd05eddacc8d91d8f841abc",statename: "Andaman and Nicobar Islands" ,
     stateshortcode : "AN" ,country:"5bd0597eb339b81c30d3e7f2", status : true };
        
    app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
    });
    //app.controller.save(req,res,'');
  });
  app.get("/getState", function(req, res) {
    "use strict";
    var list =["_id","statename","stateshortcode","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd05eddacc8d91d8f841abc",statename: "Andaman and Nicobar Islands" ,
     stateshortcode : "AN" ,country:"5bd0597eb339b81c30d3e7f2", status : true };
        
    app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
    });
    //app.controller.save(req,res,'');
  });
  app.get("/getStateById/:Id", function(req, res) {
    "use strict";
    var list =["_id","statename","stateshortcode","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd05eddacc8d91d8f841abc",statename: "Andaman and Nicobar Islands" ,
     stateshortcode : "AN" ,country:"5bd0597eb339b81c30d3e7f2", status : true };
        
    app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
    });
    //app.controller.save(req,res,'');
  });
  app.put("/updateStateById/:Id", function(req, res) {
    "use strict";
    var list =["_id","statename","stateshortcode","country","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd05eddacc8d91d8f841abc",statename: "Andaman and Nicobar Islands" ,
     stateshortcode : "AN" ,country:"5bd0597eb339b81c30d3e7f2", status : true };
        
    app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
    });
    //app.controller.save(req,res,'');
  });
  app.put("/deleteStateById/:Id", function(req, res) {
    "use strict";
    var list =["_id","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd05eddacc8d91d8f841abc",statename: "Andaman and Nicobar Islands" ,
     stateshortcode : "AN" ,country:"5bd0597eb339b81c30d3e7f2", status : true };
        
    app.util.parserResponse(clientExpectedJSON,list,function(result){
        app.http.sendResponse(res,result,true);
    });
    //app.controller.save(req,res,'');
  });

  //district
  app.post("/insertDistrict", function(req, res) {
    "use strict";
    var list =["_id","districtname","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd2087be0ee766c87894f15",districtname: "NORTH WEST DELHI" ,
    state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2", status : true };
       
   app.util.parserResponse(clientExpectedJSON,list,function(result){
       app.http.sendResponse(res,result,true);
   });
    //app.controller.save(req,res,'');
  });
  app.get("/getDistrict", function(req, res) {
    "use strict";
    var list =["_id","districtname","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd2087be0ee766c87894f15",districtname: "NORTH WEST DELHI" ,
    state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2", status : true };
       
   app.util.parserResponse(clientExpectedJSON,list,function(result){
       app.http.sendResponse(res,result,true);
   });
    //app.controller.save(req,res,'');
  });
  app.get("/getDistrictById/:Id", function(req, res) {
    "use strict";
    var list =["_id","districtname","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd2087be0ee766c87894f15",districtname: "NORTH WEST DELHI" ,
    state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2", status : true };
       
   app.util.parserResponse(clientExpectedJSON,list,function(result){
       app.http.sendResponse(res,result,true);
   });
    //app.controller.save(req,res,'');
  });
  app.put("/updateDistrictById/:Id", function(req, res) {
    "use strict";
    var list =["_id","districtname","state","country","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd2087be0ee766c87894f15",districtname: "NORTH WEST DELHI" ,
    state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2", status : true };
       
   app.util.parserResponse(clientExpectedJSON,list,function(result){
       app.http.sendResponse(res,result,true);
   });
    //app.controller.save(req,res,'');
  });
  app.put("/deleteDistrictById/:Id", function(req, res) {
    "use strict";
    var list =["_id","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd2087be0ee766c87894f15",districtname: "NORTH WEST DELHI" ,
    state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2", status : true };
       
   app.util.parserResponse(clientExpectedJSON,list,function(result){
       app.http.sendResponse(res,result,true);
   });
    //app.controller.save(req,res,'');
  });

  //subdistrict
  app.post("/insertSubDistrict", function(req, res) {
    "use strict";
    var list =["_id","subdistrictname","district","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd2087be0ee766c87894f15",subdistrictname: "Defence Colony" ,
    district:"5bd2087be0ee766c87894f13",state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2",
     status : true };
       
   app.util.parserResponse(clientExpectedJSON,list,function(result){
       app.http.sendResponse(res,result,true);
   });
    //app.controller.save(req,res,'');
  });
  app.get("/getSubDistrict", function(req, res) {
    "use strict";
    var list =["_id","subdistrictname","district","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd2087be0ee766c87894f15",subdistrictname: "Defence Colony" ,
    district:"5bd2087be0ee766c87894f13",state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2",
     status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.get("/getSubDistrictById/:Id", function(req, res) {
    "use strict";
    var list =["_id","subdistrictname","district","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd2087be0ee766c87894f15",subdistrictname: "Defence Colony" ,
    district:"5bd2087be0ee766c87894f13",state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2",
     status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.put("/updateSubDistrictById/:Id", function(req, res) {
    "use strict";
    var list =["_id","subdistrictname","district","state","country","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd2087be0ee766c87894f15",subdistrictname: "Defence Colony" ,
    district:"5bd2087be0ee766c87894f13",state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2",
     status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.put("/deleteSubDistrictById/:Id", function(req, res) {
    "use strict";
    var list =["_id","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd2087be0ee766c87894f15",subdistrictname: "Defence Colony" ,
    district:"5bd2087be0ee766c87894f13",state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2",
     status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });

  //pincode
  app.post("/insertPincode", function(req, res) {
    "use strict";
    var list =["_id","pincode","subdistrict","district","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd2c4a4d205743cf4800697",subdistrict: "5bd222cbb0ab3870fdb31950" ,
    district:"5bd2087be0ee766c87894f4a",state : "5bd05f02acc8d91d8f841ac9" ,country:"5bd0597eb339b81c30d3e7f2",
    pincode:"174021", status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.get("/getPincode", function(req, res) {
    "use strict";
    var list =["_id","pincode","subdistrict","district","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd2c4a4d205743cf4800697",subdistrict: "5bd222cbb0ab3870fdb31950" ,
    district:"5bd2087be0ee766c87894f4a",state : "5bd05f02acc8d91d8f841ac9" ,country:"5bd0597eb339b81c30d3e7f2",
    pincode:"174021", status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.get("/getPincodeById/:Id", function(req, res) {
    "use strict";
    var list =["_id","pincode","subdistrict","district","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd2c4a4d205743cf4800697",subdistrict: "5bd222cbb0ab3870fdb31950" ,
    district:"5bd2087be0ee766c87894f4a",state : "5bd05f02acc8d91d8f841ac9" ,country:"5bd0597eb339b81c30d3e7f2",
    pincode:"174021", status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.put("/updatePincodeById/:Id", function(req, res) {
    "use strict";
    var list =["_id","pincode","subdistrict","district","state","country","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd2c4a4d205743cf4800697",subdistrict: "5bd222cbb0ab3870fdb31950" ,
    district:"5bd2087be0ee766c87894f4a",state : "5bd05f02acc8d91d8f841ac9" ,country:"5bd0597eb339b81c30d3e7f2",
    pincode:"174021", status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.put("/deletePincodeById/:Id", function(req, res) {
    "use strict";
    var list =["_id","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd2c4a4d205743cf4800697",subdistrict: "5bd222cbb0ab3870fdb31950" ,
    district:"5bd2087be0ee766c87894f4a",state : "5bd05f02acc8d91d8f841ac9" ,country:"5bd0597eb339b81c30d3e7f2",
    pincode:"174021", status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });

  //village
  app.post("/insertVillage", function(req, res) {
    "use strict";
    var list =["_id","villagename","pincode","subdistrict","district","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd5459ad205743cf41605b9",subdistrict: "5bd221a9b0ab3870fdb31885" ,
    district:"5bd2087be0ee766c87894f13",state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2",
    pincode:"110020",villagename:"Tehkhand", status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.get("/getVillage", function(req, res) {
    "use strict";
    var list =["_id","villagename","pincode","subdistrict","district","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd5459ad205743cf41605b9",subdistrict: "5bd221a9b0ab3870fdb31885" ,
    district:"5bd2087be0ee766c87894f13",state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2",
    pincode:"110020",villagename:"Tehkhand", status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.get("/getVillageById/:Id", function(req, res) {
    "use strict";
    var list =["_id","villagename","pincode","subdistrict","district","state","country","status","created_by","created_on"];
    var clientExpectedJSON = { _id:"5bd5459ad205743cf41605b9",subdistrict: "5bd221a9b0ab3870fdb31885" ,
    district:"5bd2087be0ee766c87894f13",state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2",
    pincode:"110020",villagename:"Tehkhand", status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.put("/updateVillageById/:Id", function(req, res) {
    "use strict";
    var list =["_id","villagename","pincode","subdistrict","district","state","country","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd5459ad205743cf41605b9",subdistrict: "5bd221a9b0ab3870fdb31885" ,
    district:"5bd2087be0ee766c87894f13",state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2",
    pincode:"110020",villagename:"Tehkhand", status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
  app.put("/deleteVillageById/:Id", function(req, res) {
    "use strict";
    var list =["_id","status","updated_by","updated_on"];
    var clientExpectedJSON = { _id:"5bd5459ad205743cf41605b9",subdistrict: "5bd221a9b0ab3870fdb31885" ,
    district:"5bd2087be0ee766c87894f13",state : "5bd05f02acc8d91d8f841ac5" ,country:"5bd0597eb339b81c30d3e7f2",
    pincode:"110020",villagename:"Tehkhand", status : true };

     app.util.parserResponse(clientExpectedJSON,list,function(result){
      app.http.sendResponse(res,result,true);
  });
    //app.controller.save(req,res,'');
  });
};
