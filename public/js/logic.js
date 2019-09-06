let obj = {
    username: ``,
    hasBioScanner: false,
    hasGeoMapper: false,
    hasLazer: false,
    hasJetpack: false,
    hasWaterFilter: false,
    hasO2Scrubber: false,
    warpCount: 0,
    health: 20,
    oxygen: 10,
    fuel: 0,
    planet: 0
}

// LOOK INTO WINDOW.NAME FOR STORING PERSISTENT DATA ACROSS WINDOWS

function start() {
    hideHTML();
    showSM();
    gridChange();
}
start();

function hideHTML() {
    $(`#modalDrop`).hide();
    $(`#grid-sm`).hide();
    $(`#grid-md`).hide();
    $(`#grid-lg`).hide();
}

function showSM() {
    $(`#grid-sm`).show();
}
function showMD() {
    $(`#grid-md`).show();
}
function showLG() {
    $(`#grid-lg`).show();
}

// Continue button on home page
function continueGame() {
    obj.username = $(`#usernameInput`).val().trim().toLowerCase();
    // Check for existing username
    $.get("/api/users/" + obj.username, function (data) {
        // console.log(data);
        if (data) {
            loadSavedGame(data);
        }
        else {
            alert("No save games found under this username!");
        }
    });
}
// Function to load a previously saved game
function loadSavedGame(data) {
    obj = data;
    console.log(obj);
    location.href = `/game`;
}

// New Game button on home page
function newGame() {
    obj.username = $(`#usernameInput`).val().trim().toLowerCase();
    // Check if username is valid
    if (obj.username.length > 2) {
        // Check for existing username
        $.get("/api/users/" + obj.username, function (data) {
            // console.log(data);
            if (data) {
                // Overwrite old save data if username exists
                $.ajax({
                    method: "PUT",
                    url: "/api/users",
                    data: obj
                }).then(function () {
                    createNewGame();
                });
            }
            else {
                // Create a new user and save if username doesn't exist
                $.post("/api/users", obj, function (data) {
                    // console.log(data);
                    createNewGame();
                });
            }
        });
    }
    else {
        alert("Please enter more than 2 characters for your username!");
    }

}
// Function to create a new game
function createNewGame() {
    location.href = `/game`;
}

function goHome() {
    location.href = `/`;
}

function gridMove() {
    if ($(this).data(`reach`) === true) {
        $(this).data(`visited`, true);
        let coordinates = $(this).data(`coordinates`).split(`, `);

        let myX = 0;
        let myY = 0;
        myX = parseInt(coordinates[0]);
        myY = parseInt(coordinates[1]);

        $(`.hex`).each(function (index) {
            let xyCheck = $(this).data(`coordinates`).split(`, `);
            let cX = parseInt(xyCheck[0]);
            let cY = parseInt(xyCheck[1]);

            if (Math.abs(cX - myX) <= 1 && Math.abs(cY - myY) <= 1 && cX + cY !== myX + myY) {
                $(this).data(`reach`, true);
            }
            else {
                $(this).data(`reach`, false);
            }

            if (cX === myX && cY === myY) {
                $(this).data(`current`, true);
            }
            else {
                $(this).data(`current`, false);
            }
        });
        gridChange();
        // saveGame(obj);
    }
    else {
        alert(`You cannot move there!`);
    }
}
function gridChange() {
    $(`.hex`).each(function (index) {

        $(this).removeClass(`hexCurrent`);
        $(this).removeClass(`hexVisitedReach`);
        $(this).removeClass(`hexVisitedNoReach`);
        $(this).removeClass(`hexNotVisitedReach`);
        $(this).removeClass(`hexNotVisitedNoReach`);

        if ($(this).data(`current`) === true) {
            $(this).addClass(`hexCurrent`);
        }
        else if ($(this).data(`visited`) === true && $(this).data(`reach`) === true) {
            $(this).addClass(`hexVisitedReach`);
        }
        else if ($(this).data(`visited`) === true && $(this).data(`reach`) === false) {
            $(this).addClass(`hexVisitedNoReach`);
        }
        else if ($(this).data(`visited`) === false && $(this).data(`reach`) === true) {
            $(this).addClass(`hexNotVisitedReach`);
        }
        else if ($(this).data(`visited`) === false && $(this).data(`reach`) === false) {
            $(this).addClass(`hexNotVisitedNoReach`);
        }
        else {
            console.log(`No change was made for this hex!`);
        }
    });
}

$(document).on("click", "#continue", continueGame);
$(document).on("click", "#newGame", newGame);
$(document).on("click", "#home", goHome);
$(document).on("click", ".hex", gridMove);


//////////////////////////////   UNUSED FUNCTIONS (FOR REFERENCE)   //////////////////////////////



// GET Request to obtain every user in the database
function getAllUsers() {
    $.get("/api/users", function (data) { console.log(data); });
}

// GET Request to obtain user data based on username
function getUser(username) {

    // The standard way of using the GET method
    $.ajax({
        method: "GET",
        url: "/api/users/" + username
    }).then(function (data) {
        console.log(data); // Logs the response from the api (The requested user object is here)
    });

    // A different way of using the GET method
    // $.get("/api/users/" + username, function(data) {
    //     console.log(data);
    // });
}

// POST Request to create a new user using the default logic object
function createUser(userObject) {

    // The standard way of using the POST method
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: userObject
    }).then(function (data) {
        console.log(data); // Logs userObject that was passed in
        location.href = `/game`;
    });

    // A different way of using the POST method
    // $.post("/api/users", userObject, function (data) {
    //     console.log(data);
    // });
}

// PUT Request to save/update the user's game with the current values from our logic object
function saveGame(userObject) {

    // The ONLY way of using the PUT method
    $.ajax({
        method: "PUT",
        url: "/api/users",
        data: userObject
    }).then(function () { // Does not log anything useful

    });
}

// DELETE Request to destroy user data based on username
function deleteUser(username) {

    // The ONLY way of using the DELETE method
    $.ajax({
        method: "DELETE",
        url: "/api/users/" + username
    }).then(function () { // Does not log anything useful

    });
}

//CHAT MODAL for socket-io

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";

