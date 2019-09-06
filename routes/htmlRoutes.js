var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });

  // Load game page
  app.get("/game", function (req, res) {
    res.render("game");
  });

  // Load example page and pass in an example by id
  app.get("/congame/:user_name", function (req, res) {
    db.Example.findOne({ where: { user_name: req.params.user_name} }).then(function (response) {
      res.render("congame", {
        saved_game: response
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

  //sends html for socket to server
  app.get("/socket-io", function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'socket-io.html'));
  });
};
