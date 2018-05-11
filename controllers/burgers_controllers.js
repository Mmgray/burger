var express = require("express");

var router = express.Router();
var burger = ("..models/burgers.js");

router.get("/", function(req, res) {
    res.render("index");
})

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data){
       
        res.render("index", { burgers: data});
    });
});

router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        console.log(result);
        return res.status(200).end();
    });
});

module.exports = router;
