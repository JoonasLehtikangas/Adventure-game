let map = [];

map[0] = "Castle.";
map[1] = "There is an old well.";
map[2] = "Aurinkoinen metsäaukio";
map[3] = "Sleeping dragon";
map[4] = "Road";
map[5] = "So this is the gate to the ”The end” continent. I need a key to open it.";
map[6] = "River";
map[7] = "Why there is a bech midle of no where.";
map[8] = "Odd cottage. I can hear someone inside.";
map[9] = "Old fisher man.";
map[10] = "Inside the cottage.";
map[11] = "Harbor.";
map[12] = "Island.";
map[13] = "End.";


const images = [];

images[0] = "torni.jpg";
images[1] = "vanhaLahde.jpg";
images[2] = "aukio.jpg";
images[3] = "sleepyDragon.jpg";
images[4] = "polku.jpg";
images[5] = "porttiClosed.png";
images[6] = "joki.jpg";
images[7] = "penkki.jpg";
images[8] = "cottage.jpg";
images[9] = "fisher.jpg";
images[10] = "inside.jpg";
images[11] = "harbor.jpg";
images[12] = "island.jpeg";
images[13] = "thend.jpg";

const blockMessage = [];

blockMessage[0] = "Esto syy";
blockMessage[1] = "Esto syy";
blockMessage[2] = "Esto syy";
blockMessage[3] = "Esto syy";
blockMessage[4] = "Esto syy";
blockMessage[5] = "Esto syy";
blockMessage[6] = "Esto syy";
blockMessage[7] = "Esto syy";
blockMessage[8] = "Esto syy";
// Napit
const kontti = document.querySelector("#kontti")
const mapIcon = document.querySelector("#mapIcon");
const mapButtons = document.querySelector("#map");
const mapState = document.querySelector("#mapState");
let vastaus1 = document.querySelector("#vastaus1");
let vastaus2 = document.querySelector("#vastaus2");
const vastaa = document.querySelector("#vastaa");
const rent = document.querySelector("#rent");


const Pos0 = document.querySelector("#Pos0");
const Pos1 = document.querySelector("#Pos1");
const Pos2 = document.querySelector("#Pos2");
const Pos3 = document.querySelector("#Pos3");
const Pos4 = document.querySelector("#Pos4");
const Pos5 = document.querySelector("#Pos5");
const Pos6 = document.querySelector("#Pos6");
const Pos7 = document.querySelector("#Pos7");
const Pos8 = document.querySelector("#Pos8");
const Pos9 = document.querySelector("#Pos9");
const Pos11 = document.querySelector("#Pos11");
const PosEND = document.querySelector("#PosEND");


vastaus1.addEventListener("click", vastaus1nappi, false);
vastaus2.addEventListener("click", vastaus2nappi, false);
mapIcon.addEventListener("click", mapOpener, false);
Pos0.addEventListener("click", clickHandler0, false);
Pos1.addEventListener("click", clickHandler1, false);
Pos2.addEventListener("click", clickHandler2, false);
Pos3.addEventListener("click", clickHandler3, false);
Pos4.addEventListener("click", clickHandler4, false);
Pos5.addEventListener("click", clickHandler5, false);
Pos6.addEventListener("click", clickHandler6, false);
Pos7.addEventListener("click", clickHandler7, false);
Pos8.addEventListener("click", clickHandler8, false);
Pos9.addEventListener("click", clickHandler9, false);
Pos11.addEventListener("click", clickHandler11, false);
PosEND.addEventListener("click", posEND, false);
rent.addEventListener("click", rentABoat, false);

//toiminto puheille
let toimi2;
let speech2 = 1;
let toimi3;
let speech3 = 1;
let toimi4;
let speech4 = 1;
let toimi5;
let speech5 = 1;
let valinta1 = 0;
let valinta2 = 0;
let puheinput;
let oldspeech = 0;
let omaoutput = document.querySelector("#omaoutput");
let itemi;

kontti.hidden = false;
mapState.hidden = true;
posHidden()
let open;
var gateVisited = false;
var castleVisited = false;
var fisherComplete = false;
var wizardVisited = false;
var dragonDead = false;
var gateOpen = false;

