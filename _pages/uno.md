---
title: Uno Simulation
layout: none
permalink: /uno/
---
<style>
    .big_ol_cont {
        justify-content:center;
        width: 75%;
        transform:translateY(13%);
        margin:auto;
        border:20px solid;
        border-color:black;
        border-radius:200px;
        background-color: #FFF000;
        font-family:serif;
    }

    .card_table_o {
        width:50%;
        padding-top:1%;
        padding-bottom:4%;
        border: 10px solid;
        border-radius: 150px;
        background-color: #FF5D5D;
        margin:auto;
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
        border-radius: 20px;
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
        cursor:pointer;
    }

    #full_of_colors {
        justify-content:center;
        text-align:center;
        width: 400px;
        font-size:16px;
        display: none;
        align-items:center;
        align-content:;
        row-gap: 10px;
        margin:auto;
    }

    .for_red {
        margin:auto;
        text-align:center;
        justify-content:center;
        width: 50px;
        height: 50px;
        background-color: #FF5D5D;
        border: 5px solid;
        cursor:pointer;
    }

    .for_blue {
        margin:auto;
        text-align:center;
        justify-content:center;
        width: 50px;
        height: 50px;
        background-color: #00B2FF;
        border: 5px solid;
        cursor:pointer;
    }

    .for_yellow {
        margin:auto;
        text-align:center;
        justify-content:center;
        width: 50px;
        height: 50px;
        background-color: #FFF000;
        border: 5px solid;
        cursor:pointer;
    }

    .for_green {
        margin:auto;
        text-align:center;
        justify-content:center;
        width: 50px;
        height: 50px;
        background-color: #04DE00;
        border: 5px solid;
        cursor:pointer;
    }

    table { margin: auto }
</style>
<html>
<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/index.css">
<div>
    <header>
        <a href="{{ site.baseurl }}/index" class="logo">DVASS</a>
        <ul>
            <li><a href="{{ site.baseurl }}/index">Home</a></li>
            <li><a href="{{ site.baseurl }}/games">Games</a></li>
            <li><a href="{{ site.baseurl }}/leaderboard">Leaderboard</a></li>
            <li><a href="{{ site.baseurl }}/about">About</a></li>
        </ul>
    </header>
</div>
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
        <div id="the_deck" onclick="drawCard(playerHand, true)"><img src="{{ site.baseurl }}/images/uno/facedown.png" width="100" height="150" cursor="pointer"></div>
        <br>
        <div id="green_border" class="green_border">
            <div id="current_card"></div>
            <br>
            <div id="result_text"></div>
            <input id="username_input" class="db_input" type="text" style="display:none"><button id="submit_button" class="select_button" style="display:none" onclick="submitInfo()">Submit</button>
        </div>
        <br>
        <div id="full_of_colors">
            <div id="for_red" class="for_red" onclick="wildResponse('Red')"></div><div id="for_blue" class="for_blue" onclick="wildResponse('Blue')"></div><div id="for_yellow" class="for_yellow" onclick="wildResponse('Yellow')"></div><div id="for_green" class="for_green" onclick="wildResponse('Green')"></div>
        </div>
        <br>
    </div>
    <br>
