//////////////////////////////   LOCAL STORAGE USER OBJECT   //////////////////////////////
let evn = require("/events.js");


let obj = {
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
    planet1: [
        {
            hexXY: [0, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, 0],
            visited: true,
            event: `none`
        },
        {
            hexXY: [1, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, -2],
            visited: false,
            event: ``
        }
    ],
    planet2: [
        {
            hexXY: [0, 3],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, 3],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 3],
            visited: false,
            event: ``
        },
        {
            hexXY: [3, 3],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [3, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [3, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-3, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, 0],
            visited: true,
            event: `none`
        },
        {
            hexXY: [1, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [3, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [-3, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-3, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-3, -3],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, -3],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, -3],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, -3],
            visited: false,
            event: ``
        }
    ],
    planet3: [
        {
            hexXY: [0, 4],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, 4],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 4],
            visited: false,
            event: ``
        },
        {
            hexXY: [3, 4],
            visited: false,
            event: ``
        },
        {
            hexXY: [4, 4],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, 3],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, 3],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, 3],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 3],
            visited: false,
            event: ``
        },
        {
            hexXY: [3, 3],
            visited: false,
            event: ``
        },
        {
            hexXY: [4, 3],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [3, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [4, 2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-3, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [3, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [4, 1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-4, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [-3, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, 0],
            visited: true,
            event: `none`
        },
        {
            hexXY: [1, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [3, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [4, 0],
            visited: false,
            event: ``
        },
        {
            hexXY: [-4, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-3, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [3, -1],
            visited: false,
            event: ``
        },
        {
            hexXY: [-4, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-3, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [2, -2],
            visited: false,
            event: ``
        },
        {
            hexXY: [-4, -3],
            visited: false,
            event: ``
        },
        {
            hexXY: [-3, -3],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, -3],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, -3],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, -3],
            visited: false,
            event: ``
        },
        {
            hexXY: [1, -3],
            visited: false,
            event: ``
        },
        {
            hexXY: [-4, -4],
            visited: false,
            event: ``
        },
        {
            hexXY: [-3, -4],
            visited: false,
            event: ``
        },
        {
            hexXY: [-2, -4],
            visited: false,
            event: ``
        },
        {
            hexXY: [-1, -4],
            visited: false,
            event: ``
        },
        {
            hexXY: [0, -4],
            visited: false,
            event: ``
        }
    ]
}



//////////////////////////////   TESTING   //////////////////////////////







//////////////////////////////   PLANET GENERATION   //////////////////////////////



function generatePlanets() {
    generatePlanet1();
}

function rdmInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePlanet1() {

    // Declaring variables we need to generate a planet
    let psHPCount, nsHPCount, psO2Count, nsO2Count;
    let fuelCount, warpCount;
    let eventArray = [`psHP`, `nsHP`, `psO2`, `nsO2`];
    let numArray = [];

    // Setting default random event counts for this specific planet
    psHPCount = 5;
    nsHPCount = 4;
    psO2Count = 5;
    nsO2Count = 4;

    // Loop to generate random events for each hex
    for (let i = 0; i < obj.planet1.length; i++) {
        if (i !== 9) {
            let rdmEvent = eventArray[Math.floor(Math.random() * eventArray.length)];

            if (rdmEvent === `psHP` && psHPCount > 0) {
                obj.planet1[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                psHPCount--;
            }
            else if (rdmEvent === `nsHP` && nsHPCount > 0) {
                obj.planet1[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                nsHPCount--;
            }
            else if (rdmEvent === `dHP` && dHPCount > 0) {
                obj.planet1[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                dHPCount--;
            }
            else if (rdmEvent === `psO2` && psO2Count > 0) {
                obj.planet1[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                psO2Count--;
            }
            else if (rdmEvent === `nsO2` && nsO2Count > 0) {
                obj.planet1[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                nsO2Count--;
            }
            else if (rdmEvent === `dO2` && dO2Count > 0) {
                obj.planet1[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                dO2Count--;
            }
            else {
                i--;
            }
        }
        else {
            obj.planet1[i].event = `ship`;
            console.log(`SET EVENT ADDED "ship" to HEX${i}`);
        }
    }

    // Setting default set event counts for this specific planet
    fuelCount = 3;
    warpCount = 1;

    // Loop to generate random placements for the set events
    for (let e = 0; e < (fuelCount + warpCount); e++) {
        let num = rdmInt(0, 18);

        if (num !== 4 && num !== 5 && num !== 8 && num !== 9 && num !== 10 && num !== 13 && num !== 14 && !numArray.includes(num)) {
            numArray.push(num);
        }
        else {
            e--;
        }
    }

    // Loop to assign set events using the random number array
    for (let f = 0; f < numArray.length; f++) {
        if (fuelCount > 0) {
            obj.planet1[numArray[f]].event = `fuel`;
            console.log(`SET EVENT ADDED "fuel" to HEX${numArray[f]}`);
            fuelCount--;
        }
        else if (warpCount > 0) {
            obj.planet1[numArray[f]].event = `warp`;
            console.log(`SET EVENT ADDED "warp" to HEX${numArray[f]}`);
            warpCount--;
        }
    }

    // Generate the next planet
    generatePlanet2();
}

function generatePlanet2() {

    // Declaring variables we need to generate a planet
    let psHPCount, nsHPCount, psO2Count, nsO2Count;
    let fuelCount, warpCount;
    let eventArray = [`psHP`, `nsHP`, `psO2`, `nsO2`];
    let numArray = [];

    // Setting default random event counts for this specific planet
    psHPCount = 9;
    nsHPCount = 9;
    psO2Count = 9;
    nsO2Count = 9;

    // Loop to generate random events for each hex
    for (let i = 0; i < obj.planet2.length; i++) {
        if (i !== 18) {
            let rdmEvent = eventArray[Math.floor(Math.random() * eventArray.length)];

            if (rdmEvent === `psHP` && psHPCount > 0) {
                obj.planet2[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                psHPCount--;
            }
            else if (rdmEvent === `nsHP` && nsHPCount > 0) {
                obj.planet2[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                nsHPCount--;
            }
            else if (rdmEvent === `dHP` && dHPCount > 0) {
                obj.planet2[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                dHPCount--;
            }
            else if (rdmEvent === `psO2` && psO2Count > 0) {
                obj.planet2[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                psO2Count--;
            }
            else if (rdmEvent === `nsO2` && nsO2Count > 0) {
                obj.planet2[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                nsO2Count--;
            }
            else if (rdmEvent === `dO2` && dO2Count > 0) {
                obj.planet2[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                dO2Count--;
            }
            else {
                i--;
            }
        }
        else {
            obj.planet2[i].event = `ship`;
            console.log(`SET EVENT ADDED "ship" to HEX${i}`);
        }
    }

    // Setting default set event counts for this specific planet
    fuelCount = 6;
    warpCount = 1;

    // Loop to generate random placements for the set events
    for (let e = 0; e < (fuelCount + warpCount); e++) {
        let num = rdmInt(0, 36);

        if (num !== 11 && num !== 12 && num !== 17 && num !== 18 && num !== 19 && num !== 24 && num !== 25 && !numArray.includes(num)) {
            numArray.push(num);
        }
        else {
            e--;
        }
    }

    // Loop to assign set events using the random number array
    for (let f = 0; f < numArray.length; f++) {
        if (fuelCount > 0) {
            obj.planet2[numArray[f]].event = `fuel`;
            console.log(`SET EVENT ADDED "fuel" to HEX${numArray[f]}`);
            fuelCount--;
        }
        else if (warpCount > 0) {
            obj.planet2[numArray[f]].event = `warp`;
            console.log(`SET EVENT ADDED "warp" to HEX${numArray[f]}`);
            warpCount--;
        }
    }

    // Generate the next planet
    generatePlanet3();
}

function generatePlanet3() {

    // Declaring variables we need to generate a planet
    let psHPCount, nsHPCount, psO2Count, nsO2Count;
    let fuelCount, warpCount;
    let eventArray = [`psHP`, `nsHP`, `psO2`, `nsO2`];
    let numArray = [];

    // Setting default random event counts for this specific planet
    psHPCount = 14;
    nsHPCount = 16;
    psO2Count = 14;
    nsO2Count = 16;

    // Loop to generate random events for each hex
    for (let i = 0; i < obj.planet3.length; i++) {
        if (i !== 30) {
            let rdmEvent = eventArray[Math.floor(Math.random() * eventArray.length)];

            if (rdmEvent === `psHP` && psHPCount > 0) {
                obj.planet3[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                psHPCount--;
            }
            else if (rdmEvent === `nsHP` && nsHPCount > 0) {
                obj.planet3[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                nsHPCount--;
            }
            else if (rdmEvent === `dHP` && dHPCount > 0) {
                obj.planet3[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                dHPCount--;
            }
            else if (rdmEvent === `psO2` && psO2Count > 0) {
                obj.planet3[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                psO2Count--;
            }
            else if (rdmEvent === `nsO2` && nsO2Count > 0) {
                obj.planet3[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                nsO2Count--;
            }
            else if (rdmEvent === `dO2` && dO2Count > 0) {
                obj.planet3[i].event = rdmEvent;
                console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                dO2Count--;
            }
            else {
                i--;
            }
        }
        else {
            obj.planet3[i].event = `ship`;
            console.log(`SET EVENT ADDED "ship" to HEX${i}`);
        }
    }

    // Setting default set event counts for this specific planet
    fuelCount = 10;
    warpCount = 2;

    // Loop to generate random placements for the set events
    for (let e = 0; e < (fuelCount + warpCount); e++) {
        let num = rdmInt(0, 60);

        if (num !== 21 && num !== 22 && num !== 29 && num !== 30 && num !== 31 && num !== 38 && num !== 39 && !numArray.includes(num)) {
            numArray.push(num);
        }
        else {
            e--;
        }
    }

    // Loop to assign set events using the random number array
    for (let f = 0; f < numArray.length; f++) {
        if (fuelCount > 0) {
            obj.planet3[numArray[f]].event = `fuel`;
            console.log(`SET EVENT ADDED "fuel" to HEX${numArray[f]}`);
            fuelCount--;
        }
        else if (warpCount > 0) {
            obj.planet3[numArray[f]].event = `warp`;
            console.log(`SET EVENT ADDED "warp" to HEX${numArray[f]}`);
            warpCount--;
        }
    }

    // Save the planets
    localStorage.setItem('save', JSON.stringify(obj));
}



//////////////////////////////   HOME PAGE FUNCTIONS   //////////////////////////////



// Continue button on home page
function continueGame() {
    let username = $(`#usernameInput`).val().trim().toLowerCase();

    // Check if username is valid
    if (username.length > 2 && username.length < 26) {
        localStorage.setItem('username', username);
        location.href = `/game`;
    }
}

// New Game button on home page
function newGame() {
    let username = $(`#usernameInput`).val().trim().toLowerCase();

    // Check if username is valid
    if (username.length > 2 && username.length < 26) {
        let newBool = confirm(`Are you sure you want to start a new game? This will erase any previous progress.`);

        if (newBool) {
            generatePlanets();
            localStorage.setItem('username', username);
            localStorage.setItem('save', JSON.stringify(obj));
            location.href = `/game`;
        }
    }
    else {
        alert("Please enter a username between 3 & 25 characters!");
    }
}

$(document).on("click", "#continue", continueGame);
$(document).on("click", "#newGame", newGame);



//////////////////////////////   GAME PAGE FUNCTIONS   //////////////////////////////

let chatUser = "";
chatUser = localStorage.getItem('username');
console.log(chatUser);

function start() {
    loadSavedGame()
    hideHTML();
    showPlanet();
    gridChange();
    getMessages();
}

// Function to load a previously saved game
function loadSavedGame() {
    obj = JSON.parse(localStorage.getItem('save'));
    console.log(obj);
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
function getEvent(hexEvent) {
    if (hexEvent === "psHP") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).append(evn.psHpEvents[rdmInt(0, evn.psHpEvents.length)].event);
        $(`#mb1`).append("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.health += 2;
    }
    else if (hexEvent === "nsHP") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).append(evn.nsHpEvents[rdmInt(0, evn.nsHpEvents.length)].event);
        $(`#mb1`).append("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.health -= 4;
    }
    else if (hexEvent === "psO2") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).append(evn.psO2Events[rdmInt(0, evn.psO2Events.length)].event);
        $(`#mb1`).append("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.oxygen += 2;
    }
    else if (hexEvent === "nsO2") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).append(evn.nsO2Events[rdmInt(0, evn.nsO2Events.length)].event);
        $(`#mb1`).append("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.oxygen -= 4;
    }
    else if (hexEvent === "ship") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).append("You're back at your ship, what would you like to do now?");
        $(`#mb1`).append("Save and Re-fuel");
        $(`#mb2`).append("Save and take off for another planet");
        $(`#mb3`).append("Continue");
        obj.fuel += 3;
    }
    else if (hexEvent === "fuel") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).append(evn.psFuelEvents[rdmInt(0, evn.psFuelEvents.length)].event);
        $(`#mb1`).append("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.fuel += 3;
    }
    else if (hexEvent === "warp") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).append(evn.warpDriveEvents[obj.warpCount].event);
        $(`#mb1`).append("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.warpCount++;
    }
    
}

function gridMove() {
    if ($(this).data(`reach`) === true) {
        $(this).data(`visited`, true);
        let coordinates = $(this).data(`coordinates`).split(`, `);
        let coords = $(this).data(`coordinates`);

        let myX = 0;
        let myY = 0;
        myX = parseInt(coordinates[0]);
        myY = parseInt(coordinates[1]);

        if (planet === 1) {
            for (let i = 0; i < planet1.length; i++) {
                if (planet1[i].hexXY === coords) {
                    planet1[i].visited = true;
                    getEvent(planet1[i].event);
                }
            }
        }

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
$(document).on("click", ".modalButton", gameAction);



//////////////////////////////   CHAT FUNCTIONS (SOCKET-IO)   //////////////////////////////


//get function to grab all messages in the database and display in the chatroom
function getMessages() {

    $.ajax({
        method: "GET",
        url: "/api/messages/",
        accept: "application/json"
    }).then(function (data) {
        // console.log("This Data: " + data);
        messages = data;
        if (!messages || !messages.length) {
            displayEmpty();
        } else {
            for (var i = 0; i < messages.length; i++) {
                var final_message = $("<p />").text(messages[i].message);
                $("#history").append(final_message);
            }
        }
        onRowAdded();
    });
}

//displays no chat history if there is none in the database
function displayEmpty() {
    var noMessages = "******No Chat History******"
    var final_message = $("<p />").text(noMessages);
    $("#history").append(final_message);
}

//connects to socket, sends to server and displays chat message
var socket = io.connect();
$("form#chatForm").submit(function (e) {
    e.preventDefault();

    socket.emit("send message", $(this).find("#msg_text").val(), chatUser, function () {
        $("form#chatForm #msg_text").val("");
    });
});
socket.on("update messages", function (msg) {
    var final_message = $("<p />").text(msg);
    $("#history").append(final_message);

    console.log(msg);
    saveMessage(msg);
    onRowAdded();
});

//alters message and user into an object and runs post
function saveMessage(msg) {
    var newMessage = {
        message: msg,
        user: chatUser
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

//scrolling function
onRowAdded = function () {
    $('#history').animate({ scrollTop: $('#history').prop('scrollHeight') });
};

///opens modal for chat

function openSocket() {
    document.getElementById("myNav").style.height = "100%";
}

//closes modal for chat

function closeSocket() {
    document.getElementById("myNav").style.height = "0%";
}

//////////////////////////////////////////////// STATUS MODAL ////////////////////////////////////////

//opens status modal

function openStatus() {
    document.getElementById("myMenu").style.height = "100%";
}

//closes modal for status

function closeStatus() {
    document.getElementById("myMenu").style.height = "0%";
}



//////////////////////////////   UNUSED FUNCTIONS (FOR REFERENCE)   //////////////////////////////



// // GET Request to obtain every user in the database
// function getAllUsers() {
//     $.get("/api/users", function (data) { console.log(data); });
// }

// // GET Request to obtain user data based on username
// function getUser(username) {

//     // The standard way of using the GET method
//     $.ajax({
//         method: "GET",
//         url: "/api/users/" + username
//     }).then(function (data) {
//         console.log(data); // Logs the response from the api (The requested user object is here)
//     });

//     // A different way of using the GET method
//     // $.get("/api/users/" + username, function(data) {
//     //     console.log(data);
//     // });
// }

// // POST Request to create a new user using the default logic object
// function createUser(userObject) {

//     // The standard way of using the POST method
//     $.ajax({
//         method: "POST",
//         url: "/api/users",
//         data: userObject
//     }).then(function (data) {
//         console.log(data); // Logs userObject that was passed in
//         location.href = `/game`;
//     });

//     // A different way of using the POST method
//     // $.post("/api/users", userObject, function (data) {
//     //     console.log(data);
//     // });
// }

// // PUT Request to save/update the user's game with the current values from our logic object
// function saveGame(userObject) {

//     // The ONLY way of using the PUT method
//     $.ajax({
//         method: "PUT",
//         url: "/api/users",
//         data: userObject
//     }).then(function () { // Does not log anything useful

//     });
// }

// // DELETE Request to destroy user data based on username
// function deleteUser(username) {

//     // The ONLY way of using the DELETE method
//     $.ajax({
//         method: "DELETE",
//         url: "/api/users/" + username
//     }).then(function () { // Does not log anything useful

//     });
// }



// function saveObj() {
//     localStorage.setItem('save', JSON.stringify(obj)); // Save the data based on the obj variable and turn it into one large string
// }
// function loadObj() {
//     obj = JSON.parse(localStorage.getItem('save')); // Replace the obj variable with the loaded values by parsing the large string
// }
// function loadStoreObj() {
//     let newObj = JSON.parse(localStorage.getItem('save')); // Parse the string back into a new object
// }
// function deleteSave() {
//     localStorage.clear(); // Delete all save data
// }



// // Continue button on home page
// function continueGame() {
//     obj.username = $(`#usernameInput`).val().trim().toLowerCase();
//     localStorage.setItem('username', obj.username);

//     // Check if username is valid
//     if (obj.username.length > 2 && obj.username.length < 26) {
//         // Check for existing username
//         $.get("/api/users/" + obj.username, function (data) {
//             // console.log(data);
//             if (data) {
//                 location.href = `/game`;
//             }
//             else {
//                 alert("No save games found under this username!");
//             }
//         });
//     }
// }

// // New Game button on home page
// function newGame() {
//     obj.username = $(`#usernameInput`).val().trim().toLowerCase();
//     localStorage.setItem('username', obj.username);

//     // Check if username is valid
//     if (obj.username.length > 2 && obj.username.length < 26) {
//         // Check for existing username
//         $.get("/api/users/" + obj.username, function (data) {
//             // console.log(data);
//             if (data) {
//                 // Overwrite old save data if username exists
//                 $.ajax({
//                     method: "PUT",
//                     url: "/api/users",
//                     data: obj
//                 }).then(function () {
//                     localStorage.clear();
//                     localStorage.setItem('save', JSON.stringify(obj));
//                     location.href = `/game`;
//                 });
//             }
//             else {
//                 // Create a new user and save if username doesn't exist
//                 $.post("/api/users", obj, function (data) {
//                     // console.log(data);
//                     localStorage.setItem('save', JSON.stringify(obj));
//                     location.href = `/game`;
//                 });
//             }
//         });
//     }
//     else {
//         alert("Please enter a username between 3 & 25 characters!");
//     }
// }