function posHidden() {
    Pos0.hidden = true;
    Pos1.hidden = true;
    Pos2.hidden = true;
    Pos3.hidden = true;
    Pos4.hidden = true;
    Pos5.hidden = true;
    Pos6.hidden = true;
    Pos7.hidden = true;
    Pos8.hidden = true;
    Pos9.hidden = true;
    Pos11.hidden = true;
}

function mapOpener() {
    if (open == 0) {
        posHidden()
        mapState.hidden = true;
        kontti.hidden = false;
        open = 1;
    } else {
        mapState.hidden = false;
        kontti.hidden = true;
        Pos0.hidden = false;
        Pos1.hidden = false;
        Pos2.hidden = false;
        Pos3.hidden = false;
        Pos4.hidden = false;
        Pos5.hidden = false;
        Pos6.hidden = false;
        Pos7.hidden = false;
        Pos8.hidden = false;
        Pos9.hidden = false;
        if (castleVisited == true) {
            Pos11.hidden = false;
        } else {
            Pos11.hidden = true;
        }
        open = 0;
    }
}

function clickHandler0() {
    mapState.hidden = true;
    kontti.hidden = false;
    posHidden()
    mapLocation = 0;
    render()
    castleVisited = true;
}

function clickHandler1() {
    mapState.hidden = true;
    kontti.hidden = false;
    vastaa.hidden = false;
    posHidden()
    mapLocation = 1;
    render()
    output = "";
}

function clickHandler2() {
    mapState.hidden = true;
    kontti.hidden = false;
    posHidden()
    mapLocation = 2;
    render()
}

function clickHandler3() {
    mapState.hidden = true;
    kontti.hidden = false;
    vastaa.hidden = false;
    output.hidden = false;
    posHidden()
    mapLocation = 3;
    render()
}

function clickHandler4() {
    mapState.hidden = true;
    kontti.hidden = false;
    posHidden()
    mapLocation = 4;
    render()
}

function clickHandler5() {
    gameMessage.hidden = true;
    mapState.hidden = true;
    kontti.hidden = false;
    vastaa.hidden = false;
    posHidden()
    mapLocation = 5;
    render()
    gateVisited = true;
}

function clickHandler6() {
    mapState.hidden = true;
    kontti.hidden = false;
    posHidden()
    mapLocation = 6;
    vastaa.hidden = false;
    render()
    output.innerHTML = "";
}

function clickHandler7() {
    mapState.hidden = true;
    kontti.hidden = false;
    posHidden()
    mapLocation = 7;
    render()
}

function clickHandler8() {
    mapState.hidden = true;
    kontti.hidden = false;
    posHidden()
    vastaa.hidden = false;
    vastaus1.hidden = true;
    vastaus2.hidden = true;
    mapLocation = 8;
    render()
}

function clickHandler9() {
    mapState.hidden = true;
    kontti.hidden = false;
    posHidden()
    mapLocation = 9;
    render()
    vastaa.hidden = true;
}

function clickHandler11() {
    gameMessage = "";
    mapState.hidden = true;
    kontti.hidden = false;
    vastaa.hidden = true;
    posHidden()
    mapLocation = 11;
    render()
}

function rentABoat() {
    gameMessage = "";
    mapState.hidden = true;
    kontti.hidden = false;
    vastaa.hidden = false;
    output.hidden = false;
    posHidden()
    goToIsland()
    render()
}

function posEND() {
    mapLocation = 13;
    mapIcon.hidden = true;
    input.hidden = true;
    PosEND.hidden = true;
    document.getElementById("inBox").style.hidden = true;
    render();
}
// PELAAJAN TOIMINNOT
let actionsForPlayer = ["take", "use", "drop", "talk", "search", "inside"]
let action = "";

// COLLECTABLES AND LOCATION
const items = ["old hook", "key", "crossbow"];
let itemLocations = [6, 10, 12];
let backPack = [];
let knownItems = ["old hook", "key", "crossbow"];
let item = "";

// PELIN ALKU SIJAINTI
let mapLocation = 1;
console.log(map[mapLocation]);
document.getElementById("omaoutput").innerHTML = "Story starts from Old Fisherman. You can move with map, double click map icon to open the map. You can write take to take items";

// PELAAJAN SYÖTE
let playersInput = "";

// PELIN VIESTI
let gameMessage = "";



