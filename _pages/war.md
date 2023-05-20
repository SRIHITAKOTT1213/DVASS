---
layout: none
tite: War Simulation
permalink: /war/
---
<style>
    .big_ol_cont {
        justify-content:center;
        margin:auto;
        border:20px solid;
        border-color:#ccac00;
        border-radius:200px;
        background-color: #103d1c;
        color:white;
        font-family:serif;
    }

    .card_table_d {
        width: 750px;
        height: 300px;
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
        width: 750px;
        height: 300px;
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

    table { margin: auto }
</style>

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
        <button id="draw_button" class="select_button" style="display:none" onclick="buttonDraw()">Draw</button>
        <button id="play_again" class="select_button" style="display:block" onclick="gameStart()">Play</button><button id="finish_game" class="select_button" style="display:none" onclick="record()">Finish and Submit Score</button>
        <input id="username_input" class="db_input" type="text" style="display:none"><button id="submit_button" class="select_button" style="display:none">Submit</button>
    </div>
    <br>
</div>

<script>
    const oppRow = document.getElementById("opp_cards");
    const playerRow = document.getElementById("you_cards");
    const stayButton = document.getElementById("stay_button");
    const playButton = document.getElementById("play_again");
    const finishButton = document.getElementById("finish_game");
    const usernameInput = document.getElementById("username_input");
    const playerNum = document.getElementById("player_num");
    const oppNum = document.getElementById("opp_num");
    const submitButton = document.getElementById("submit_button");

    // card class
    class Card {
        constructor(suit, val) {
            this.suit = suit;
            this.value = val;
            if (val == 1) {
                this.kind = "Ace";
            } else if (val == 12) {
                this.kind = "Jack";
            } else if (val == 13) {
                this.kind = "Queen";
            } else if (val == 14) {
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

    function givePlayerCard(card) {
        const newCard = document.createElement("td");
        const newCardImage = document.createElement("img");
        newCardImage.src = "{{ site.baseurl }}/images/blackjack/" + card.kind + card.suit + ".png";
        newCardImage.width = "100";
        newCardImage.height = "150";
        console.log(newCardImage.src); 
        newCard.appendChild(newCardImage);
        playerRow.appendChild(newCard);
    };

    function giveOppCard(card) {
        if (card != "face_down") {
            const newCard = document.createElement("td");
            const newCardImage = document.createElement("img");
            newCardImage.src = "{{ site.baseurl }}/images/blackjack/" + card.kind + card.suit + ".png";
            newCardImage.width = "100";
            newCardImage.height = "150"; 
            newCard.appendChild(newCardImage);
            oppRow.appendChild(newCard);
        } else {
            const newCard = document.createElement("td");
            const newCardImage = document.createElement("img");
            newCardImage.src = "{{ site.baseurl }}/images/blackjack/facedown_card.png";
            newCardImage.width = "100";
            newCardImage.height = "150";
            newCard.appendChild(newCardImage);
            //newCard.innerHTML = "Face-Down Card";
            newCard.id = "facedown_card";
            oppRow.appendChild(newCard);
        }
    };

    var playercard_num = 26;
    var oppcard_num = 26;
    var playerList = [];         
    var oppList = [];

    function gameStart() {
        oppRow.innerHTML = "";
        playerRow.innerHTML = "";
        player_num.innerHTML = playercard_num;
        opp_num.innerHTML = oppcard_num;

        // create and shuffle new deck
        var deck = new Deck();
        deck.shuffle();

        // deal card to you and opp
        for (let i = 0; i < 26; i++) {
            playerList.push(deck.draw());
            oppList.push(deck.draw());
        }

        // show draw button and hide play button 
        document.getElementById("draw_button").style.display = "block";
        playButton.style.display = "none";
    }

    function buttonDraw() {
        // draw card from deck for you and opp
        var playerCard = playerList[0];
        var oppCard = oppList[0];

        // display drawn card
        givePlayerCard(playerCard);
        giveOppCard(oppCard);

        // Compare the values of the drawn cards
        if (playerCard.value > oppCard.value) {
            playercard_num += 1;
            oppcard_num -= 1;
        } else if (playerCard.value < oppCard.value) {
            oppcard_num += 1;
            playercard_num -= 1;;
        } else {
            resultBox.innerHTML = "Tie! Put down 3 cards.";
        }

        // Check if the deck is empty
        if (deck.cards.length === 0) {
            // Hide the "Draw" button and show the "Finish and Submit Score" button
            document.getElementById("draw_button").style.display = "none";
            finishButton.style.display = "block";
            usernameInput.style.display = "block";
            submitButton.style.display = "block";
        }
    }

    function record() {
        // Get the username input
        const username = usernameInput.value;

        // Here, you can implement the logic to record the score or perform any other actions
        // For simplicity, let's just log the username and the number of cards remaining in the deck
        console.log("Username: " + username);
        console.log("Number of Cards Remaining: " + deck.cards.length);
    }
</script>