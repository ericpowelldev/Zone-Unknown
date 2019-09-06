//on click to new game page
    $('#newGame').on('click', function(){
        event.preventDefault();
        console.log('this');
        location.href = '/newgame';
    });
// //On Click to continue game page
//     $('#conGame').on('click', function(){
//         $.get("congame", function(req, res){
//             res.render("congame", {
//                 msg: "Continue Game Page!"
//             });
//         });
//     });