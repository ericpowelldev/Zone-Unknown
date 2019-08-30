let globalPositive = 2;
let globalNegative = -4;

let psHpEvents = [
    {
        event: "You discover a bush filled with berries, you've seen these before and know they are healthy (Gain HP)."
    },
    {
        event: "You upon a small lake. The water clearly doesn't look safe to drink. You continue on.",
        eventWaterFilter: "You happen upon a small lake. Your Water-Filter should be able to make this drinkable (Gain HP)."
    },
];
let nsHpEvents = [
    {
        event: "You stumble upon a hive of viscious space bees, they sting you through your space suit somehow (Lose HP).",
        eventLazer: "You stumble upon a hive of viscious space bees, luckly you have a lazer (Lose a small amount of HP)."
    },
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
];

let psO2Events = [
    {
        event: "You find a corpse with an O2 tank on them. You figure they won't be using it anytime soon so you take it (Gain O2)."
    },
];
let nsO2Events = [
    {
        event: "You come across a forest. You're not sure how to navigate through, so it will take you a bit of extra time (Lose O2).",
        eventGeoMapper: "You come across a jungle. The Geo-Mapper guides you through & you get out in no time (Continue on)."
    },
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
];

let psFuelEvents = [
    {

    },
];

let specEvents = [
    
];

let itemEvents = [
    {
        event: "You found the Bio-Scanner! Now you can scan flora & fauna."
    },
    {
        event: "You found the Geo-Mapper! Now you can map the area & move quickly."
    },
    {
        event: "You found the Lazer! Now you can defend yourself in battle."
    },
    {
        event: "You found the Jetpack! Now you can ___!"
    },
    {
        event: "You found the Water-Filter! Now you can replenish your HP at water sources!"
    },
    {
        event: "You found the O2-Scrubber! Now you can ___!"
    },
];

let warpDriveEvents = [
    {
        event: "You found the first warp drive piece!"
    },
    {
        event: "You found the second warp drive piece!"
    },
    {
        event: "You found the third & final warp drive piece! Now look for some uranium to fuel it."
    },
    {
        event: "You found uranium! Return to the ship to warp home!"
    }
];