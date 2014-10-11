module.exports = function (app, db, mongojs) {
 

    app.get("/applications", function (req, res) {
        db.applications.find(function (err, docs) {
            res.json(docs);
        });
    });

    app.post("/applications", function (req, res) {
        
        var svc = req.body;
        console.log("Create:" + req.body.name);
        db.applications.insert(req.body, function (err, doc) {
            res.json(doc);
        });
    });

    app.get("/applications/:id", function (req, res) {
        var id = req.params.id;
        db.applications.findOne({ _id: mongojs.ObjectId(id) }, function (err, doc) {
            console.log(doc);
            res.json(doc);
        });
    });

    app.put("/applications/:id", function (req, res) {
        db.applications.findAndModify({
            query: { _id: mongojs.ObjectId(req.params.id) },
            update: { $set: { name: req.body.name } },
            new: true
        }, function (err, doc, lastErrorObject) {
            res.json(doc);
        });
    });

    app.delete("/applications/:id", function (req, res) {
        var id = req.params.id;
        console.log("Delete:" + id);
        
        db.applications.remove({ _id: mongojs.ObjectId(id) }, function (err, doc) {

            res.json(doc);
        });
    });


}