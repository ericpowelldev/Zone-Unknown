let globalPositive = 2;
let globalNegative = -4;

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
    }
];

let psO2Events = [
    {
        event: "You find a corpse with an O2 tank on them. You figure they won't be using it anytime soon so you take it (Gain O2)."
    },
    {
        event: "You find a crashed drop pod with extra O2 tanks in it (Gain O2)."
    },
    {
        event: "You come across a vent of gas coming from the shore of a large lake, but you have no way to ensure it is safe.",
        eventO2Scanner:"You come across a vent of gas coming from the shore of a large lake. You use your O2-Scrubber to fill a small reserve tank (Gain O2)."
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
        eventO2Scanner:"You come upon a thick fog you think might be mostly O2. You use your O2-Scrubber to fill a small reserve tank (Gain O2)."
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
        event: "You see an abandoned outpost on a high rocky cliff, but you can't find any way up and have to keep moving.",
        eventJetpack: "You see an abandoned outpost on a high rocky cliff. Time to fly (Gain Fuel)."
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