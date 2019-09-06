//////////////////////////////   LOCAL STORAGE USER OBJECT   //////////////////////////////



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
    planet: 1,
    planet1: {
        hex1: {
            hexXY: [0, 2],
            visited: false,
            event: ``
        },
        hex2: {
            hexXY: [1, 2],
            visited: false,
            event: ``
        },
        hex3: {
            hexXY: [2, 2],
            visited: false,
            event: ``
        },
        hex4: {
            hexXY: [-1, 1],
            visited: false,
            event: ``
        },
        hex5: {
            hexXY: [0, 1],
            visited: false,
            event: ``
        },
        hex6: {
            hexXY: [1, 1],
            visited: false,
            event: ``
        },
        hex7: {
            hexXY: [2, 1],
            visited: false,
            event: ``
        },
        hex8: {
            hexXY: [-2, 0],
            visited: false,
            event: ``
        },
        hex9: {
            hexXY: [-1, 0],
            visited: false,
            event: ``
        },
        hex10: {
            hexXY: [0, 0],
            visited: true,
            event: `none`
        },
        hex11: {
            hexXY: [1, 0],
            visited: false,
            event: ``
        },
        hex12: {
            hexXY: [2, 0],
            visited: false,
            event: ``
        },
        hex13: {
            hexXY: [-2, -1],
            visited: false,
            event: ``
        },
        hex14: {
            hexXY: [-1, -1],
            visited: false,
            event: ``
        },
        hex15: {
            hexXY: [0, -1],
            visited: false,
            event: ``
        },
        hex16: {
            hexXY: [1, -1],
            visited: false,
            event: ``
        },
        hex17: {
            hexXY: [-2, -2],
            visited: false,
            event: ``
        },
        hex18: {
            hexXY: [-1, -2],
            visited: false,
            event: ``
        },
        hex19: {
            hexXY: [0, -2],
            visited: false,
            event: ``
        }
    },
    planet2: {
        hex1: {
            hexXY: [0, 3],
            visited: false,
            event: ``
        },
        hex2: {
            hexXY: [1, 3],
            visited: false,
            event: ``
        },
        hex3: {
            hexXY: [2, 3],
            visited: false,
            event: ``
        },
        hex4: {
            hexXY: [3, 3],
            visited: false,
            event: ``
        },
        hex5: {
            hexXY: [-1, 2],
            visited: false,
            event: ``
        },
        hex6: {
            hexXY: [0, 2],
            visited: false,
            event: ``
        },
        hex7: {
            hexXY: [1, 2],
            visited: false,
            event: ``
        },
        hex8: {
            hexXY: [2, 2],
            visited: false,
            event: ``
        },
        hex9: {
            hexXY: [3, 2],
            visited: false,
            event: ``
        },
        hex10: {
            hexXY: [-2, 1],
            visited: false,
            event: ``
        },
        hex11: {
            hexXY: [-1, 1],
            visited: false,
            event: ``
        },
        hex12: {
            hexXY: [0, 1],
            visited: false,
            event: ``
        },
        hex13: {
            hexXY: [1, 1],
            visited: false,
            event: ``
        },
        hex14: {
            hexXY: [2, 1],
            visited: false,
            event: ``
        },
        hex15: {
            hexXY: [3, 1],
            visited: false,
            event: ``
        },
        hex16: {
            hexXY: [-3, 0],
            visited: false,
            event: ``
        },
        hex17: {
            hexXY: [-2, 0],
            visited: false,
            event: ``
        },
        hex18: {
            hexXY: [-1, 0],
            visited: false,
            event: ``
        },
        hex19: {
            hexXY: [0, 0],
            visited: true,
            event: `none`
        },
        hex20: {
            hexXY: [1, 0],
            visited: false,
            event: ``
        },
        hex21: {
            hexXY: [2, 0],
            visited: false,
            event: ``
        },
        hex22: {
            hexXY: [3, 0],
            visited: false,
            event: ``
        },
        hex23: {
            hexXY: [-3, -1],
            visited: false,
            event: ``
        },
        hex24: {
            hexXY: [-2, -1],
            visited: false,
            event: ``
        },
        hex25: {
            hexXY: [-1, -1],
            visited: false,
            event: ``
        },
        hex26: {
            hexXY: [0, -1],
            visited: false,
            event: ``
        },
        hex27: {
            hexXY: [1, -1],
            visited: false,
            event: ``
        },
        hex28: {
            hexXY: [2, -1],
            visited: false,
            event: ``
        },
        hex29: {
            hexXY: [-3, -2],
            visited: false,
            event: ``
        },
        hex30: {
            hexXY: [-2, -2],
            visited: false,
            event: ``
        },
        hex31: {
            hexXY: [-1, -2],
            visited: false,
            event: ``
        },
        hex32: {
            hexXY: [0, -2],
            visited: false,
            event: ``
        },
        hex33: {
            hexXY: [1, -2],
            visited: false,
            event: ``
        },
        hex34: {
            hexXY: [-3, -3],
            visited: false,
            event: ``
        },
        hex35: {
            hexXY: [-2, -3],
            visited: false,
            event: ``
        },
        hex36: {
            hexXY: [-1, -3],
            visited: false,
            event: ``
        },
        hex37: {
            hexXY: [0, -3],
            visited: false,
            event: ``
        }
    },
    planet3: {
        hex1: {
            hexXY: [0, 4],
            visited: false,
            event: ``
        },
        hex2: {
            hexXY: [1, 4],
            visited: false,
            event: ``
        },
        hex3: {
            hexXY: [2, 4],
            visited: false,
            event: ``
        },
        hex4: {
            hexXY: [3, 4],
            visited: false,
            event: ``
        },
        hex5: {
            hexXY: [4, 4],
            visited: false,
            event: ``
        },
        hex6: {
            hexXY: [-1, 3],
            visited: false,
            event: ``
        },
        hex7: {
            hexXY: [0, 3],
            visited: false,
            event: ``
        },
        hex8: {
            hexXY: [1, 3],
            visited: false,
            event: ``
        },
        hex9: {
            hexXY: [2, 3],
            visited: false,
            event: ``
        },
        hex10: {
            hexXY: [3, 3],
            visited: false,
            event: ``
        },
        hex11: {
            hexXY: [4, 3],
            visited: false,
            event: ``
        },
        hex12: {
            hexXY: [-2, 2],
            visited: false,
            event: ``
        },
        hex13: {
            hexXY: [-1, 2],
            visited: false,
            event: ``
        },
        hex14: {
            hexXY: [0, 2],
            visited: false,
            event: ``
        },
        hex15: {
            hexXY: [1, 2],
            visited: false,
            event: ``
        },
        hex16: {
            hexXY: [2, 2],
            visited: false,
            event: ``
        },
        hex17: {
            hexXY: [3, 2],
            visited: false,
            event: ``
        },
        hex18: {
            hexXY: [4, 2],
            visited: false,
            event: ``
        },
        hex19: {
            hexXY: [-3, 1],
            visited: false,
            event: ``
        },
        hex20: {
            hexXY: [-2, 1],
            visited: false,
            event: ``
        },
        hex21: {
            hexXY: [-1, 1],
            visited: false,
            event: ``
        },
        hex22: {
            hexXY: [0, 1],
            visited: false,
            event: ``
        },
        hex23: {
            hexXY: [1, 1],
            visited: false,
            event: ``
        },
        hex24: {
            hexXY: [2, 1],
            visited: false,
            event: ``
        },
        hex25: {
            hexXY: [3, 1],
            visited: false,
            event: ``
        },
        hex26: {
            hexXY: [4, 1],
            visited: false,
            event: ``
        },
        hex27: {
            hexXY: [-4, 0],
            visited: false,
            event: ``
        },
        hex28: {
            hexXY: [-3, 0],
            visited: false,
            event: ``
        },
        hex29: {
            hexXY: [-2, 0],
            visited: false,
            event: ``
        },
        hex30: {
            hexXY: [-1, 0],
            visited: false,
            event: ``
        },
        hex31: {
            hexXY: [0, 0],
            visited: true,
            event: `none`
        },
        hex32: {
            hexXY: [1, 0],
            visited: false,
            event: ``
        },
        hex33: {
            hexXY: [2, 0],
            visited: false,
            event: ``
        },
        hex34: {
            hexXY: [3, 0],
            visited: false,
            event: ``
        },
        hex35: {
            hexXY: [4, 0],
            visited: false,
            event: ``
        },
        hex36: {
            hexXY: [-4, -1],
            visited: false,
            event: ``
        },
        hex37: {
            hexXY: [-3, -1],
            visited: false,
            event: ``
        },
        hex38: {
            hexXY: [-2, -1],
            visited: false,
            event: ``
        },
        hex39: {
            hexXY: [-1, -1],
            visited: false,
            event: ``
        },
        hex40: {
            hexXY: [0, -1],
            visited: false,
            event: ``
        },
        hex41: {
            hexXY: [1, -1],
            visited: false,
            event: ``
        },
        hex42: {
            hexXY: [2, -1],
            visited: false,
            event: ``
        },
        hex43: {
            hexXY: [3, -1],
            visited: false,
            event: ``
        },
        hex44: {
            hexXY: [-4, -2],
            visited: false,
            event: ``
        },
        hex45: {
            hexXY: [-3, -2],
            visited: false,
            event: ``
        },
        hex46: {
            hexXY: [-2, -2],
            visited: false,
            event: ``
        },
        hex47: {
            hexXY: [-1, -2],
            visited: false,
            event: ``
        },
        hex48: {
            hexXY: [0, -2],
            visited: false,
            event: ``
        },
        hex49: {
            hexXY: [1, -2],
            visited: false,
            event: ``
        },
        hex50: {
            hexXY: [2, -2],
            visited: false,
            event: ``
        },
        hex51: {
            hexXY: [-4, -3],
            visited: false,
            event: ``
        },
        hex52: {
            hexXY: [-3, -3],
            visited: false,
            event: ``
        },
        hex53: {
            hexXY: [-2, -3],
            visited: false,
            event: ``
        },
        hex54: {
            hexXY: [-1, -3],
            visited: false,
            event: ``
        },
        hex55: {
            hexXY: [0, -3],
            visited: false,
            event: ``
        },
        hex56: {
            hexXY: [1, -3],
            visited: false,
            event: ``
        },
        hex57: {
            hexXY: [-4, -4],
            visited: false,
            event: ``
        },
        hex58: {
            hexXY: [-3, -4],
            visited: false,
            event: ``
        },
        hex59: {
            hexXY: [-2, -4],
            visited: false,
            event: ``
        },
        hex60: {
            hexXY: [-1, -4],
            visited: false,
            event: ``
        },
        hex61: {
            hexXY: [0, -4],
            visited: false,
            event: ``
        }
    }
}