//KÄYTTÖLIITTYMÄ ELEMENTIT
let image = document.querySelector("img");
let input = document.querySelector("#input");
let output = document.querySelector("#output");
// let button = document.querySelector("button");
// button.style.cursor = "pointer"
vastaa.addEventListener("click", clickHandler, false);

render();
//(button function)
function clickHandler() {
    console.log("Nappia Painettu");
    gameMessage = "";
    playGame();
}

function playGame() {
    //Pelaajan syöte + --> pienille kirjaimille
    playersInput = input.value.toLowerCase();

    // Nolla muuttujat, jotta edelliseltä kerrokselta ei tule väärää infoa
    gameMessage = "";
    action = "";

    //Kättäjän syötteen tarkastus
    for (i = 0; i < actionsForPlayer.length; i++) {
        if (playersInput.indexOf(actionsForPlayer[i]) !== -1) {
            action = actionsForPlayer[i];
            console.log("Pelaajan valinta oli: " + action)
            break;
        }
    }
    for (i = 0; i < knownItems.length; i++) {
        if (playersInput.indexOf(knownItems[i]) !== -1) {
            item = knownItems[i];
            console.log("Pelaaja valitsi esineen:" + item)
        }
    }

    switch (action) {
        case "take":
            takeItem();
            output.innerHTML = "";
            break;

        case "use":
            useItem();
            break;

        case "talk":
            speak2();
            speak3();
            popo = 1;
            break;

        case "search":
            searchItems();
            break;
        case "inside":
            console.log("case inside");
            goInside();
            break;
        case "drop":
            dropItem();
            break;
        default:
            gameMessage = "Tuntematon toiminto";
    }

    render();
}

function vastaus1nappi() {
    puheinput = "1";
    speak2();
    speak3();
    speak4();
    speak5();
}

function vastaus2nappi() {
    puheinput = "2";
    speak2();
    speak3();
    speak4();
    speak5();
}

function takeItem() {
    // Käytä hyväksesi tietoa valitusta
    // esineestä ja etsi esineen index
    // items arraysta
    var itemIndexNumber = items.indexOf(item);

    // Onko esine pelikentällä ja onko se pelaajan
    // tämän hetkisessä lokaatiossa?
    if (itemIndexNumber !== -1 &&
        itemLocations[itemIndexNumber] === mapLocation) {
        gameMessage = "You picked up " + item + ".";

        // Lisää esine reppuun
        backPack.push(item);

        // Poista esine items-arraysta ja alkuperäisestä
        // sijainnista
        items.splice(itemIndexNumber, 1);
        itemLocations.splice(itemIndexNumber, 1);

        // Debuggaa konsoliin
        console.log("Pelikentällä: " + items);
        console.log("Repussa: " + backPack);
    } else {
        // Viesti jos yrität ottaa esineen
        // joka ei ole ko. sijainnissa
        gameMessage = "Et voi tehdä tätä toimenpidettä.";
    }
}

function giveItem() {
    var itemIndexNumber = items.indexOf(itemi);

    if (itemIndexNumber != -1 && itemLocations[itemIndexNumber] === mapLocation) {
        if (mapLocation == 10) {
            gameMessage = "Wizard gave you an item: <strong>" + itemi + "</strong>.";
        }
        backPack.push(itemi);

        items.splice(itemIndexNumber, 1);
        itemLocations.splice(itemIndexNumber, 1)

        console.log("pelikentällä: " + items);
        console.log("Repussa: " + backPack);
        output.innerHTML += "<br><em>" + gameMessage + "</em>";
    } else {
        gameMessage = "Et voi tehdä tätä toimenpidettä.";
    }
}

function dropItem() {
    document.getElementById("omaoutput").innerHTML = "I should not do that.";
    // Voit pudottaa esineen vain jos repussa on jotain
    if (backPack.length !== 0) {
        // Etsi repusta tekstikentässä mainitun esineen index
        var backPackIndexNumber = backpack.indexOf(item);

        // Esine löytyi jos index ei ole -1
        if (backPackIndexNumber !== -1) {

            // Kerro pelaajalle että esine on pudotettu
            gameMessage = "Pudotit esineen: " + item + ".";

            // Siirrä esine repusta peliympäristöön
            items.push(backPack[backPackIndexNumber]);
            itemLocations.push(mapLocation);

            // Poista esine repusta
            backPack.splice(backpackIndexNumber, 1);
        } else {
            // Viesti jos yritetään pudottaa
            // esinettä joka ei ole repussa
            gameMessage = "Et voi tehdä tätä.";
        }
    } else {
        // Viesti jos reppu on tyhjä
        gameMessage = "Sinulla ei ole mitään mukana.";
    }
}

