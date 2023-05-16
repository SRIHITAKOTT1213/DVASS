---
title: Uno Simulation
layout: none
permalink: /uno/
---
<style>
    .big_ol_cont {
        justify-content:center;
        margin:auto;
        border:20px solid;
        border-color:black;
        border-radius:200px;
        background-color: #FFF000;
        font-family:serif;
    }

    .card_table_o {
        width: 300px;
        height: 50px;
        border: 10px solid;
        border-radius: 150px;
        background-color: #FF5D5D;
        margin:auto;
        padding:30px 20px 20px 20px;
        justify-content:center;
        text-align:center;
        font-size:16px;
    }

    .card_table_p {
        width: 1000px;
        height: 300px;
        border: 10px solid;
        border-radius: 150px;
        background-color: #00B2FF;
        padding:20px;
        justify-content:center;
        text-align:center;
        font-size:16px;
    }

    .select_table {
        margin:auto;
        text-align:center;
        justify-content:center;
        align-items:center;
        padding:5px;
        font-family:serif;
    }

    .db_input {
        justify-content:center;
        margin:auto;
        border: 5px solid;
        border-radius: 10px;
        background-color:white;
    }

    .select_button {
        margin:auto;
        text-align:center;
        justify-content:center;
        border: 5px solid;
        border-radius:5px;
        width:120px;
        height:60px;
        background-color:#04DE00;
        font-size:18px;
        font-family:serif;
    }

    .green_border {
        max-width: 200px;
        border: 8px solid;
        border-radius: 150px;
        background-color: #04DE00;
        padding: 20px;
        padding-top:30px;
        padding-bottom:10px;
        justify-content:center;
        text-align:center;
        align-items:center;
        font-size:16px;
        display: none;
    }

    #the_deck {
        margin:auto;
        text-align:center;
        justify-content:center;
        display: none;
        width: 50px;
        height: 50px;
        background-color: white;
        border: 5px solid;
        cursor:pointer;
    }

    table { margin: auto }
</style>

<div class="big_ol_cont">
    <br>
    <div style="text-align:center;justify-content:center">
        <h2>Opponent Hand</h2>
        <div id="opponent_cards" class="card_table_o">
            The opponent's number of cards will be displayed here.
        </div>
        <h2>Player Hand</h2>
        <table id="player_card_table" class="card_table_p">
            <tr id="player_cards_r1">
            </tr>
            <tr id="player_cards_r2">
            </tr>
        </table>
    </div>
    <div id="buttons" style="margin:auto;text-align:center;justify-content:center">
        <br>
        <button id="start_button" class="select_button" onclick="startGame()">Start</button>
        <div id="the_deck" onclick="drawCard(playerHand, true)">deck</div>
        <br>
        <div id="green_border" class="green_border">
            <div id="current_card"></div>
            <br>
            <div id="result_text"></div>
        </div>
        <br>
    </div>
    <br>
</div>

