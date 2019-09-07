//////////////////////////////   LOCAL STORAGE USER OBJECT   //////////////////////////////

let obj = {
    hasBioScanner: false,
    hasGeoMapper: false,
    hasLazer: false,
    hasJetpack: false,
    hasWaterFilter: false,
    hasO2Scrubber: false,
    warpCount: 0,
    health: 12,
    oxygen: 12,
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
    psHPCount = 6;
    nsHPCount = 3;
    psO2Count = 6;
    nsO2Count = 3;

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
    psHPCount = 10;
    nsHPCount = 8;
    psO2Count = 10;
    nsO2Count = 8;

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
    psHPCount = 15;
    nsHPCount = 15;
    psO2Count = 15;
    nsO2Count = 15;

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
    statusCheck();
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
        $(`#modalContainer p`).text(psHpEvents[rdmInt(0, psHpEvents.length - 1)].event);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.health += 2;
    }
    else if (hexEvent === "nsHP") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).text(nsHpEvents[rdmInt(0, nsHpEvents.length - 1)].event);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.health -= 4;
    }
    else if (hexEvent === "psO2") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).text(psO2Events[rdmInt(0, psO2Events.length - 1)].event);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.oxygen += 3;
    }
    else if (hexEvent === "nsO2") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).text(nsO2Events[rdmInt(0, nsO2Events.length - 1)].event);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.oxygen -= 4;
    }
    else if (hexEvent === "ship") {
        $(`#modalDrop`).show();
        $(`#but2`).show();
        $(`#but3`).show();
        $(`#modalContainer p`).text("You're back at your ship, what would you like to do now?");
        $(`#mb1`).text("Save and replenish O2");
        $(`#mb2`).text("Save and advance to next planet");
        $(`#mb3`).text("Continue");
    }
    else if (hexEvent === "fuel") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).text(psFuelEvents[rdmInt(0, psFuelEvents.length - 1)].event);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        obj.fuel += 1;
    }
    else if (hexEvent === "warp") {
        $(`#modalDrop`).show();
        $(`#modalContainer p`).text(warpDriveEvents[obj.warpCount].event);
        $(`#mb1`).text("Continue");
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

        if (coords === "0, 0") {
            getEvent("ship");
        }

        if (obj.planet === 1) {
            for (let i = 0; i < obj.planet1.length; i++) {
                if (obj.planet1[i].hexXY[0] + ", " + obj.planet1[i].hexXY[1] === coords) {
                    obj.oxygen -= 1;
                    if (obj.planet1[i].visited === true) {
                    }
                    else {
                        obj.planet1[i].visited = true;
                        getEvent(obj.planet1[i].event);
                    }
                }
            }
        }
        else if (obj.planet === 2) {
            for (let i = 0; i < obj.planet2.length; i++) {
                if (obj.planet2[i].hexXY[0] + ", " + obj.planet2[i].hexXY[1] === coords) {
                    obj.oxygen -= 1;
                    if (obj.planet2[i].visited === true) {
                    }
                    else {
                        obj.planet2[i].visited = true;
                        getEvent(obj.planet2[i].event);
                    }
                }
            }
        }
        else if (obj.planet === 3) {
            for (let i = 0; i < obj.planet3.length; i++) {
                if (obj.planet3[i].hexXY[0] + ", " + obj.planet3[i].hexXY[1] === coords) {
                    obj.oxygen -= 1;
                    if (obj.planet3[i].visited === true) {
                    }
                    else {
                        obj.planet3[i].visited = true;
                        getEvent(obj.planet3[i].event);
                    }
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
    statusCheck();
}

function gameAction() {
    let butText = $(this).children().text();
    console.log(butText);
    if (butText === "Save and replenish O2") {
        if (obj.fuel > 0) {
            obj.oxygen += 8;
            obj.fuel--;
            localStorage.setItem('save', JSON.stringify(obj));
            $("#modalDrop").hide();
        }
        else {
            alert(`You need at least 1 fuel to replenish your oxygen`); 
        }
    }
    else if (butText === "Save and advance to next planet") {
        if (obj.warpCount > obj.planet - 1) {
        obj.oxygen = 12;
        localStorage.setItem('save', JSON.stringify(obj));
        $("#modalDrop").hide();
        obj.planet++;
        showPlanet();
        }
        else {
            alert("You must have the warp piece to continue to the next planet")
        }
    }
    else if (butText === "Continue") {
        $("#modalDrop").hide();
    }
    winLose();
    statusCheck();
}

function winLose() {
    if (obj.oxygen <= 0 || obj.health <= 0) {
        alert("You have died!");
        location.href = "/";
    }
    if (obj.warpCount >= 4) {
        alert("You have survived! Congratulations on getting back home!");
        location.href = "/";
    }
}

function statusCheck() {
    $(`#health`).text(`HEALTH  [ ${obj.health} ]`);
    $(`#oxygen`).text(`OXYGEN  [ ${obj.oxygen} ]`);
    $(`#fuel`).text(`FUEL  [ ${obj.fuel} ]`);
    $(`#statHealth`).text(`HEALTH  [ ${obj.health} ]`);
    $(`#statOxygen`).text(`OXYGEN  [ ${obj.oxygen} ]`);
    $(`#statFuel`).text(`FUEL  [ ${obj.fuel} ]`);
    $(`#statWarp`).text(`WARP PIECES  [ ${obj.warpCount} ]`);
    $(`#statPlanet`).text(`CURRENT PLANET  [ ${obj.planet} ]`);
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



//Events
let psHpEvents = [
    {
        event: "You discover a bush filled with bean pods, you've seen these before and know they are healthy (Gain HP)."
    },
    {
        event: "You happen upon a small lake. The water clearly doesn't look safe to drink. You continue on.",
        eventWaterFilter: "You happen upon a small lake. Your Water-Filter should be able to make this drinkable (Gain HP)."
    },
    {
        event: "You find a stream of crystal clear water that emits a golden glow. You drink and feel instantly restored (Gain HP)."
    },
    {
        event: "Searching an abandoned vehicle you find a first aid kit (Gain HP)."
    },
    {
        event: "You discover a thick patch of berries and gorge yourself (Gain HP)."
    },
    {
        event: "You roll over a rock and find some fat grubs, bottoms up (Gain HP)."
    },
    {
        event: "You identify a medicinal plant you learned about in the academy (Gain HP)."
    },
    {
        event: "You come across an old outpost, and find medical supplies inside (Gain HP)."
    },
    {
        event: "You see an abandoned outpost on a high rocky cliff, but you can't find any way up and have to keep moving.",
        eventJetpack: "You see an abandoned outpost on a high rocky cliff. Time to fly (Gain HP)."
    },
    {
        event: "You watch a predator chase down and kill a large game animal. If only you had a way to scare off the predator.",
        eventLazer: "You watch a predator chase down and kill a large game animal. You whip out your lazer and scare the predator off to take it as your own (Gain HP)."
    }
];

let nsHpEvents = [
    {
        event: "You stumble upon a hive of viscious space bees, they sting you through your space suit somehow (Lose HP).",
        eventLazer: "You stumble upon a hive of viscious space bees, luckly you have a lazer (Lose a small amount of HP)."
    },
    {
        event: "You are ambushed by space pirates who demand tribute to let you pass (Lose HP).",
        eventLazer: "You are ambushed by space pirates who demand tribute, but they are no match for the trusty lazer at your side. You fight your way through (Lose a small amount of HP)."
    },
    {
        event: "You meet a very large and very unfriendly alien creature (Lose HP)."
    },
    {
        event: "You fall through a crack in the volcanic rock and twist your ankle (Lose HP)."
    },
    {
        event: "A swarm of leathery-winged death bats attack you as you approach the mouth of a cave (Lose HP)."
    },
    {
        event: "Quicksand! You're lucky to escape with your life (Lose HP).",
        eventGeoMapper: "Look out, quicksand ahead! The Geo-Mapper guides you safely around it (Continue on)."
    },
    {
        event: "The planet starts to shake violently, hurling you to the ground (Lose HP)."
    },
    {
        event: "A gentle rain begins to fall. You are just about to try and collect some when you notice it is starting to eat through your suit and run for cover (Lose HP)."
    },
    {
        event: "You are entranced by an incredible shifting light show in the atmosphere. It is truly a beautiful sight to behold; too bad it's also blasting you with cosmic radiation (Lose HP)."
    },
    {
        event: "A deep rumble emanates from beneath you. You've seen this movie before, and manage to get mostly out of the way of the giant worm that erupts from the ground (Lose HP)."
    }
];

let dHpEvents = [
    {
        event: "You discover a tree with a strange alluring fruit. You aren't sure if it is healthy or harmful.",
        eventBioScannerA: "You discover a tree with a strange alluring fruit. Your scanner tells you the fruit is healthy (Gain HP).",
        eventBioScannerB: "You discover a tree with a strange alluring fruit. Your scanner tells you the fruit is harmful (Continue on).",
        choiceA: "Eat the fruit.",
        choiceB: "Continue on.",
        outcomeA1: "The fruit satisfies your hunger (Gain HP).",
        outcomeA2: "The fruit gave you the runs (Lose HP).",
        outcomeB1: "You avoid the berries."
    },
    {
        event: "An enormous sandstorm appears in the distance.",
        choiceA: "Hunker down and wait out the storm.",
        choiceB: "Push yourself harder to beat the storm.",
        outcomeA1: "You use additional oxygen (Lose O2).",
        outcomeB1: "You expend a lot of energy racing the storm (Lose HP)."
    },
    {
        event: "The natural hot springs of this planet are reported to have restorative properties.",
        choiceA: "Take a little 'Me time'.",
        choiceB: "Continue your search.",
        outcomeA1: "You feel fantastic (Gain HP).",
        outcomeB1: "You avoid the hot springs, who knows what's growing in there."
    },
    {
        event: "You come to a fork in the path.",
        choiceA: "Go left.",
        choiceB: "Go right.",
        outcomeA1: "You find more berries (Gain HP).",
        outcomeB1: "The land is bare and you move on."
    },
    {
        event: "You see a small creature caught in a snare.",
        choiceA: "Take it and run.",
        choiceB: "Leave it and continue on.",
        outcomeA1: "You needed that meal badly (Gain HP).",
        outcomeB1: "Your stomach growls, but you feel better safe than sorry."
    },
    {
        event: "You see a small creature caught in a snare.",
        choiceA: "Take it and run.",
        choiceB: "Leave it and continue on.",
        outcomeA1: "You're attacked before you get it released, and barely escape with your life (Lose HP).",
        outcomeB1: "Your stomach growls, but you feel better safe than sorry."
    },
    {
        event: "There is a strange cloud floating a few feet off the ground ahead of you. It seems to be faintly glowing and pulsating, and gives you an odd sense of comfort.",
        choiceA: "Get a better look.",
        choiceB: "Get out of there now.",
        outcomeA1: "You feel a brief sense of euphoria before the pain kicks in (Lose HP).",
        outcomeB1: "You really want to go check out that cloud, but you would rather make it home safely."
    },
    {
        event: "You kick over some rocks and notice a corner of old paper sticking out. It appears to be a crudely drawn map with an X seemingly a short distance away.",
        choiceA: "You know there are space pirates in these parts, maybe they have something you need.",
        choiceB: "You know there are space pirates in these parts, better put the map back and steer clear",
        outcomeA1: "You found rations and rum (Gain HP).",
        outcomeB1: "You trudge onward, dreaming of pirate treasure."
    },
    {
        event: "You kick over some rocks and notice a corner of old paper sticking out. It appears to be a crudely drawn map with an X seemingly a short distance away.",
        choiceA: "You know there are space pirates in these parts, maybe they have something you need.",
        choiceB: "You know there are space pirates in these parts, better put the map back and steer clear",
        outcomeA1: "As you're digging you hear the rumble of an approching speeder and flee as fast as you can (Lose HP).",
        outcomeB1: "You trudge onward, dreaming of pirate treasure."
    },
    {
        event: "It's probably time for a quick rest before you pass out from exhaustion",
        choiceA: "Keep going, you have to keep going.",
        choiceB: "Find a cozy looking rock and snuggle up.",
        outcomeA1: "You wake up with a busted knee and blood in your mouth, you did pass out (Lose HP).",
        outcomeB1: "You wake up feeling a little better, but that rock was not kind to your neck."
    },
];

let psO2Events = [
    {
        event: "You find a corpse with an O2 tank on them. You figure they won't be using it anytime soon so you take it (Gain O2)."
    },
    {
        event: "You find a crashed drop pod with extra O2 tanks in it (Gain O2)."
    },
    {
        event: "You find a crashed land speeder with O2 tanks still attached (Gain O2)."
    },
    {
        event: "You come across a vent of gas coming from the shore of a large lake, but you have no way to ensure it is safe.",
        eventO2Scanner: "You come across a vent of gas coming from the shore of a large lake. You use your O2-Scrubber to fill a small reserve tank (Gain O2)."
    },
    {
        event: "You come across a downed ship, which has just enough power in the life support sytem to replenish some of your oxygen (Gain O2)."
    },
    {
        event: "You see a hidden door in the side of a cliff face. It seems no one has been here for years, but you did find an oxygen tank (Gain O2)."
    },
    {
        event: "You see a lone space pirate with an O2 tank, but it's too risky to take him on.",
        eventLazer: "You see a lone space pirate with an O2 tank, you decide it's time to rob the robbers (Gain O2)."
    },
    {
        event: "You come upon a thick fog you think might be mostly O2, but you have no way to ensure it is safe.",
        eventO2Scanner: "You come upon a thick fog you think might be mostly O2. You use your O2-Scrubber to fill a small reserve tank (Gain O2)."
    },
    {
        event: "You see an abandoned outpost on a high rocky cliff, but you can't find any way up and have to keep moving.",
        eventJetpack: "You see an abandoned outpost on a high rocky cliff. Time to fly (Gain O2)."
    },
    {
        event: "You decide to take a break and focus on slowing your breathing, preserving extra O2 (Gain O2)."
    }
];
let nsO2Events = [
    {
        event: "You come across a forest. You're not sure how to navigate through, so it will take you a bit of extra time (Lose O2).",
        eventGeoMapper: "You come across a jungle. The Geo-Mapper guides you through & you get out in no time (Continue on)."
    },
    {
        event: "While trudging through the jungle your oxygen tank gets snagged on a branch and starts leaking (Lose O2)."
    },
    {
        event: "A robot challenges you to a knife fight. You dispatch him quickly, but he managed to knick your oxygen line (Lose O2)."
    },
    {
        event: "While collecting samples of the local flora you accidentally snip your oxygen line (Lose O2)."
    },
    {
        event: "You find yourself mired in a deep, dense bog from which it takes a significant time to free yourself (Lose O2).",
        eventJetpack: "You jet above the danger and continue on."
    },
    {
        event: "The biggest creature you have ever seen is lumbering towards you from the distance. You run as fast and as far as you can before stopping to catch your breath (Lose O2)."
    },
    {
        event: "You get caught in an anti-gravity trap, and the only way to free yourself is by releasing small blasts of O2 from your tank to propel you forward (Lose O2)."
    },
    {
        event: "You stumble and knock the wind out of yourself. You are unharmed, but your deep gasping has sapped extra O2 (Lose O2)."
    },
    {
        event: "You find yourself in a labyrinth of caves and tunnels. You're not sure how to navigate through, so it will take you a bit of extra time (Lose O2).",
        eventGeoMapper: "You find yourself in a labyrinth of caves and tunnels. The Geo-Mapper guides you through & you get out in no time (Continue on)."
    },
    {
        event: "Your starting to lose hope, so to combat this you decide to do some quick yoga. You know this exertion will be a strain on your oxygen but think it will be worth it (Lose O2)."
    }
];

let dO2Events = [
    {
        event: "You find a crashed pod. You notice there is an O2 tank bolted to the wall. You can use what you have to pry it, but you may damage it.",
        choiceA: "Try to pry the O2 tank.",
        choiceB: "Continue on.",
        outcomeA1: "You successfully pry the O2 tank without damaging it (Gain O2).",
        outcomeA2: "You detatch the O2 tank from the wall, but it falls to the ground and cracks. You wasted your time here (Lose O2).",
        outcomeB1: "You avoid the crashed pod."
    },
    {
        event: "An enormous sandstorm appears in the distance.",
        choiceA: "Hunker down and wait out the storm.",
        choiceB: "Push yourself harder to beat the storm.",
        outcomeA1: "You use additional oxygen (Lose O2).",
        outcomeB1: "You expend a lot of energy racing the storm (Lose HP)."
    },
    {
        event: "You hear a beautiful song coming from what appears to be a clearing in the forest.",
        choiceA: "You are drawn to follow the song, and believe it's creator can probably help you.",
        choiceB: "You've got better things to do than listen to music.",
        outcomeA1: "Oh no, it’s a giant man-eating Siren Plant! It's tendrils squeeze tight, forcing you to shed and O2 tank to escape (Lose O2).",
        outcomeB1: "You continue on your journey."
    },
    {
        event: "A polar vortex blasts you with icy wind as you exit a cave. Should you risk it?",
        choiceA: "Cozy up and wait out the storm.",
        choiceB: "Brave the storm, moving will keep you warmer anyway.",
        outcomeA1: "You use additional oxygen (Lose some O2).",
        outcomeB1: "Icy shards tear at your suit and O2 tank (Lose double O2)."
    },
    {
        event: "You find an unusual looking air canister. You aren't sure if it is O2 or something else.",
        eventO2ScrubberA: "You find an unusual looking air canister. You use your O2 Scrubber on it, and get a reserve tank (Gain O2).",
        eventO2ScrubberB: "You find an unusual looking air canister. You use your O2 Scrubber on it, but there was no O2 in the canister.",
        choiceA: "You're desperate, you've got to take a chance.",
        choiceB: "Continue on.",
        outcomeA1: "The canister has O2! (Gain O2).",
        outcomeA2: "It smells like farts, and sure isn't O2 (Lose O2).",
        outcomeB1: "You leave the canister behind."
    },
    {
        event: "You see a crashed escape pod stuck in the canopy of the forest",
        eventJetpackA: "You see a crashed escape pod stuck in the canopy of the forest. You quickly jet up to it and strip the O2 tanks (Gain O2).",
        choiceA: "Find a way to climb to the top.",
        choiceB: "It's not worth the risk, continue on.",
        outcomeA1: "You find a relatively easy tree to climb and enter the pod. It has a spare O2 tank that is still serviceable (Gain O2).",
        outcomeA2: "You spend hours trying to traverse the trees, wasting oxygen due to the exertion (Lose O2)",
        outcomeB1: "You continue on your journey."
    },
    {
        event: "You kick over some rocks and notice a corner of old paper sticking out. It appears to be a crudely drawn map with an X seemingly a short distance away.",
        choiceA: "You know there are space pirates in these parts, maybe they have something you need.",
        choiceB: "You know there are space pirates in these parts, better put the map back and steer clear",
        outcomeA1: "You found an O2 tank (Gain O2).",
        outcomeB1: "You trudge onward, dreaming of pirate treasure."
    }
];

let psFuelEvents = [
    {
        event: "You come across a makeshift mineshaft, and are able to scrounge some fuel from the left behind equipment (Gain fuel)."
    },
    {
        event: "You trip over something in the brush. Upon clearing the debris you discover a damaged alien  shuttle with some fuel you can use (Gain fuel)."
    },
    {
        event: "You find a fuel tank and siphon off as much as you can (Gain fuel)."
    },
    {
        event: "You find an old spaceship fueling station, and a small amount of fuel still around (Gain fuel)."
    },
    {
        event: "You see an abandoned outpost on a high rocky cliff, but you can't find any way up and have to keep moving.",
        eventJetpack: "You see an abandoned outpost on a high rocky cliff. Time to fly (Gain Fuel)."
    },
    {
        event: "You see a lone space pirate guarding his shuttle, but there is no way you can get to him without being noticed.",
        eventLazer: "You see a lone space pirate guarding his shuttle, and hold him at Lazer-point for some of his fuel (Gain Fuel)."
    }
];

let itemEvents = [
    {
        event: "You found the Bio-Scanner! Now you can scan flora & fauna.",
        item: "hasBioScanner"
    },
    {
        event: "You found the Geo-Mapper! Now you can map the area & move quickly.",
        item: "hasGeoMapper"
    },
    {
        event: "You found the Lazer! Now you can defend yourself in battle.",
        item: "hasLazer"
    },
    {
        event: "You found the Jetpack! Now you can fly like an eagle, to the sea!",
        item: "hasJetpack"
    },
    {
        event: "You found the Water-Filter! Now you can replenish your HP at water sources!",
        item: "hasWaterFilter"
    },
    {
        event: "You found the O2-Scrubber! Now you can extract oxygen!",
        item: "hasO2Scrubber"
    },
];

let warpDriveEvents = [
    {
        event: "You found the first warp drive piece!",
        count: 0
    },
    {
        event: "You found the second warp drive piece!",
        count: 1
    },
    {
        event: "You found the third & final warp drive piece! Now look for some uranium to fuel it.",
        count: 2
    },
    {
        event: "You found uranium! Return to the ship to warp home!",
        count: 3
    }
];