function searchItems() {
    if (location == 6) {
        document.getElementById("omaoutput").innerHTML = "";
        itemi = "old hook";
        giveItem();
    }
}

function goInside() {
    console.log("go inside funktionin sisällä0")
    console.log(mapLocation)

    if (mapLocation == 8 && fisherComplete == true) {
        console.log("go inside funktionin sisällä")
        mapState.hidden = true;
        kontti.hidden = false;
        posHidden()
        mapLocation = 10;
        vastaa.hidden = false;
        output.hidden = true;
        render()
    } else {
        gameMessage = "Why would I do that?"
    }
}

function useItem() {
    // Selvitä onko esine mukana
    // selvittämällä esineen index
    var backPackIndexNumber = backPack.indexOf(item);

    // Jos index sai arvon -1 esine ei ole mukana
    if (backPackIndexNumber === -1) {
        gameMessage = "How I am supposed to use something I dont have?";
    }

    // Jos repussa ei ole mitään kerro se
    if (backPack.length === 0) {
        gameMessage += " I dont have any items in my backpack right now.";
    }

    // Jos esine on mukana, mitä sillä voi tehdä...
    if (backPackIndexNumber !== -1) {
        switch (item) {
            case "old hook":
                gameMessage = "So this is the fishermans hook."
                break;
            case "crossbow":
                if (mapLocation === 3) {
                    gameMessage = "You killed the dragon. Now I should head back to the Wizard.";
                    dragonDead = true;
                }
                break;
            case "key":
                if (mapLocation === 5) {
                    gateOpen = true;
                }
        }
    }
}

function Answer() {
    speak2();
    speak3();
    speak4();
    speak5();
}
vastaus1.hidden = true;
vastaus2.hidden = true;

function speak2() {
    if (toimi2 != 1) {
        gameMessage = "";

        if (mapLocation == 9 && toimi2 != 1) {
            vastaus2.hidden = false;
            vastaus1.hidden = false;
            mapIcon.hidden = true;
            document.getElementById("vastaus1").innerHTML = "<strong>1:</strong> Hi.. ";
            document.getElementById("vastaus2").innerHTML = "<strong>2:</strong> (Stay quiet.)";
            oldspeech = 1;
            if (puheinput == "1" && valinta1 == 2 || valinta2 == 2) {
                toimi2 = 1;
                vastaus2.hidden = true;
                vastaus1.hidden = true;
                mapIcon.hidden = false;
                end2();
            } else if (puheinput == "1" && valinta1 == 1) {
                document.getElementById("omaoutput").innerHTML = "Actually, not so fast. I will give you an answer when you find my old fishing hook. I lost it on the river bank near the forest before the crossroads. Search for it around there.";
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong>(I could do that, I have nothing else to do).";
                vastaus2.hidden = true;
                vastaa.hidden = true;
                valinta2 = 2;
            } else if (puheinput == "2" && valinta2 == 1) {
                document.getElementById("omaoutput").innerHTML = "Still not talking? Well I will give you the answer to what you are looking for when you find my old fishing <strong>hook</strong>. You may wonder, how I know what you want. I have seen life more than you would think. Anyway, I lost it on the <strong>river</strong> bank near the forest before the crossroads. <strong>Search</strong> for it around there.";
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong>(I could do that, I have nothing else to do).";
                vastaus2.hidden = true;
                vastaa.hidden = true;
                valinta1 = 2;
            } else if (puheinput == "1" && valinta1 == 0) {
                document.getElementById("omaoutput").innerHTML = "Old fisherman: Hello there. Did you have something in your mind?";
                if (gateVisited == true) {
                    document.getElementById("vastaus1").innerHTML = "<strong>1:</strong> So about the gate...";
                    vastaus2.hidden = true;
                    document.getElementById("vastaus2").innerHTML = "";
                } else if (gateVisited == false) {
                    document.getElementById("vastaus1").innerHTML = "<strong>2:</strong>How do I get to...";
                    vastaus2.hidden = true;
                    document.getElementById("vastaus2").innerHTML = "";
                }
                valinta1 = 1;
                puheinput = "";
            } else if (puheinput == "2" && valinta2 == 0) {
                document.getElementById("omaoutput").innerHTML = "Old fisherman: So young man, you look like you want to ask something?";
                document.getElementById("vastaus2").innerHTML = "<strong>1:</strong> ...";
                vastaus1.hidden = true;
                document.getElementById("vastaus1").innerHTML = "";
                valinta2 = 1;
                puheinput = "";
            }
        }
    } else {
        gameMessage = "";
    }
}