//////////////////////////////   TESTING   //////////////////////////////







//////////////////////////////   PLANET GENERATION   //////////////////////////////



function generatePlanets() {

}



//////////////////////////////   HOME PAGE FUNCTIONS   //////////////////////////////



// Continue button on home page
function continueGame() {
    obj.username = $(`#usernameInput`).val().trim().toLowerCase();
    localStorage.setItem('username', obj.username);

    // Check if username is valid
    if (obj.username.length > 2 && obj.username.length < 26) {
        // Check for existing username
        $.get("/api/users/" + obj.username, function (data) {
            // console.log(data);
            if (data) {
                location.href = `/game`;
            }
            else {
                alert("No save games found under this username!");
            }
        });
    }
}

// New Game button on home page
function newGame() {
    obj.username = $(`#usernameInput`).val().trim().toLowerCase();
    localStorage.setItem('username', obj.username);

    // Check if username is valid
    if (obj.username.length > 2 && obj.username.length < 26) {
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
                    localStorage.clear();
                    localStorage.setItem('save', JSON.stringify(obj));
                    location.href = `/game`;
                });
            }
            else {
                // Create a new user and save if username doesn't exist
                $.post("/api/users", obj, function (data) {
                    // console.log(data);
                    localStorage.setItem('save', JSON.stringify(obj));
                    location.href = `/game`;
                });
            }
        });
    }
    else {
        alert("Please enter a username between 3 & 25 characters!");
    }

}

