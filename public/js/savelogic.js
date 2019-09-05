let currentEvent = [];

function updateItem(itemTrue) {
    app.put("/api/items", function(req, res) {
        db.User.update(
          req.body,
          {
            where: {
              user_name: req.body.user_name,
              include: 
            }
          }).then(function(zu_db) {
          res.json(zu_db);
        });
      });
}

for (let a = 0; a < itemEvents.length; a++) {
    if (currentEvent.id === itemEvents[a].id) {
        let itemTrue = currentEvent.id;
        updateItems(itemTrue);
    };
}