function end2() {
    if (toimi2 = 1) {
        document.getElementById("omaoutput").innerHTML = "";
        valinta1 = 0;
        valinta2 = 0;
        speech2 = 0;
        vastaa.hidden = false;
        mapIcon.hidden = false;
        puheinput = "";
    }
}

function oldFisher() {
    if (oldspeech == 0)
        document.getElementById("omaoutput").innerHTML = "There's an old fisherman over there. Should I talk to him?";
}

// KALASTAJAN KESKUSTELU 2
function speak3() {
    var n = backPack.includes("old hook", 0);
    console.log(n);
    console.log("Portti", gateVisited);
    console.log(fisherComplete, "Complete Fisher - right after speak3")
    if (toimi3 != 1 && toimi2 == 1 && n == true && fisherComplete == false) {
        gameMessage = "";
        if (mapLocation == 9 && toimi3 != 1 && fisherComplete == false) {
            vastaus2.hidden = false;
            vastaus1.hidden = false;
            document.getElementById("vastaus1").innerHTML = "<strong>1:</strong>I found your hook.";

            if (gateVisited == true) {
                document.getElementById("vastaus2").innerHTML = "<strong>2:</strong>Here is the hook, so how do I get past the gate";

            } else if (gateVisited == false) {
                document.getElementById("vastaus2").innerHTML = "<strong>2:</strong>So how do I get to the ”The end” ";

            }

            oldspeech = 1;
            if (puheinput == "1" && valinta1 == 2 && valinta2 == 2) {
                toimi3 = 1;
                // valinta1.hidden = true;
                // valinta2.hidden = true;
                fisherComplete = true;
                console.log("before end 3", fisherComplete);
                end3();
            } else if (puheinput == "1" && valinta1 == 1) {
                if (gateVisited == true) {
                    console.log("Valinta 1 == 1", gateVisited)
                    document.getElementById("omaoutput").innerHTML = "Old fisherman: As you might have guessed, you need a gate key to open it. The old wizard knows about the key, you might want to ask him about it. He lives in the cottage, the next time you go there, he will let you in.";
                } else if (gateVisited == false) {
                    document.getElementById("omaoutput").innerHTML = "Old fisherman: If you want to get to the ”The end”, you first need a key to the gate. The old wizard in his cottage should know about the key. Next time you go to him, he will let you inside.";
                }
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong>Thank you.";
                document.getElementById("vastaus2").innerHTML = "";
                document.getElementById("vastaus2").style.backgroundColor = "transparent";


                valinta2.hidden = true;
                valinta1 = 2;
                valinta2 = 2;
            } else if (puheinput == "2" && valinta2 == 1) {
                console.log("Valinta 2 == 1", gateVisited)
                if (gateVisited == true) {
                    document.getElementById("omaoutput").innerHTML = "Old fisherman: As you might have guessed, you need a gate key to open it. The old wizard knows about the key, you might want to ask him about it. He lives in the cottage, the next time you go there, he will let you in.";
                } else if (gateVisited == false) {
                    document.getElementById("omaoutput").innerHTML = "Old fisherman: If you want to get to the ”The end”, you first need a key to the gate. The old wizard in his cottage should know about the key. Next time you go to him, he will let you inside.";
                }
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong>Thank you.";
                vastaus2.hidden = true;
                valinta2 = 2;
                valinta1 = 2;
            } else if (puheinput == "1" && valinta1 == 0) {
                document.getElementById("omaoutput").innerHTML = "Old fisherman: Oh! I'm glad you found it, so now then.. What did you want to ask young one.";
                if (gateVisited == true) {
                    document.getElementById("vastaus1").innerHTML = "<strong>1:</strong> How do I get past the gate?";
                    vastaus2.hidden = true;
                    document.getElementById("vastaus2").innerHTML = "";
                } else if (gateVisited == false) {
                    document.getElementById("vastaus1").innerHTML = "<strong>1:</strong>How do I get to the ”The end” continent? ";
                    vastaus2.hidden = true;
                    document.getElementById("vastaus2").innerHTML = "";
                }

                valinta1 = 1;
                valinta2 = 1;
                puheinput = "";
            } else if (puheinput == "2" && valinta2 == 0) {

                if (gateVisited == true) {
                    document.getElementById("omaoutput").innerHTML = "Old fisherman: Ah.. the old gate you say...";
                } else if (gateVisited == false) {
                    document.getElementById("omaoutput").innerHTML = "Old fisherman: So you want to get to the ”The end” continent you say...";
                }
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong> Yes.";
                document.getElementById("vastaus2").innerHTML = "<strong>2:</strong>...";

                valinta2 = 1;
                valinta1 = 1;
                puheinput = "";
            }
        }
    } else {
        console.log("mitä vittua make?");
    }
}