$(document).on("click", "#continue", continueGame);
$(document).on("click", "#newGame", newGame);



//////////////////////////////   GAME PAGE FUNCTIONS   //////////////////////////////



function start() {
    loadSavedGame()
    hideHTML();
    showPlanet();
    gridChange();
}

// Function to load a previously saved game
function loadSavedGame() {
    let newObj = JSON.parse(localStorage.getItem('save'));
    console.log(newObj);
    if (newObj.username === localStorage.getItem('username')) {
        newObj = obj;
    }
    else {
        alert("No save games found under this username!");
        location.href = `/`;
    }
}

function hideHTML() {
    $(`#modalDrop`).hide();
}

function showPlanet() {
    if (obj.planet === 1) {
        $(`#grid-sm`).show();
        $(`#grid-md`).hide();
        $(`#grid-lg`).hide();
    }
    else if (obj.planet === 2) {
        $(`#grid-sm`).hide();
        $(`#grid-md`).show();
        $(`#grid-lg`).hide();
    }
    else if (obj.planet === 3) {
        $(`#grid-sm`).hide();
        $(`#grid-md`).hide();
        $(`#grid-lg`).show();
    }
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
            console.log(`No change was made for this hex...`);
        }
    });
}

$(document).ready(function () {
    // console.log(`HREF: ` + window.location.href);
    // console.log(`HOSTNAME: ` + window.location.hostname);
    // console.log(`PATHNAME: ` + window.location.pathname);
    if (window.location.pathname === `/`) {

    }
    else if (window.location.pathname === `/game`) {
        start();
    }
    else {
        console.log(`PATHNAME: ` + window.location.pathname);
    }
});
$(document).on("click", "#home", goHome);
$(document).on("click", ".hex", gridMove);



