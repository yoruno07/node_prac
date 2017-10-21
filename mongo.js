var MongoClient = require('mongodb').MongoClient,
settings = require('./settings');
MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, function(err, db) {
    if (err) { return console.dir(err); }
    console.log("connected to db");
    db.collection("users", function(err, collection) {
        var docs = [
            {name: "test1", score: 40},
            {name: "test2", score: 80},
            {name: "test3", score: 60}
        ];
        // collection.find({name: "test2"}).toArray(function(err, items){
        //     console.log(items);
        // });
        var stream = collection.find().stream();
        stream.on("data", function(item) {
            console.log(item);
        });
         stream.on("end", function() {
            console.log("finished.");
        });
    });
});