/*jslint node:true */

var MongoClient = require("mongodb").MongoClient,
  dbConnection = new Array(25),
  ObjectId = require("mongodb").ObjectID;

function connectDB(url, callBack) {
  "use strict";
  // Use connect method to connect to the Server
  MongoClient.connect(
    url,
    function(err, db) {
      if (err) {
        callBack(null, err);
      } else {
        callBack(db.db("newboonbox"), null);
      }
    }
  );
}

function connect(cnString, callBack) {
  "use strict";
  try {
    connectDB(cnString, function(db, err) {
      callBack(db, err);
    });
  } catch (ex) {
    callBack(null, ex);
  }
}

module.exports.doAdmin = function(cnString, tabl, data, callback) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tabl);
          data._id = ObjectId("5acf728c86f5dca08a04c090");
          collection.insertOne(data, function(err, result) {
            db.close();
            if (!err) {
              callback(result, null);
            } else {
              callback(null, err);
            }
          });
        } else {
          callback(null, err);
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.insertDocument = function(cnString, tabl, data, callback) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tabl);
          collection.insertOne(data, function(err, result) {
         
            if (!err) {
              callback(result, null);
            } else {
              callback(null, err);
            }
          });
        } else {
          callback(null, err);
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.updateDocument = function(
  cnString,
  tabl,
  data,
  callback,
  keyIdentifier
) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tabl);
          if (keyIdentifier) {
            var id = keyIdentifier;
            var q = {};
            q[id] = data[id];
            console.log(q);
            collection.replaceOne(
              q,
              data,
              {
                upsert: true
              },
              function(err, result) {
                console.log(err, result);
                db.close();
                if (!err) {
                  callback(result, null);
                } else {
                  callback(null, err);
                }
              }
            );
          } else {
            var id = new ObjectId(data._id);
            delete data._id;
            collection.replaceOne(
              {
                _id: id
              },
              data,
              function(err, result) {
                db.close();
                if (!err) {
                  callback(result, null);
                } else {
                  callback(null, err);
                }
              }
            );
          }
        } else {
          callback(null, err);
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.upsertDocument = function(cnString, tabl, data, callback) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tabl);
          var id = data.name;
          delete data._id;
          collection.replaceOne(
            {
              name: id
            },
            data,
            {
              upsert: true
            },
            function(err, result) {
              db.close();
              if (!err) {
                callback(result, null);
              } else {
                callback(null, err);
              }
            }
          );
        } else {
          callback(null, err);
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.usertrem = function(cnString, tabl, data, callback) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tabl);
          var id = data.name;
          delete data._id;
          collection.remove({}, function(err, result) {
            db.close();
            if (!err) {
              callback(result, null);
            } else {
              callback(null, err);
            }
          });
        } else {
          callback(null, err);
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.insertDocuments = function(cnString, tabl, data, callback) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          // Get the documents collection
          var collection = db.collection(tabl);
          // Insert some documents
          collection.insertMany(data, function(err, result) {
            db.close();
            if (!err) {
              callback(result, null);
            } else {
              callback(null, err);
            }
          });
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.listCollections = function(cnString, callback) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          // Get the documents collection
          db.collections(function(err, collections) {
            db.close();
            if (!err) {
              callback(null, collections);
            } else {
              callback(err, null);
            }
          });
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.findDocuments = function(
  cnString,
  tbl,
  query,
  callback,
  selector
) {
  "use strict";
  try {
    connect(
      cnString,
      function(mdb, err) {
        if (!err) {
          var collection = mdb.collection(tbl);
          if (selector === null || selector === undefined) {
            collection.find(query).toArray(function(err, docs) {
              if (!err) {
                callback(docs, null);
              } else {
                callback(null, err);
              }
            });
          } else {
            collection.find(query, selector).toArray(function(err, docs) {
              if (!err) {
                callback(docs, null);
              } else {
                callback(null, err);
              }
            });
          }
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

var rcallback = function(err, docs) {
  if (!err) {
    callback(docs, null);
  } else {
    callback(null, err);
  }
};

module.exports.findDocumentWT = function(
  cnString,
  tbl,
  query,
  options,
  callback
) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tbl);
          collection.findOne(query, function(err, docs) {
            db.close();
            if (!err) {
              var res = {
                tableName: tbl,
                result: docs
              };
              callback(res, null);
            } else {
              callback(null, err);
            }
          });
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.findDocument = function(cnString, tbl, query, callback) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tbl);
          collection.findOne(query, function(err, docs) {
            // db.close();
            if (!err) {
              callback(docs, null);
            } else {
              callback(null, err);
            }
          });
        } else {
          callback(null, err);
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.removeDocument = function(cnString, tbl, query, callback) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tbl);
          collection.remove(query, function(err, docs) {
            // db.close();
            if (!err) {
              callback(docs, null);
            } else {
              callback(null, err);
            }
          });
        } else {
          callback(null, err);
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.distinct = function(cnString, tbl, query, callback) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tbl);
          collection.distinct(query, function(err, docs) {
            db.close();
            callback(docs, err);
          });
        } else {
          callback(null, err);
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};

module.exports.getCount = function(cnString, tbl, query, callback) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tbl);
          collection.count(query, function(err, count) {
            db.close();
            callback(count, err);
          });
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};
module.exports.aggregate = function(cnString, tbl, query, callback, selector) {
  "use strict";
  try {
    connect(
      cnString,
      function(db, err) {
        if (!err) {
          var collection = db.collection(tbl);

          collection.aggregate(query).toArray(function(err, docs) {
           
            if (!err) {
              callback(docs, null);
            } else {
              callback(null, err);
            }
          });
        }
      }
    );
  } catch (ex) {
    callback(null, ex);
  }
};
