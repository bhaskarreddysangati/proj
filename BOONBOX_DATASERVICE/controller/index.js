module.exports = function(params) {
  var app = params.app;
  var documentType = {
    Single: 0,
    Distinct: -1,
    Collection: 1,
    Master: 2
  };
  var mongo = require("../datasource/mongodbs.js"),
    ObjectID = require("mongodb").ObjectID;

  var writeData = function(
    dataArray,
    counter,
    query,
    mongo,
    callback,
    keyIdentifier
  ) {
    if (dataArray && counter < dataArray.length) {
      var data = dataArray[counter];
      if (data._id === undefined && !keyIdentifier) {
        data["createdOn"] = Date.now();
        mongo.insertDocument(query.url, query.client, data, function(
          result,
          err
        ) {
          if (err !== null) {
            callback(err, result);
          } else {
            counter = counter + 1;
            writeData(
              dataArray,
              counter,
              query,
              mongo,
              callback,
              keyIdentifier
            );
          }
        });
      } else {
        data["updatedon"] = Date.now();
        mongo.updateDocument(
          query.url,
          query.client,
          data,
          function(result, err) {
            console.log("Mongo update err", err);
            if (err !== null) {
              callback(err, result);
            } else {
              counter++;
              writeData(
                dataArray,
                counter,
                query,
                mongo,
                callback,
                keyIdentifier
              );
            }
          },
          keyIdentifier
        );
      }
    } else {
      callback(null, {
        Success: true
      });
    }
  };
  var sendResponse = function(dsres, data, err) {
    dsres.send(
      JSON.stringify({
        statusCode: -100,
        statusMessage: data,
        errorMessage: err,
        iid: data !== null ? data.insertedId : null
      })
    );
  };
  app
    .post("/read", function(req, res) {
      "use strict";
      var query = req.body;
      if (query.docType === documentType.Collection) {
        if (query.query !== null && query.query !== undefined) {
          if (
            query.query._id !== undefined &&
            query.query._id !== null &&
            !Array.isArray(query.query._id)
          ) {
            query.query._id = ObjectID(query.query._id);
          }
        }
        if (Array.isArray(query.query._id)) {
          var arrayofObjectid = [];
          for (var m = 0; m < query.query._id.length; m++) {
            arrayofObjectid.push(ObjectID(query.query._id[m]));
          }
          query.query = {
            _id: {
              $in: arrayofObjectid
            }
          };
        }
        mongo.findDocuments(
          query.url,
          query.client,
          query.query,
          function(err, data) {
            //console.log(err,data);
            sendResponse(res, err, data);
          },
          query.selector
        );
      } else if (query.docType === documentType.Distinct) {
        mongo.distinct(query.url, query.client, query.query, function(
          err,
          data
        ) {
          sendResponse(res, err, data);
        });
      } else if (query.docType === documentType.Single) {
        var qq = {};
        if (query.query !== null && query.query !== undefined) {
          qq = query.query;
          if (qq._id !== undefined && qq._id !== null) {
            qq._id = ObjectID(qq._id);
          }
        }

        mongo.findDocument(
          query.url,
          query.client,
          qq,
          function(data, err) {
            //console.log(data,err);
            sendResponse(res, data, err);
          },
          null
        );
      } else if (query.docType === documentType.Master) {
        query.query._id = ObjectID(query.query._id);
        mongo.findDocuments(
          query.url,
          query.client,
          query.query,
          function(err, data) {
            sendResponse(res, err, data);
          },
          query.selector
        );
      } else {
        res.send(
          JSON.stringify({
            result: null,
            error: "Invalide call"
          })
        );
      }
    })
    .post("/remove", function(req, res) {
      "use strict";
      var query = req.body,
        data = query.query;
      mongo.removeDocument(query.url, query.client, data, function(
        err,
        result
      ) {
        sendResponse(res, err, result);
      });
    })
    .post("/doAdmin", function(req, res) {
      "use strict";
      var query = req.body,
        data = query.query;
      mongo.doAdmin(query.url, query.client, data, function(err, result) {
        sendResponse(res, err, result);
      });
    })
    .post("/write", function(req, res) {
      "use strict";
      var query = req.body,
        data = query.query,
        keyIdentifier = query.keyIdentifier;
      if (query.docType == documentType.Single) {
        if (data._id === undefined) {
          mongo.insertDocument(query.url, query.client, data, function(
            err,
            result
          ) {
            sendResponse(res, err, result);
          });
        } else {
          mongo.updateDocument(query.url, query.client, data, function(
            err,
            result
          ) {
            sendResponse(res, err, result);
          });
        }
      } else if (query.docType == documentType.Collection) {
        writeData(
          data,
          0,
          query,
          mongo,
          function(err, result) {
            sendResponse(res, result, err);
          },
          keyIdentifier
        );
      } else {
        res.send(
          JSON.stringify({
            result: null,
            error: "Invalide call"
          })
        );
      }
    })
    .post("/usertrem", function(req, res) {
      "use strict";
      var query = req.body,
        data = query.query;
      if (query.client === "tenants") {
        mongo.usertrem(query.url, query.client, {}, function(err, result) {
          sendResponse(res, null, {
            Success: true
          });
        });
      } else {
        sendResponse(res, null, {
          Success: true
        });
      }
    })
    .post("/aggregate", function(req, res) {
      "use strict";
      var query = req.body;
      if (query.docType === documentType.Collection) {
        mongo.aggregate(
          query.url,
          query.client,
          query.query,
          function(err, data) {
            //console.log(err,data);
            sendResponse(res, err, data);
          },
          query.selector
        );
      } else {
        res.send(
          JSON.stringify({
            result: null,
            error: "Invalide call"
          })
        );
      }
    });
};