</div>
</html>
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
    var ableToPlay = true;
    var timeSet = "placeholder";
    var constant = 0;
    var seconds = 0;
    var minutes = 0;
    const colorsBox = document.getElementById("full_of_colors");
    const usernameInput = document.getElementById("username_input");
    const submitButton = document.getElementById("submit_button");

    const unoRead = "https://dvasscasino.duckdns.org/api/uno/";
    const unoCreate = "https://dvasscasino.duckdns.org/api/uno/create";
    const unoUpdate = "https://dvasscasino.duckdns.org/api/uno/update";

    const readOptions = {method: 'GET', mode: 'cors', cache: 'default', credentials: 'omit', headers: {'Content-Type': 'application/json'}};

    // card class
    class Uno {
        constructor(color, val) {
            this.color = color;
            this.value = val;
            if (val == 10 && color != "Wild") {
                this.kind = "Draw Two";
            } else if (val == 10) {
                this.kind = "Draw Four";
            } else if (val == 11) {
                this.kind = "Reverse";
            } else if (val == 12) {
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
                for (let v = 1; v < 13; v++) {
                    this.cards.push(new Uno(colors[c], v));
                }
            }
            for (let c in colors) {
                for (let v = 1; v < 10; v++) {
                    this.cards.push(new Uno(colors[c], v));
                }
            }
            for (let i = 0; i < 4; i++) {
                this.cards.push(new Uno("Wild", 1));
            };
            for (let i = 0; i < 4; i++) {
                this.cards.push(new Uno("Wild", 10));
            };
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

    function incrementTime() {
        constant++; //constant second count separate from seconds
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        if (constant >= 5999) {
            clearInterval(timeSet);
        };
    };

    function runTimer(boolean) {
        if (boolean) {
            seconds = 0;
            minutes = 0;
            constant = 0;
            timeSet = setInterval(incrementTime, 1000);
        } else {
            clearInterval(timeSet);
        }
    }

    var theDeck = "placeholder";
    var thisCard = "placeholder";
    var discardPile = [];

    function disShuffle(pile) {
        for (var i = pile.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = pile[i];
            pile[i] = pile[j];
            pile[j] = temp;
        };
        return pile;
    };

    function startGame() {
        runTimer(true);
        usernameInput.style = "display:none;";
        submitButton.style = "display:none;";
        var validDraw = true;
        deckElement.style = "display:block";
        startButton.style = "display:none";
        greenBox.style = "display:inline-block";
        resultBox.innerHTML = "";
        playerHand = [];
        pDispHand = [];
        opponentHand = [];
        oDispHand = [];
        topCard = "placeholder";
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
        buildTable(playerHand, true);
        buildTable(opponentHand, false);
        var tempCheck = theDeck.draw();
        if (tempCheck.color == "Wild") {
            validDraw = false;
            theDeck.cards.push(tempCheck);
            while (!validDraw) {
                theDeck.shuffle();
                tempCheck = theDeck.draw();
                if (tempCheck.color != "Wild") {
                    topCard = tempCheck;
                    validDraw = true;
                } else {
                    theDeck.cards.push(tempCheck);
                };
            };
        } else {
            topCard = tempCheck;
        };
        discardPile.push(topCard);
        currentCard.innerHTML = "";
        var firstCardTop = document.createElement("img");
        firstCardTop.src = "{{ site.baseurl }}/images/uno/" + topCard.kind + topCard.color + ".png";
        firstCardTop.width = "100";
        firstCardTop.height = "150";
        currentCard.appendChild(firstCardTop);
    };

    // function to build tables
    // table is true if it is the player table; false otherwise
    function buildTable(cardList, player) {
        if (player) {
            rowList = [pCardRow1, pCardRow2];
        } else {
            oCardRow.innerHTML = "Cards remaining: " + String(cardList.length);
            return;
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
                if (player) {
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
                theDeck.cards = disShuffle(discardPile);
                discardPile = [topCard];
                drawCard(hand, player);
            } else {
                resultBox.innerHTML = "Maximum draws exceeded. Play with what you have!";
                return;
            }
        }
        if (player) {
            buildTable(playerHand, true);
        } else {
            buildTable(opponentHand, false);
        }
    }

    var boxes = ["placeholder"];

    function wildSetting() {
        ableToPlay = false;
        currentCard.innerHTML = "Select a color for the Wild Card.";
        colorsBox.style = "display:flex";
    }

    function wildResponse(color) {
        topCard = new Uno(color, 13);
        currentCard.innerHTML = "";
        var firstCardTop = document.createElement("img");
        firstCardTop.src = "{{ site.baseurl }}/images/uno/" + topCard.kind + topCard.color + ".png";
        firstCardTop.width = "100";
        firstCardTop.height = "150";
        currentCard.appendChild(firstCardTop);
        colorsBox.style = "display:none";
        resultBox.innerHTML = "";
        buildTable(playerHand, true);
        ableToPlay = true;
        if (winCheck()) {
            return
        } else {
            oppTurn();
        };
    };

    function playCard(cardID) {
        if (ableToPlay) {
            if ((playerHand[cardID].value == topCard.value) || (playerHand[cardID].color == topCard.color) || (playerHand[cardID].color == "Wild")) {
                resultBox.innerHTML = "";
                playedCard = playerHand.splice(cardID, 1)[0];
                pDispHand.splice(cardID, 1);
                console.log(playedCard);
                discardPile.push(playedCard)
                if (playedCard.color == "Wild") {
                    if (playedCard.value == 10) {
                        drawCard(opponentHand, false);
                        drawCard(opponentHand, false);
                        drawCard(opponentHand, false);
                        drawCard(opponentHand, false);
                    };
                    wildSetting();
                    return;
                };
                topCard = playedCard;
                currentCard.innerHTML = "";
                var firstCardTop = document.createElement("img");
                firstCardTop.src = "{{ site.baseurl }}/images/uno/" + topCard.kind + topCard.color + ".png";
                firstCardTop.width = "100";
                firstCardTop.height = "150";
                currentCard.appendChild(firstCardTop);
                buildTable(playerHand, true);
                if (winCheck()) {
                    return;
                };
                if (playedCard.value == 10) {
                    drawCard(opponentHand, false)
                    drawCard(opponentHand, false)
                } else if (playedCard.value > 10) {
                    return;
                };
                oppTurn();
            } else {
                resultBox.innerHTML = playerHand[cardID].cshow() + " cannot be played right now!";
            };
        } else {
            return;
        }
    }

    function oppCard(cardID) {
        resultBox.innerHTML = "";
        playedCard = opponentHand.splice(cardID, 1)[0];
        oDispHand.splice(cardID, 1);
        console.log(playedCard);
        discardPile.push(playedCard);
        if (playedCard.color == "Wild") {
            if (playedCard.value == 10) {
                drawCard(playerHand, true);
                drawCard(playerHand, true);
                drawCard(playerHand, true);
                drawCard(playerHand, true);
            };
            topCard = new Uno(favorList[0], 13);
            currentCard.innerHTML = "";
            var firstCardTop = document.createElement("img");
            firstCardTop.src = "{{ site.baseurl }}/images/uno/" + topCard.kind + topCard.color + ".png";
            firstCardTop.width = "100";
            firstCardTop.height = "150";
            currentCard.appendChild(firstCardTop);
            resultBox.innerHTML = "";
            buildTable(opponentHand, false);
            winCheck();
            return;
        };
        topCard = playedCard;
        currentCard.innerHTML = "";
        var firstCardTop = document.createElement("img");
        firstCardTop.src = "{{ site.baseurl }}/images/uno/" + topCard.kind + topCard.color + ".png";
        firstCardTop.width = "100";
        firstCardTop.height = "150";
        currentCard.appendChild(firstCardTop);
        buildTable(opponentHand, false);
        winCheck();
        if (playedCard.value == 10) {
            drawCard(playerHand, true)
            drawCard(playerHand, true)
        } else if (playedCard.value > 10) {
            oppTurn();
        };
    }

    var favorList = [];

    function oppTurn() {
        var colorValues = {
            "Red":0,
            "Blue":0,
            "Yellow":0,
            "Green":0
        };
        var numbers = [];
        for (card of opponentHand) {
            try {
                colorValues[card.color] += 1;
                numbers.push(card.value);
            } catch (err) {
                continue;
            }
        };
        // order: [red, blue, yellow, green]
        var sortingList = [colorValues["Red"], colorValues["Blue"], colorValues["Yellow"], colorValues["Green"]].sort();
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
        for (cardID in opponentHand) {
            if (opponentHand[cardID].color == "Wild") {
                oppCard(cardID);
                return;
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
            runTimer(false);
            deckElement.style = "display:none";
            if (seconds < 10) {
                seconds = "0" + String(seconds);
            } else {seconds = String(seconds)};
            resultBox.innerHTML = "Congratulations! You win! Your final time is " + String(minutes) + ":" + seconds + "."; //variable constant used for leaderboard submission
            usernameInput.style = "display:inline-block;";
            submitButton.style = "display:inline-block;";
            startButton.innerHTML = "Play Again";
            startButton.style = "display:inline-block";
            return true;
        } else if (opponentHand.length == 0) {
            runTimer(false);
            pCardRow1.innerHTML = "";
            pCardRow2.innerHTML = "";
            deckElement.style = "display:none";
            resultBox.innerHTML = "Oh no! You lost.";
            startButton.innerHTML = "Play Again";
            startButton.style = "display:inline-block";
            return true;
        }
        return false;
    }

    function submitInfo() {
        var unInput = usernameInput.value;
        if (unInput.length > 20) {
            resultBox.innerHTML = "That username is too long! Please keep your username within 20 characters.";
            return;
        };
        usernameInput.style = "display:none";
        submitButton.style = "display:none";
        var scoreInput = constant;
        var place = 1;
        console.log(unInput, scoreInput);
        fetch(unoRead, readOptions)
            // new fetch to update
            .then(response => {
            // response error handler
            if (response.status !== 200) {
                var errorMsg = 'Database response error: ' + response.status;
                console.log(errorMsg);
                resultBox.innerHTML = String(errorMsg);
                return;
            }
            response.json().then(data => {
                var testCopy = [...data];
                var testEnd = testCopy.length;
                for (var i = 0; i < testEnd; i++) {
                    var user = testCopy[i];
                    //determining place on the leaderboard based on new score
                    if (user['seconds'] <= scoreInput) {
                        place++;
                    };
                    if ((user['username'] == unInput) && (user['seconds'] > scoreInput)) {
                        // if the user achieved a new record, the user with that username is updated
                        console.log("User found: " + user['username']);
                        var body = {
                            'id':user['id'],
                            'username':user['username'],
                            'seconds':scoreInput
                        };
                        var putOptions = {method: 'PUT', body: JSON.stringify(body), headers: {'Content-Type':'application/json', 'Authorization': 'Bearer my-token'}};
                        console.log(body);
                        fetch(unoUpdate, putOptions)
                            .then(response => {
                                if (response.status !== 200) {
                                    var errorMsg = 'Database response error: ' + response.status;
                                    console.log(errorMsg);
                                    resultBox.innerHTML = String(errorMsg);
                                }
                                response.json().then(data => {
                                    console.log(data);
                                    resultBox.innerHTML = "Congratulations! You've submitted a new record to the leaderboard. You're now #" + String(place) + " on the leaderboard!";
                                });
                            })
                        return;
                        break;
                    } else if (user['username'] == unInput) {
                        console.log("User found: " + user['username']);
                        resultBox.innerHTML = 'The user "' + user['username'] + '" already has a faster record!';
                        return;
                        break;
                    } else if (i == (testEnd - 1)) {
                        // if the user is submitting for the first time
                        var body = {
                            'username':unInput,
                            'seconds':scoreInput
                        };
                        var postOptions = {method: 'POST', body: JSON.stringify(body), headers: {'Content-Type':'application/json', 'Authorization': 'Bearer my-token'}};
                        console.log(body);
                        fetch(unoCreate, postOptions)
                            .then(response => {
                                if (response.status !== 200) {
                                    var errorMsg = 'Database response error: ' + response.status;
                                    console.log(errorMsg);
                                    resultBox.innerHTML = String(errorMsg);
                                }
                                response.json().then(data => {
                                    console.log(data);
                                    resultBox.innerHTML = "Congratulations! You've submitted a new record to the leaderboard. You're now #" + String(place) + " on the leaderboard!";
                                })
                            })
                        return;
                        break;
                    }
                };
                return;
            })
        })
    }
</script>