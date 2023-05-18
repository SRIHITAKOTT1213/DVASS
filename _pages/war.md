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
        background-color: #A16414;
        color:white;
        font-family:serif;
    }

    .card_table_d {
        width: 750px;
        height: 300px;
        border: 10px solid;
        border-radius: 150px;
        border-color: #68410C;
        background-color: #D1841E;
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
        border-color: #68410C;
        background-color: #D1841E;
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
        <table id="opp_card_table" class="card_table_d">
            <tr id="opp_cards">
            </tr>
        </table>
        <table id="opp_card_table" class="card_table_p">
            <tr id="you_cards">
            </tr>
        </table>
        <h2>You</h2>
        <h3>Number of Cards</h3>
    </div>
    <div id="buttons" style="margin:auto;text-align:center;justify-content:center">
        <br>
        <div id="result_text"></div>
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
    const resultBox = document.getElementById("result_text");
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

    // deck test
    var tdeck = new Deck();
    tdeck.shuffle();
    console.log(tdeck.cards);

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
</script>