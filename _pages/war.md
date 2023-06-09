---
layout: none
tite: War Simulation
permalink: /war/
---
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
<body style="height:900px;">
    <button class="question_btn" data-modal-target="#modal"><img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/question.png?raw=true" width="30" height="30" style="transform:translate(300%, 300%);"></button>
        <div class="modal" id="modal">
            <div class="modal-header">
                <div class="title">War Instructions</div>
                <button data-close-button class="close-button">&times;</button>
            </div>
            <div class="modal-body">
                <ol>
                    <li><b>Objective:</b> The objective of war is to win all the cards in the deck. </li>
                    <li><b>How to play:</b> Each round, hit the "Draw" button so both you and your opponent reveal the top card from your respective decks simultaneously. The player with the higher-ranking card wins the round and collects both cards, adding them to a win pile. This win pile will be shuffled and recycled into your card deck once that deck runs out. </li>
                    <li><b>WAR:</b> When players place down two cards of the same value, a war happens! Both players place down an additional 3 cards. The last card placed down is compared between the two players, and the player with the higher-ranking card wins all the cards on the table, including those from the war. If there is another war, the process of war is repeated until a winner is determined. </li>
                    <li><b>Card Values:</b> Ace is worth 1, numbered cards (2-10) are worth their face value, face card J is worth 11, face card Q is worth 12, and face card K is worth 13. </li>
                </ol>
            </div>
        </div>
        <div id="overlay"></div>
    <div class="big_ol_cont">
        <br>
        <div style="text-align:center;justify-content:center">
            <h2>Opponent</h2>
            <h3>Number of Cards</h3>
            <div id="opp_num"></div>
            <br>
            <table id="opp_card_table" class="card_table_d">
                <tr id="opp_cards">
                </tr>
            </table>
            <br>
            <br>
            <table id="opp_card_table" class="card_table_p">
                <tr id="you_cards">
                </tr>
            </table>
            <h2>You</h2>
            <h3>Number of Cards</h3>
            <div id="player_num"></div>
        </div>
        <div id="buttons" style="margin:auto;text-align:center;justify-content:center">
            <br>
            <img src="{{ site.baseurl }}/images/blackjack/facedown_card.png" id="face_down" style="display:none; cursor: pointer;" onclick="buttonDraw()"> 
            <button id="play_button" class="select_button" style="display:block" onclick="gameStart()">Play</button>
            <button id="finish_game" class="select_button" style="display:none" onclick="record()">Finish and Submit Score</button>
            <div id="win_text"></div>
            <input id="username_input" class="db_input" type="text" style="display:none">
            <button id="submit_button" class="select_button" style="display:none" onclick="submitInfo()">Submit</button>
        </div>
        <br>
        <div>
    </div>

<style>
    .big_ol_cont {
        justify-content:center;
        width: 80%;
        transform:translateY(10%);
        margin:auto;
        border:20px solid;
        border-color:#ccac00;
        border-radius:200px;
        background-color: #103d1c;
        color:white;
        font-family:serif;
    }

    .card_table_d {
        width: 1000px;
        height: 225px;
        border: 10px solid;
        border-radius: 150px;
        border-color: #699e42;
        background-color: #274510;
        padding:20px;
        justify-content:center;
        text-align:center;
        font-size:16px;
    }

    .card_table_p {
        width: 1000px;
        height: 225px;
        border: 10px solid;
        border-radius: 150px;
        border-color: #699e42;
        background-color: #274510;
        padding:20px;
        justify-content:center;
        text-align:center;
        font-size:16px;
    }

    .select_table {
        margin:auto;
        text-align:center;
        justify-content:center;
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
        border-color:#E2C550;
        width:120px;
        height:60px;
        background-color:#ccac00;
        font-size:17px;
        font-family:serif;
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: 200ms ease-in-out;
        border: 1px solid black;
        border-radius: 10px;
        z-index: 10;
        background-color: white;
        width: 700px;
        max-width: 80%;
    }

    .modal.active {
        transform: translate(-50%, -50%) scale(1);
    }

    .modal-header {
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid black;
    }

    ..modal-header .title {
        font-size: 1.25rem;
        font-weight: bold;
        color: black;
        text-align: center;
    }

    .modal-header .close-button {
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        font-size: 1.25rem;
        font-weight: bold;
    }

    .modal-body {
        padding: 10px 15px;
    }

    #overlay {
        position: fixed;
        opacity: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, ,5);
        transition: 200ms ease-in-out;
        pointer-events: none;
    }

    #overlay.active {
        pointer-events: all;
        opacity: 1;
    }

    #face_down {
        position: relative;
        width: 100;
        height: 150;
        margin: auto;
    }

    table { margin: auto }

    .question_btn {
        background: none;
        border: none;
    }