function end3() {
    if (toimi3 = 1) {
        document.getElementById("omaoutput").innerHTML = "";
        valinta1 = 0;
        valinta2 = 0;
        vastaus1.hidden = true;
        vastaus2.hidden = true;
        vastaa.hidden = true;
        fisherComplete = true;
        mapIcon.hidden = false;
        backPack.splice("old hook")
        document.getElementById("vastaus2").style.backgroundColor = "rgba(12, 181, 233, 0.781)";
        speech3 = 0;
        puheinput = "";
        console.log("after end 3", fisherComplete);
    }
}

function oldFisher2() {
    if (oldspeech == 0)
        document.getElementById("omaoutput").innerHTML = "The fisher is still at the same spot.";
}
// KALAKESKUSTELU 2 LOPPU
// VELEHO KESKUSTELUN ALKU
function speak4() {
    vastaa.hidden = true;
    output.innerHTML = "";
    console.log(fisherComplete, "Complete Fisher - right after speak4")
    if (toimi4 != 1 && fisherComplete == true) {
        gameMessage = "";
        if (mapLocation == 10 && fisherComplete == true) {
            vastaus2.hidden = false;
            vastaus1.hidden = false;
            document.getElementById("omaoutput").innerHTML = "Wizard: Hello.";
            document.getElementById("vastaus1").innerHTML = "<strong>1:</strong>Hello, old fisherman said you know how to open the gate ";
            document.getElementById("vastaus2").innerHTML = "<strong>2:</strong>Hello, do you have the key to the old gate?";

            oldspeech = 1;
            if (puheinput == "1" && valinta1 == 2 && valinta2 == 2) {
                toimi4 = 1;
                // valinta1.hidden = true;
                // valinta2.hidden = true;
                wizardVisited = true;
                end4();
            } else if (puheinput == "1" && valinta1 == 1) {

                document.getElementById("omaoutput").innerHTML = "Wizard: Get my forgotten crosbow from the island and kill the dragon from northen mountain, then I shall give you the key. You need to pass trow the castle so you can get to the harbour. ";;
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong>Very well.";
                document.getElementById("vastaus2").innerHTML = "";
                vastaus2.hidden = true;
                valinta1 = 2;
                valinta2 = 2;
            } else if (puheinput == "2" && valinta2 == 1) {
                document.getElementById("omaoutput").innerHTML = "Wizard: Get my forgotten crosbow from the island and kill the dragon from northen mountain, then I shall give you the key. You need to pass trow the castle so you can get to the harbour. ";
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong>I will try my best.";
                vastaus2.hidden = true;
                valinta2 = 2;
                valinta1 = 2;
            } else if (puheinput == "1" && valinta1 == 0) {
                document.getElementById("omaoutput").innerHTML = "Wizard: I do know, I have the key for the gate.";
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong> Can I have the key?";
                document.getElementById("vastaus2").innerHTML = "<strong>2:</strong> Do I need to do something to get the key?";
                valinta1 = 1;
                valinta2 = 1;
                puheinput = "";
            } else if (puheinput == "2" && valinta2 == 0) {
                document.getElementById("omaoutput").innerHTML = "Wizard: I do, but I wont give it for free.";
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong> What do I need to do?";
                document.getElementById("vastaus2").innerHTML = "<strong>2:</strong>So how can I get it?";
                valinta2 = 1;
                valinta1 = 1;
                puheinput = "";
            }

        } else {
            console.log("test")
        }
    }
}