<script>
    const startButton = document.getElementById("start_button");
    const greenBox = document.getElementById("green_border");
    const currentCard = document.getElementById("current_card");
    const resultBox = document.getElementById("result_text");
    const oCardTable = document.getElementById("opponent_card_table");
    const oCardRow = document.getElementById("opponent_cards");
    const pCardTable = document.getElementById("player_card_table");
    const pCardRow1 = document.getElementById("player_cards_r1");
    const pCardRow2 = document.getElementById("player_cards_r2");
    const deckElement = document.getElementById("the_deck");
    var newCard = "";
    var rowList = [];
    var playerHand = [];
    var pDispHand = [];
    var opponentHand = [];
    var oDispHand = [];
    var topCard = "placeholder";

    // card class
    class Uno {
        constructor(color, val) {
            this.color = color;
            this.value = val;
            if (val == 11) {
                this.kind = "DrawTwo";
            } else if (val == 12) {
                this.kind = "Reverse";
            } else if (val == 13) {
                this.kind = "Skip";
            } else {
                this.kind = String(val);
            }
        };
        cshow() {
            return this.color + " " + this.kind;
        };
    };

    // deck class
    class Deck {
        constructor() {
            this.cards = [];
            this.build();
            this.shuffle();
        }
        build() {
            const colors = ["Red", "Yellow", "Green", "Blue"];
            for (let c in colors) {
                for (let v = 1; v < 14; v++) {
                    this.cards.push(new Uno(colors[c], v));
                }
            }
        };
        shuffle() {
            for (var i = this.cards.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = temp;
            }
        }
        draw() {
            return this.cards.pop();
        }
    };

    var theDeck = "placeholder";
    var thisCard = "placeholder";
    var discardPile = [];

    function disShuffle(pile) {
            for (var i = pile.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = temp;
            }
        }

    function startGame() {
        deckElement.style = "display:block";
        startButton.style = "display:none";
        greenBox.style = "display:inline-block";
        theDeck = new Deck();
        for (let i = 0; i < 7; i++) {
            // initial player draws
            thisCard = theDeck.draw();
            playerHand.push(thisCard);
            pDispHand.push(thisCard.cshow());

            // initial opponent draws
            thisCard = theDeck.draw();
            opponentHand.push(thisCard);
            oDispHand.push(thisCard.cshow());
        }
        buildTable(pDispHand, true);
        buildTable(oDispHand, false);
        topCard = theDeck.draw();
        discardPile.push(topCard);
        currentCard.innerHTML = "Top Card: " + topCard.cshow();
    };


    // function to build tables
    // table is true if it is the player table; false otherwise
    function buildTable(cardList, player) {
        if (player) {
            rowList = [pCardRow1, pCardRow2];
        } else {
            oCardRow.innerHTML = "Cards remaining: " + String(cardList.length)
            return
        };
        for (rowID in rowList) {
            rowList[rowID].innerHTML = "";
        };
        if (cardList.length <= 12) {
            for (cardID in cardList) {
                newCard = document.createElement("td");
                newCardImage = document.createElement("img");
                newCardImage.src = "{{ site.baseurl }}/images/uno/" + cardList[cardID].kind + cardList[cardID].color + ".png";
                console.log(newCardImage.src); 
                newCardImage.width = "100";
                newCardImage.height = "150"; 
                newCard.appendChild(newCardImage);
                //newCard.innerHTML = cardList[cardID];
                if (player == true) {
                    newCard.setAttribute('onclick', 'playCard(' + String(cardID) + ')');
                    newCard.style = 'cursor:pointer;title:"Click to play your ' + cardList[cardID] + '!"';
                }
                rowList[0].appendChild(newCard);
            };
        } else {
            for (let i = 0; i < 12; i++) {
                newCard = document.createElement("td");
                newCardImage = document.createElement("img");
                newCardImage.src = "{{ site.baseurl }}/images/uno/" + cardList[i].kind + cardList[i].color + ".png";
                newCardImage.width = "100";
                newCardImage.height = "150"; 
                newCard.appendChild(newCardImage);
                //newCard.innerHTML = cardList[i];
                if (player) {
                    newCard.setAttribute('onclick', 'playCard(' + String(i) + ')');
                    newCard.style = 'cursor:pointer;title:"Click to play your ' + cardList[cardID] + '!"';
                }
                rowList[0].appendChild(newCard);
            };
            for (let i = 12; i < cardList.length; i++) {
                newCard = document.createElement("td");
                newCardImage = document.createElement("img");
                newCardImage.src = "{{ site.baseurl }}/images/uno/" + cardList[i].kind + cardList[i].color + ".png";
                newCardImage.width = "100";
                newCardImage.height = "150"; 
                newCard.appendChild(newCardImage);
                //newCard.innerHTML = cardList[i];
                if (player) {
                    newCard.setAttribute('onclick', 'playCard(' + String(i) + ')');
                    newCard.style = 'cursor:pointer;title:"Click to play your ' + cardList[cardID] + '!"';
                }
                rowList[1].appendChild(newCard);
            }
        }
    }

    function drawCard(hand, player) {
        console.log("The player draws.");
        if (theDeck.cards.length > 0) {
            var tempNewCard = theDeck.draw();
            hand.push(tempNewCard);
            if (player) {
                pDispHand.push(tempNewCard.cshow());
            } else {
                oDispHand.push(tempNewCard.cshow());
            }
        } else {
            if (discardPile.length > 4) {
                resultBox.innerHTML = "The deck was empty! The discard pile was shuffled.";
                topCard = discardPile.pop();
                disShuffle(discardPile);
                theDeck.cards = discardPile;
                discardPile = [topCard];
                drawCard(hand, player);
            } else {
                resultBox.innerHTML = "Maximum draws exceeded. Play with what you have!";
                return;
            }
        }
        if (player) {
            buildTable(pDispHand, true);
        } else {
            buildTable(oDispHand, false);
        }
    }

    function playCard(cardID) {
        if ((playerHand[cardID].value == topCard.value) || (playerHand[cardID].color == topCard.color)) {
            resultBox.innerHTML = "";
            playedCard = playerHand.splice(cardID, 1)[0];
            pDispHand.splice(cardID, 1);
            console.log(playedCard);
            discardPile.push(playedCard)
            topCard = playedCard;
            currentCard.innerHTML = "Top Card: " + topCard.cshow();
            buildTable(pDispHand, true);
            winCheck();
            if (playedCard.value == 11) {
                drawCard(opponentHand, false)
                drawCard(opponentHand, false)
            } else if (playedCard.value > 11) {
                return;
            };
            oppTurn();
        } else {
            resultBox.innerHTML = playerHand[cardID].cshow() + " cannot be played right now!";
        };
    }

    function oppCard(cardID) {
        resultBox.innerHTML = "";
        playedCard = opponentHand.splice(cardID, 1)[0];
        oDispHand.splice(cardID, 1);
        console.log(playedCard);
        discardPile.push(playedCard);
        topCard = playedCard;
        currentCard.innerHTML = "Top Card: " + topCard.cshow();
        buildTable(oDispHand, false);
        winCheck();
        if (playedCard.value == 11) {
            drawCard(playerHand, true)
            drawCard(playerHand, true)
        } else if (playedCard.value > 11) {
            oppTurn();
        };
    }

    function oppTurn() {
        var colorValues = {
            "Red":0,
            "Blue":0,
            "Yellow":0,
            "Green":0
        };
        var numbers = [];
        for (card of opponentHand) {
            colorValues[card.color] += 1;
            numbers.push(card.value);
        };
        // order: [red, blue, yellow, green]
        var sortingList = [colorValues["Red"], colorValues["Blue"], colorValues["Yellow"], colorValues["Green"]].sort();
        var favorList = [];
        var i = 0;
        while (favorList.length < 4) {
            for (key in colorValues) {
                if (sortingList[i] == colorValues[key] && !(favorList.includes(key))) {
                    favorList.push(key);
                };
            }
            i += 1;
        };
        for (i = 3; i >= 0; i--) {
            if (topCard.color == favorList[i]) {
                for (cardID in opponentHand) {
                    if (opponentHand[cardID].color == favorList[i]) {
                        oppCard(cardID);
                        return;
                    }
                }
            }
            for (cardID in opponentHand) {
                if (topCard.value == opponentHand[cardID].value) {
                    oppCard(cardID);
                    return;
                };
            };
        };
        drawCard(opponentHand, false);
        oppTurn();
        return;
    };

    function winCheck() {
        if (playerHand.length == 1 || opponentHand.length == 1) {
            resultBox.innerHTML = "Uno!"
        }
        if (playerHand.length == 0) {
            deckElement.style = "display:none";
            resultBox.innerHTML = "Congratulations! You win! Your final time is [implemented later]. [create score input]";
            startButton.innerHTML = "Play Again";
            startButton.style = "display:inline-block";
        } else if (opponentHand.length == 0) {
            deckElement.style = "display:none";
            resultBox.innerHTML = "Oh no! You lost.";
            startButton.innerHTML = "Play Again";
            startButton.style = "display:inline-block";
        }
    }
</script>