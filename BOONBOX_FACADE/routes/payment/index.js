module.exports = function (params) {
    var app = params.app;
    
    app.post('/payment', function (req, res) {
        'use strict';
        /*
            var transactionId1 = Math.floor(1000 + Math.random() * 9000);
            var transactionId2 = Math.floor(1000 + Math.random() * 9000);
            var transId='txnid'+transactionId1 + transactionId2 
        */
        var list = ['_id','transactionId','country','discount','mode','cardhash','error_Message','state','bankcode','txnid','surl','net_amount_debit','lastname','zipcode','phone','productinfo','hash','status','firstname','city','error','addedon','encryptedPaymentId','bank_ref_num','key','email','amount','unmappedstatus','address2','payuMoneyId','address1','mihpayid','field1','cardnum','furl',
        'amount_split','PAYU','name_on_card','txnStatus','txnMessage','field1','field2','field3','field4','field5','field6','field7','field8','field9','field10'];
       // app.controller.save(req,res, "compliant")
    });
}