function end4() {
    if (toimi4 = 1) {
        document.getElementById("omaoutput").innerHTML = "";
        valinta1 = 0;
        valinta2 = 0;
        mapIcon.hidden = false;
        vastaa.hidden = true;
        valinta1.hidden = true;
        valinta2.hidden = true;
        vastaus1.hidden = true;
        vastaus2.hidden = true;
        fisherComplete = true;
        speech4 = 0;
        puheinput = "";
    }
}

function wizard() {
    if (oldspeech == 0)
        document.getElementById("omaoutput").innerHTML = "Inside the cottage.";
}
//VELHO KESKUSTELUN LOPPU
function speak5() {
    vastaa.hidden = true;
    output.innerHTML = "";
    console.log("Dragon is dead:", dragonDead);
    if (toimi5 != 1 && dragonDead == true) {
        gameMessage = "";
        if (mapLocation == 10 && dragonDead == true) {
            vastaus2.hidden = false;
            vastaus1.hidden = false;
            document.getElementById("omaoutput").innerHTML = "Wizard: So you are back. Did you kill the dragon?";
            document.getElementById("vastaus1").innerHTML = "<strong>1:</strong>Yes, the dragon is dead.";
            document.getElementById("vastaus2").innerHTML = "<strong>2:</strong>Yes, so can I now get the key?";
            console.log("Ensimmäinen kohta - Puheinput", puheinput, "Valintojen arvot", valinta1, valinta2)
            oldspeech = 1;
            if (puheinput == "1" && valinta1 == 2 && valinta2 == 2) {
                console.log("Ending sisällä", valinta1, valinta2, puheinput, toimi5)
                toimi5 = 1;
                output.hidden = false;
                itemi = "key";
                giveItem();
                document.getElementById("omaoutput").innerHTML = "Now I should head to the gate.";
                end5();
            } else if (puheinput == "2" && valinta1 == 2 && valinta2 == 2) {
                console.log("Ending sisällä", valinta1, valinta2, puheinput, toimi5)
                toimi5 = 1;
                output.hidden = false;
                itemi = "key";
                giveItem();
                document.getElementById("omaoutput").innerHTML = "Now I should head to the gate.";
                end5();
            } else if (puheinput == "1" && valinta1 == 0) {
                console.log("Toinen (Valinta 1-0) kohta - Puheinput", puheinput, "Valintojen arvot", valinta1, valinta2)
                document.getElementById("omaoutput").innerHTML = "Wizard: Well done indeed. As I promised here is the key.";
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong> Thank you.";
                document.getElementById("vastaus2").innerHTML = "<strong>2:</strong> I promise to return it someday.";
                valinta1 = 2;
                valinta2 = 2;
                puheinput = "";
                console.log("AFTER Toinen (Valinta 1-0) kohta - Puheinput", puheinput, "Valintojen arvot", valinta1, valinta2)
            } else if (puheinput == "2" && valinta2 == 0) {
                console.log("Toinen (valinta 2-0) kohta - Puheinput", puheinput, "Valintojen arvot", valinta1, valinta2)
                document.getElementById("omaoutput").innerHTML = "Wizard: Yes, yes...here";
                document.getElementById("vastaus1").innerHTML = "<strong>1:</strong> Thanks.";
                document.getElementById("vastaus2").innerHTML = "<strong>2:</strong> I will get it back to you someday.";
                valinta2 = 2;
                valinta1 = 2;
                puheinput = "";
                console.log("AFTER Toinen (valinta 2-0) kohta - Puheinput", puheinput, "Valintojen arvot", valinta1, valinta2)
            }

        } else {
            console.log("test5")
        }
    }
}

function end5() {
    if (toimi5 = 1) {
        document.getElementById("omaoutput").innerHTML = "";
        valinta1 = 0;
        valinta2 = 0;
        mapIcon.hidden = false;
        vastaa.hidden = true;
        valinta1.hidden = true;
        valinta2.hidden = true;
        vastaus1.hidden = true;
        vastaus2.hidden = true;
        speech5 = 0;
        puheinput = "";
    }
}
//VELHO AVAIN KESKUSTELU LOPPU
function goToIsland() {
    rent.hidden = true;
    mapLocation = 12;
    puheinput = "";
    omaoutput.innerHTML = "";
    vastaus1.hidden = true;
    vastaus2.hidden = true;
    vastaa.hidden = false;
    render();
}

