/*jslint node:true */
/*jslint nomen: true*/
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    compress = require('compression');

    process.env.NODE_DEBUG="net http"
app.use(compress());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

require('./controller')({ app: app });

var server = app.listen(3007, function () {
   console.log("Data Service")
});

process.on('uncaughtException', function (err) {
    console.error(err.stack);
    console.log("Node NOT Exiting...");
});