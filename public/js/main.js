//on click to new game page
    $('#newGame').on('click', function(){
        event.preventDefault();
        console.log('this');
        location.href = '/newgame';
    });

//to use socket-io
   
      
        function openNav() {
            document.getElementById("myNav").style.height = "100%";
        }
        
        function closeNav() {
            document.getElementById("myNav").style.height = "0%";
        }