function render() {
    var e = backPack.includes("crossbow", 0);
    var k = backPack.includes("key", 0);
    //Päivitä sijainti
    document.getElementById("omaoutput").innerHTML = "";
    image.src = "images/" + images[mapLocation]
    // Jos repussasi on tavaroita tulosta se näytölle
    if (backPack.length != 0) {
        output.innerHTML = "";
        output.innerHTML += "<br>In your backpack: " + backPack.join(", ");
    }
    if (mapLocation == 9 && speech2 == 1) {
        oldFisher()
        input.hidden = true;
        action = "talk";
        // mapIcon.hidden = true;
        speak2()

    } else if (mapLocation == 1 && toimi2 != 1) {
        document.getElementById("omaoutput").innerHTML = "Story starts from Old Fisherman. You can move with map, double click map icon to open the map. You can write take to take items. Other player actions will be hinted in the story";
    } else if (mapLocation == 9 && speech3 == 1 && toimi2 == 1) {
        input.hidden = true;
        action = "talk";
        // mapIcon.hidden = true;
        oldFisher2();
        speak3();
    } else if (mapLocation == 9 && fisherComplete == true) {
        vastaus1.hidden = true;
        vastaus2.hidden = true;
        document.getElementById("omaoutput").innerHTML = "I shouldn't bother him anymore.";
    } else if (mapLocation == 6 && toimi2 == 1 && toimi3 != 1) {
        document.getElementById("omaoutput").innerHTML = "So I should <strong>search </strong> for the hook around here.";
        vastaa.hidden = false;
        output.hidden = false;
        input.hidden = false;
    } else if (mapLocation == 10 && fisherComplete == true && speech4 == 1) {
        input.hidden = true;
        action = "talk";
        mapIcon.hidden = true;
        speak4()
        wizard()
    } else if (mapLocation == 0) {
        document.getElementById("omaoutput").innerHTML = "So you can get to the harbor trow here, I should write this down to the <strong>map</strong>.";
    } else if (mapLocation == 11 && wizardVisited == false) {
        document.getElementById("omaoutput").innerHTML = "I should come back later...";
        input.hidden = true;
    } else if (mapLocation == 11 && wizardVisited == true) {
        rent.hidden = false;
        document.getElementById("omaoutput").innerHTML = "I should <strong>rent </strong> a boat, so I can get to the island.";
    } else if (mapLocation == 3 && e == true && dragonDead == false) {
        omaoutput.innerHTML = "I should use my crossbow to kill the dragon";
        omaoutput.innerHTML += "<br>In your backpack: crossbow";
    } else if (mapLocation == 3 && dragonDead == true) {
        image.src = "images/deadDragon.jpg"
    } else if (mapLocation == 10 && dragonDead == true && speech5 == 1) {
        input.hidden = true;
        action = "talk";
        mapIcon.hidden = true;
        speak5()
    } else if (mapLocation == 5 && gateOpen == true) {
        image.src = "images/portti.jpg"
        PosEND.hidden = false;
        vastaa.hidden = true;
        output.hidden = true;
    } else if (mapLocation == 8 && fisherComplete && toimi5 != 1) {
        document.getElementById("omaoutput").innerHTML = "I should go <strong>inside.</strong>";
        vastaa.hidden = false;
        output.hidden = true;
        input.hidden = false;
    } else if (mapLocation == 13) {
        input.hidden = true;
    } else {
        input.hidden = false;
        action = "";
    }


    // Käy läpi esineiden lokaatio-array ja etsi vastaavuutta
    for (i = 0; i < items.length; i++) {
        if (mapLocation == 0 || mapLocation == 1 || mapLocation == 2 || mapLocation == 3 || mapLocation == 4 || mapLocation == 5 || mapLocation == 7 || mapLocation == 9) {
            output.innerHTML = "";
        } else if (mapLocation === itemLocations[i]) {
            output.innerHTML = "<br>You see an item: <strong>" + items[i] + "</strong>";
        }
    }
    output.innerHTML += "<br><em>" + gameMessage + "</em>";
}