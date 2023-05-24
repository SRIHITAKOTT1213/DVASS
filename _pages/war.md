---
layout: none
tite: War Simulation
permalink: /war/
---
<html>
<body>
    <button data-modal-target="#modal"><img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/question.png"></button>
        <div class="modal" id="modal">
            <div class="modal-header">
                <div class="title">War Instructions</div>
                <button data-close-button class="close-button">&times;</button>
            </div>
            <div class="modal-body">
                <ol>
                    <li><b>Objective:</b> The objective of war is to win all the cards in the deck. </li>
                    <li><b>How to play:</b> Each round, hit the "Draw" button so both you and your opponent reveal the top card from your respective decks simulataneously. The plyaer with the higher-ranking card wins the round and collects both cards, adding them to a win pile. This win pile will be shuffled and recycled into your card deck once that deck runs out. </li>
                    <li><b>WAR:</b> When players place down two cards of the same value, a war happens! Both players place down an additional 2 cards. The last card placed down is compared between the two players, and the player with the higher-ranking card wins all the cards on the table, including those from the war. If there is another war, the process of war is repeated until a winner is determined. </li>
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
            <button id="draw_button" class="select_button" style="display:none" onclick="buttonDraw();moveCardUp()">Draw</button>
            <div id="win_text"></div>
            <button id="play_again" class="select_button" style="display:block" onclick="gameStart()">Play</button><button id="finish_game" class="select_button" style="display:none" onclick="record()">Finish and Submit Score</button>
            <input id="username_input" class="db_input" type="text" style="display:none"><button id="submit_button" class="select_button" style="display:none">Submit</button>
        </div>
        <br>
        <div>
    </div>
    <img src="{{ site.baseurl }}/images/blackjack/facedown_card.png" id="faceDownCard" onclick="moveCardUp()">
</body>
</html>

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
        width: 500px;
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

    #faceDownCard {
        position: relative;
        width: 100;
        height: 150;
        transition: transform 0.3s ease;
    }
/*
    .moveUp {
        transform: translate(50px, 50px);
    }
*/
    table { margin: auto }
</style>

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
    const winText = document.getElementById("win_text");

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

    function moveCardUp() {
        var facedown = document.getElementById("faceDownCard");
        facedown.style.transform = "translate(800px, -400px)";

        setTimeout(function() {
            facedown.style.display = "none";
        }, 250);

        // facedown.classList.add("moveUp");
    }

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

    var playerList = [];         
    var oppList = [];
    var playerWinPile = [];
    var oppWinPile = [];
    var playercard_num = 0;
    var oppcard_num = 0;
    var deck = "placeholder";

    function updateCardCount() {
        playercard_num = playerList.length + playerWinPile.length;
        oppcard_num = oppList.length + oppWinPile.length;
    }

    function gameStart() {
        oppRow.innerHTML = "";
        playerRow.innerHTML = "";
        player_num.innerHTML = playercard_num;
        opp_num.innerHTML = oppcard_num;

        // create and shuffle new deck
        deck = new Deck();
        deck.shuffle();

        // deal card to you and opp
        for (let i = 0; i < 26; i++) {
            playerList.push(deck.draw());
            oppList.push(deck.draw());
        }

        updateCardCount();
        
        player_num.innerHTML = playercard_num;
        opp_num.innerHTML = oppcard_num;

        // show draw button and hide play button 
        document.getElementById("draw_button").style.display = "block";
        playButton.style.display = "none";
    }

    function givePlayerCard(card) {
        const newCard = document.createElement("td");
        const newCardImage = document.createElement("img");
        newCardImage.src = "{{ site.baseurl }}/images/blackjack/" + card.kind + card.suit + ".png";
        newCardImage.width = "100";
        newCardImage.height = "150";
        console.log(newCardImage.src); 
        newCard.appendChild(newCardImage);
        playerRow.appendChild(newCard);

        // animation trigger
        setTimeout(function() {
            newCardImage.classList.add("move-up");
        }, 100);
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

            // animation trigger
            setTimeout(function() {
                newCardImage.classList.add("move-down");
            }, 100);
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

    function disShuffle(pile) {
        for (var i = pile.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = pile[i];
            pile[i] = pile[j];
            pile[j] = temp;
        };
        return pile;
    };

    var inWar = false;
    var onTable = [];

    function buttonDraw() {
        if (playerList.length == 0){
            playerList = disShuffle(playerWinPile);
            playerWinPile = [];
        } else if (oppList.length==0){
            oppList = disShuffle(oppWinPile);
            oppWinPile = [];
        }
        if (!(inWar)) {
            oppRow.innerHTML = "";
            playerRow.innerHTML = "";

            // draw card from deck for you and opp
            var playerCard = playerList.pop();
            var oppCard = oppList.pop();
            onTable.push(playerCard)
            onTable.push(oppCard)

            // display drawn card
            
            givePlayerCard(playerCard);
            giveOppCard(oppCard);

            // Compare the values of the drawn cards
            if (playerCard.value > oppCard.value) {
                winText.innerHTML = "You won! You take the cards on the table."
                for (card of onTable) {
                    playerWinPile.push(card);
                }
                onTable = [];
            } else if (playerCard.value < oppCard.value) {
                winText.innerHTML = "The opponent won, so they take the cards on the table."
                for (card of onTable) {
                    oppWinPile.push(card);
                }
                onTable = [];
            } else {
                // WAR LATER
                inWar = true;
                winText.innerHTML = "WAR! Put down 2 cards.";
            }
        } else {
            for (let i = 0; i < 2; i++) {
                var randwarPlayerCard = playerList.pop();
                var randwarOppCard = oppList.pop();
                onTable.push(randwarPlayerCard);
                onTable.push(randwarOppCard);
                givePlayerCard(randwarPlayerCard);
                giveOppCard(randwarOppCard);
                if (i == 1) {
                    var warPlayerCard = randwarPlayerCard;
                    var warOppCard = randwarOppCard;
                }
            } if (warPlayerCard.value > warOppCard.value) {
                winText.innerHTML = "You won the war! You take the cards on the table.";
                for (card of onTable) {
                    playerWinPile.push(card);
                }
                onTable = [];
                inWar = false;
            } else if (warPlayerCard.value < warOppCard.value) {
                winText.innerHTML = "Opponent won the war! They take the cards on the table.";
                for (card of onTable) {
                    oppWinPile.push(card);
                }
                onTable = [];
                inWar = false;
            } else {
                winText.innerHTML = "Another WAR! Put down 2 more cards.";
            }
        }

        updateCardCount();
        player_num.innerHTML = playercard_num;
        opp_num.innerHTML = oppcard_num;

        // Check if the deck is empty
        if (playercard_num.length == 0 || oppcard_num.length == 0) {
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