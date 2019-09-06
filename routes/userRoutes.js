app.get("/api/user/:id", function (req, res) {
    db.User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(function (zu_db) {
            res.json(zu_db);
        });
});

app.put("/api/user/:id", function (req, res) {
    let userToUpdate = req.params.id;
    db.User.update({
        userObject
    },
        {
            where: {
                id: userToUpdate
            }
        }).then(function (zu_db) {
            res.json(zu_db);
        });

});

// app.put("/api/user/:id/piece", function (req, res) {
//     let userToUpdate = req.params.id;
//     let piece;

//     for (let b = 0; b < warpDriveEvents.length; b++) {
//         if (req.body.piece === warpDriveEvents[b].piece) {
//             piece = warpDriveEvents[b].piece;
//         };
//     }

//     db.User.update({
//         [piece]: true
//     },
//         {
//             where: {
//                 id: userToUpdate
//             }
//         }).then(function (zu_db) {
//             res.json(zu_db);
//         });

// });