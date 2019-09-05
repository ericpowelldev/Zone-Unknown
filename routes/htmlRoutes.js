var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });

  //on click to new game page
  app.get("/newgame", function (req, res) {
    res.render("newgame", {
      msg: "New Game Page!"
    });
  });

  //On Click to continue game page
  app.get("/congame", function (req, res) {
      res.render("congame", {
        msg: "Continue Game Page!"
      });
    });


  // Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

  //sends html for socket to server
  app.get("/socket-io", function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'socket-io.html'));
  });
};
