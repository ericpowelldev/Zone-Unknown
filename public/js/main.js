//on click to new game page

let userName = " ";

$('#newGame').on('click', function () {
    $.get("/game", function (req, res) {
        res.render("game");
    });
});
// //On Click to continue game page
//     $('#conGame').on('click', function(){
//         $.get("congame", function(req, res){
//             res.render("congame", {
//                 msg: "Continue Game Page!"
//             });
//         });
//     });