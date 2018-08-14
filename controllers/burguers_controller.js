var express = require("express");
var router = express.Router();

//Import burguers model
var burguer = require("../models/burguer.js");

/* ROUTES */

router.get("/", function (req, res) {
    burguer.all(function (data) {
        console.log("this is from router data stuff");
        //console.log(data);
        var hbsObject = {
            burguer: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//to get all added burguers from API
router.get("/api/burguer", function (req, res) {
    burguer.all(function (data) {
        res.json(data);
    });
});

router.post("/api/burguer", function (req, res) {

    burguer.create([
        "burguer_type", "isEaten"
    ], [req.body.burguer_type, req.body.isEaten], function (result) {
            console.log(result);
            res.json({ id: result.insertId });
        });
});

router.put("/api/burguer/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burguer.update({
        isEaten: req.body.isEaten
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
