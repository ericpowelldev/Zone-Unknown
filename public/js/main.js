//on click to new game page
<<<<<<< HEAD
    $('#newGame').on('click', function(){
        event.preventDefault();
        console.log('this');
        location.href = '/newgame';
    });
=======

let userName = " ";

$('#newGame').on('click', function () {
    $.get("/game", function (req, res) {
        res.render("game");
    });
});
>>>>>>> 05f9923aeb72291e37b69a4d587a5d1afd895d7b
// //On Click to continue game page
//     $('#conGame').on('click', function(){
//         $.get("congame", function(req, res){
//             res.render("congame", {
//                 msg: "Continue Game Page!"
//             });
//         });
//     });