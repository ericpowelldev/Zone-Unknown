// dependencies
var db = require("../models");
var path = require("path");
// routes
module.exports = function(app2){
    //sends html for socket to server
    app2.get("/socket-io", function (req, res) {
        res.sendFile(path.join(__dirname, '../public', 'socket-io.html'));
    })
    //grabs all messages to display to chat room
    app2.get("/api/messages", function(req, res){
        db.Message.findAll({})
        .then(function(response){
            res.json(response);
        });
    });
    //posts and saves all messages for chat room
    app2.post("/api/messages", function(req, res){
        console.log(req.body);
        db.Message.create({
            message: req.body.message         
        }).then(function(response){
            res.json(response);
        });
    });
};