</style>

<script>
    const oppRow = document.getElementById("opp_cards");
    const playerRow = document.getElementById("you_cards");

    const faceDownCard = document.getElementById("face_down");

    const playButton = document.getElementById("play_button");
    const finishButton = document.getElementById("finish_game");
    const usernameInput = document.getElementById("username_input");
    const playerNum = document.getElementById("player_num");
    const oppNum = document.getElementById("opp_num");
    const submitButton = document.getElementById("submit_button");
    const winText = document.getElementById("win_text");

    const warRead = "https://dvasscasino.duckdns.org/api/war/";
    const warCreate = "https://dvasscasino.duckdns.org/api/war/create";
    const warUpdate = "https://dvasscasino.duckdns.org/api/war/update";
    const readOptions = {method: 'GET', mode: 'cors', cache: 'default', credentials: 'omit', headers: {'Content-Type': 'application/json'}};

    // card class
    class Card {
        constructor(suit, val) {
            this.suit = suit;
            this.value = val;
            if (val == 1) {
                this.kind = "Ace";
            } else if (val == 11) {
                this.kind = "Jack";
            } else if (val == 12) {
                this.kind = "Queen";
            } else if (val == 13) {
                this.kind = "King";
            } else {
                this.kind = String(val);
            }
        };
        cshow() {
            return this.kind + " of " + this.suit;
        };
    };

    // card test
    var tcard = new Card("Spades", 3);
    console.log(tcard.cshow());

    // deck class
    class Deck {
        constructor() {
            this.cards = [];
            this.build()
        }
        build() {
            const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
            for (let s in suits) {
                for (let v = 1; v < 14; v++) {
                    this.cards.push(new Card(suits[s], v));
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

    var playerHand = [];         
    var oppHand = [];
    var playerWinPile = [];
    var oppWinPile = [];
    var currentStreak = 0;
    var deck = "placeholder";
    var onTable = [];
    var drawing = false;
    var drawn = 0;

    function listShuffle(pile) {
        for (var i = pile.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = pile[i];
            pile[i] = pile[j];
            pile[j] = temp;
        };
        return pile;
    };

    function gameStart() {
        // show draw card and hide play button
        faceDownCard.style.display = "block";
        playButton.style.display = "none";
        finishButton.style["display"] = "none";
        oppRow.innerHTML = "";
        playerRow.innerHTML = "";

        // reset decks and piles
        playerHand = [];
        oppHand = [];
        playerWinPile = [];
        oppWinPile = [];
        onTable = [];

        // create and shuffle new deck
        deck = new Deck();
        deck.shuffle();

        // deal card to you and opp
        for (let i = 0; i < 25; i++) {
            playerHand.push(deck.draw());
            oppHand.push(deck.draw());
        }
        
        playerNum.innerHTML = String(playerHand.length);
        oppNum.innerHTML = String(oppHand.length);
    }

    function updateCounts() {
        playerNum.innerHTML = String(playerHand.length + playerWinPile.length);
        oppNum.innerHTML = String(oppHand.length + oppWinPile.length);
    }

    function checkDecks() {
        if (playerHand.length == 0) {
            if (playerWinPile.length == 0) {
                lose();
                return true;
            }
            playerHand = listShuffle(playerWinPile);
            playerWinPile = [];
        };
        if (oppHand.length == 0) {
            if (oppWinPile.length == 0) {
                win();
                return true;
            }
            oppHand = listShuffle(oppWinPile);
            oppWinPile = [];
        };
        updateCounts();
        return false
    }

    function giveCard(card, row) {
        const newCard = document.createElement("td");
        const newCardImage = document.createElement("img");
        if (card != "facedown") {
            newCardImage.src = "{{ site.baseurl }}/images/blackjack/" + card.kind + card.suit + ".png";
        } else {
            newCardImage.src = "{{ site.baseurl }}/images/blackjack/facedown_card.png";
        }
            newCardImage.width = "100";
            newCardImage.height = "150"; 
            newCard.appendChild(newCardImage);
            row.appendChild(newCard); //playerRow or oppRow
    }

    function buttonDraw() {
        // clear the card table first
        playerRow.innerHTML = "";
        oppRow.innerHTML = "";

        // each player drawing cards
        if (checkDecks()) {return};
        var playerSel = playerHand.pop();
        giveCard(playerSel, playerRow);
        onTable.push(playerSel);
        var oppSel = oppHand.pop();
        giveCard(oppSel, oppRow);
        onTable.push(oppSel);

        //compare the cards
        if (playerSel.value > oppSel.value) {
            for (card of onTable) {
                playerWinPile.push(card);
            }
            onTable = [];
            updateCounts();
            winText.innerHTML = "Your card beats the opponent's, so you take both from the table.";
            checkDecks();
            return;
        } else if (oppSel.value > playerSel.value) {
            for (card of onTable) {
                oppWinPile.push(card);
            }
            onTable = [];
            updateCounts();
            winText.innerHTML = "The opponent's card beats yours, so you lose your card.";
            checkDecks();
            return;
        } else {
            winText.innerHTML = "WAR! Draw three face-down cards and battle with the fourth face-up.";
            drawing = true;
            updateCounts();
            faceDownCard.setAttribute("onclick", "war()");
            return;
        }
    }

    function war() {
        if (drawing) {
            //give three face-down cards
            if (checkDecks()) {return};
            onTable.push(playerHand.pop());
            giveCard("facedown", playerRow);
            onTable.push(oppHand.pop());
            giveCard("facedown", oppRow);
            drawn++;
            if (drawn >= 3) {
                drawing = false;
                drawn = 0;
            }
            updateCounts();
            return;
        } else {
            if (checkDecks()) {return};
            var playerSel = playerHand.pop();
            onTable.push(playerSel);
            giveCard(playerSel, playerRow);
            var oppSel = oppHand.pop();
            onTable.push(oppSel);
            giveCard(oppSel, oppRow);

            //compare the cards
            if (playerSel.value > oppSel.value) {
                faceDownCard.setAttribute("onclick", "buttonDraw()");
                for (card of onTable) {
                    playerWinPile.push(card);
                }
                onTable = [];
                updateCounts();
                winText.innerHTML = "Your card wins, so you take all of the cards on the table!";
                checkDecks();
                return;
            } else if (oppSel.value > playerSel.value) {
                faceDownCard.setAttribute("onclick", "buttonDraw()");
                for (card of onTable) {
                    oppWinPile.push(card);
                }
                onTable = [];
                updateCounts();
                winText.innerHTML = "The opponent's card beats yours, so the opponent takes the cards on the table.";
                checkDecks();
                return;
            } else {
                winText.innerHTML = "WAR CONTINUES! Draw three face-down cards and battle with the fourth face-up.";
                drawing = true;
                updateCounts();
                return;
            }
        }
    }

    function lose() {
        currentStreak = 0;
        faceDownCard.style["display"] = "none";
        playerNum.innerHTML = "0";
        oppNum.innerHTML = "50";
        winText.innerHTML = "Uh oh! You lost. Your streak has been reset to 0.";
        playButton.innerHTML = "Play Again";
        playButton.style["display"] = "block";
    }

    function win() {
        currentStreak++;
        faceDownCard.style["display"] = "none";
        playerNum.innerHTML = "50";
        oppNum.innerHTML = "0";
        winText.innerHTML = "Yay, you won! You can play again to continue your streak or finish to record your streak on the leaderboard.";
        playButton.innerHTML = "Play Again";
        playButton.style["display"] = "block";
        finishButton.style["display"] = "block";
    }

    var storedStreak = 0;

    function record() {
        finishButton.style["display"] = "none";
        usernameInput.style["display"] = "block";
        submitButton.style["display"] = "block";
        winText.innerHTML = "You finished with a streak of " + String(currentStreak) + "! Input a username to submit to the leaderboard.";
        storedStreak = currentStreak;
        currentStreak = 0;
    }

    function submitInfo() {
        var unInput = usernameInput.value;
        if (unInput.length > 20) {
            winText.innerHTML = "That username is too long! Please keep your username within 20 characters.";
            return;
        };
        usernameInput.style = "display:none";
        submitButton.style = "display:none";
        var scoreInput = storedStreak;
        var place = 1;
        console.log(unInput, scoreInput);
        fetch(warRead, readOptions)
            // new fetch to update
            .then(response => {
            // response error handler
            if (response.status !== 200) {
                var errorMsg = 'Database response error: ' + response.status;
                console.log(errorMsg);
                winText.innerHTML = String(errorMsg);
                return;
            }
            response.json().then(data => {
                var testCopy = [...data];
                var testEnd = testCopy.length;
                for (var i = 0; i < testEnd; i++) {
                    var user = testCopy[i];
                    //determining place on the leaderboard based on new score
                    if (user['streak'] >= scoreInput) {
                        place++;
                    };
                    if ((user['username'] == unInput) && (user['streak'] < scoreInput)) {
                        // if the user achieved a new record, the user with that username is updated
                        console.log("User found: " + user['username']);
                        var body = {
                            'id':user['id'],
                            'username':user['username'],
                            'streak':scoreInput
                        };
                        var putOptions = {method: 'PUT', body: JSON.stringify(body), headers: {'Content-Type':'application/json', 'Authorization': 'Bearer my-token'}};
                        console.log(body);
                        fetch(warkUpdate, putOptions)
                            .then(response => {
                                if (response.status !== 200) {
                                    var errorMsg = 'Database response error: ' + response.status;
                                    console.log(errorMsg);
                                    winText.innerHTML = String(errorMsg);
                                }
                                response.json().then(data => {
                                    console.log(data);
                                    winText.innerHTML = "Congratulations! You've submitted a new record to the leaderboard. You're now #" + String(place) + " on the leaderboard!";
                                });
                            })
                        return;
                        break;
                    } else if (user['username'] == unInput) {
                        console.log("User found: " + user['username']);
                        winText.innerHTML = 'The user "' + user['username'] + '" already has a longer streak!';
                        return;
                        break;
                    } else if (i == (testEnd - 1)) {
                        // if the user is submitting for the first time
                        var body = {
                            'username':unInput,
                            'streak':scoreInput
                        };
                        var postOptions = {method: 'POST', body: JSON.stringify(body), headers: {'Content-Type':'application/json', 'Authorization': 'Bearer my-token'}};
                        console.log(body);
                        fetch(warCreate, postOptions)
                            .then(response => {
                                if (response.status !== 200) {
                                    var errorMsg = 'Database response error: ' + response.status;
                                    console.log(errorMsg);
                                    winText.innerHTML = String(errorMsg);
                                }
                                response.json().then(data => {
                                    console.log(data);
                                    winText.innerHTML = "Congratulations! You've submitted a new record to the leaderboard. You're now #" + String(place) + " on the leaderboard!";
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

    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })

    function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
    }

    function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
</script>