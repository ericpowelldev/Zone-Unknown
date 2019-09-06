let myX = 0;
let myY = 0;

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

hideHTML();
showSM();

function continueGame() {
    location.href = `/game`
}
function newGame() {
    location.href = `/game`
}
function goHome() {
    location.href = `/`
}

function gridMove() {
    if ($(this).data(`reach`) === true) {
        $(this).data(`visited`, true);
        let coordinates = $(this).data(`coordinates`).split(`, `);

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
    }
    else {
        console.log(`You cannot move there!`);
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

gridChange();

$(document).on("click", "#continue", continueGame);
$(document).on("click", "#newGame", newGame);
$(document).on("click", "#home", goHome);
$(document).on("click", ".hex", gridMove);

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}