//////////////////////////////   CHAT FUNCTIONS (SOCKET-IO)   //////////////////////////////



function openSocket() {
    document.getElementById("myNav").style.height = "100%";
    var userName = "";
    getMessages();
    //prompt for user to get name
    var userInfo = prompt("Please enter your username", "Username Here")
    if (userInfo != null) {
        userName = userInfo;
    }
    console.log(userInfo);
    //connects to socket, sends to server and displays chat message
    var socket = io.connect();
    $("form#chatForm").submit(function (e) {
        e.preventDefault();

        socket.emit("send message", $(this).find("#msg_text").val(), userName, function () {
            $("form#chatForm #msg_text").val("");
        });
    });
    socket.on("update messages", function (msg) {
        var final_message = $("<p />").text(msg);
        $("#history").append(final_message);

        console.log(msg);
        saveMessage(msg);
    });

    //alters message and user into an object and runs post
    function saveMessage(msg) {
        var newMessage = {
            message: msg,
            user: userName
        };
        submitMessage(newMessage);
    };
    //post function for message object with username
    function submitMessage(newMessage) {
        console.log(newMessage);
        $.ajax({
            url: "/api/messages",
            type: "POST",
            data: newMessage
        }).then((response) => {
            console.log(response);
        });
    };
    //get function to grab all messages in the database and display in the chatroom
    function getMessages() {

        $.ajax({
            method: "GET",
            url: "/api/messages/",
            accept: "application/json"
        }).then(function (data) {
            console.log("This Data: " + data);
            messages = data;
            if (!messages || !messages.length) {
                displayEmpty();
            } else {
                for (var i = 0; i < messages.length; i++) {
                    var final_message = $("<p />").text(messages[i].message);
                    $("#history").append(final_message);
                }
            }
        });
    }
    //displays no chat history if there is none in the database
    function displayEmpty() {
        var noMessages = "******No Chat History******"
        var final_message = $("<p />").text(noMessages);
        $("#history").append(final_message);
    }
}

function closeSocket() {
    document.getElementById("myNav").style.height = "0%";
}



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



function saveObj() {
    localStorage.setItem('save', JSON.stringify(obj)); // Save the data based on the obj variable and turn it into one large string
}
function loadObj() {
    obj = JSON.parse(localStorage.getItem('save')); // Replace the obj variable with the loaded values by parsing the large string
}
function loadStoreObj() {
    let newObj = JSON.parse(localStorage.getItem('save')); // Parse the string back into a new object
}
function deleteSave() {
    localStorage.clear(); // Delete all save data
}