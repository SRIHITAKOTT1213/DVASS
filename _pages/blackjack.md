---
layout: none
tite: Blackjack Simulation
permalink: /blackjack/
---
<style>
    .big_ol_cont {
        justify-content:center;
        width: 75%;
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
        border-color:#9a613b;
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

    table { margin: auto }

    .question_btn {
        background: none;
        border: none;
    }

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
<body style="height:900px;">
    <button class="question_btn" data-modal-target="#modal"><img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/question.png?raw=true" width="30" height="30" style="transform:translate(300%, 300%);"></button>
        <div class="modal" id="modal">
            <div class="modal-header">
                <div class="title">Blackjack Instructions</div>
                <button data-close-button class="close-button">&times;</button>
            </div>
            <div class="modal-body">
                <ol>
                    <li><b>Objective:</b> The objective of blackjack is to have a hand value closer to 21 than the dealer's hand value, without exceeding 21.</li>
                    <li><b>Card Values:</b> In blackjack, numbered cards (2-10) are worth their face value, face cards (J, Q, K) are worth 10, and an Ace can be worth either 1 or 11, depending on what benefits the player the most.</li>
                    <li><b>Player's Choices:</b></li>
                        <ul>
                            <li> Hit: Request an additional card to increase the hand value.</li>
                            <li>Stay: Decline any more cards and keep the current hand value.</li>
                        </ul>
                    <li><b>Determining the Winner:</b> Once the dealer has completed their turn, the hands are compared to determine the winner. The following outcomes are possible:</li>
                        <ul>
                            <li>If the player's hand value exceeds 21, they lose the round.</li>
                            <li>If the dealer's hand value exceeds 21, the player wins.</li>
                        </ul>
                </ol>
            </div>
        </div>
        <div id="overlay"></div>
    <div class="big_ol_cont">
        <br>
        <div style="text-align:center;justify-content:center">
            <h2>Dealer Hand</h2>
            <table id="dealer_card_table" class="card_table_d">
                <tr id="dealer_cards">
                </tr>
            </table>
            <h2>Player Hand</h2>
            <table id="dealer_card_table" class="card_table_p">
                <tr id="player_cards">
                </tr>
            </table>
        </div>
        <div id="buttons" style="margin:auto;text-align:center;justify-content:center">
            <br>
            <div id="result_text" style="margin-bottom:1em"></div>
            <button id="hit_button" class="select_button" style="display:none;margin-bottom:1em;" onclick="buttonHit()">Hit</button><button id="stay_button" class="select_button" style="display:none" onclick="stay()">Stay</button>
            <button id="play_again" class="select_button" style="display:block" onclick="gameStart()">Play</button><button id="finish_game" class="select_button" style="display:none" onclick="record()">Finish and Submit Score</button>
            <input id="username_input" class="db_input" type="text" style="display:none"><button id="submit_button" class="select_button" style="display:none" onclick="submitInfo()">Submit</button>
        </div>
        <br>
    </div>
</body>
</html>

<script> 
    const dealerRow = document.getElementById("dealer_cards");
    const playerRow = document.getElementById("player_cards");
    const hitButton = document.getElementById("hit_button");
    const stayButton = document.getElementById("stay_button");
    const playButton = document.getElementById("play_again");
    const finishButton = document.getElementById("finish_game");
    const usernameInput = document.getElementById("username_input");
    const resultBox = document.getElementById("result_text");
    const submitButton = document.getElementById("submit_button");

    const blackjackRead = "https://dvasscasino.duckdns.org/api/blackjack/";
    const blackjackCreate = "https://dvasscasino.duckdns.org/api/blackjack/create";
    const blackjackUpdate = "https://dvasscasino.duckdns.org/api/blackjack/update";
    const readOptions = {method: 'GET', mode: 'cors', cache: 'default', credentials: 'omit', headers: {'Content-Type': 'application/json'}};

    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');
    
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closModal(modal)
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


    // card class
    class Card {
        constructor(suit, val) {
            this.suit = suit;
            this.value = val;
            if (val == 11) {
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
        adjustAce() {
            if (this.kind == "Ace") {
                this.value = 1;
            }
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
                for (let v = 2; v < 15; v++) {
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

    function giveDealerCard(card) {
        if (card != "face_down") {
            const newCard = document.createElement("td");
            const newCardImage = document.createElement("img");
            newCardImage.src = "{{ site.baseurl }}/images/blackjack/" + card.kind + card.suit + ".png";
            newCardImage.width = "100";
            newCardImage.height = "150"; 
            newCard.appendChild(newCardImage);
            dealerRow.appendChild(newCard);
        } else {
            const newCard = document.createElement("td");
            const newCardImage = document.createElement("img");
            newCardImage.src = "{{ site.baseurl }}/images/blackjack/facedown_card.png";
            newCardImage.width = "100";
            newCardImage.height = "150";
            newCard.appendChild(newCardImage);
            //newCard.innerHTML = "Face-Down Card";
            newCard.id = "facedown_card";
            dealerRow.appendChild(newCard);
        }
    };

    //initiating globals
    var currentStreak = 0;
    var playerHand = [];
    var dealerHand = [];
    var deck = new Deck();
    var d2 = "secret";

    function gameStart() {
        hitButton.style = "display:none";
        stayButton.style = "display:none";
        playButton.style = "display:none";
        finishButton.style = "display:none";
        usernameInput.style = "display:none";
        submitButton.style = "display:none";
        resultBox.innerHTML = "";
        playerHand = [];
        dealerHand = [];
        dealerRow.innerHTML = "";
        playerRow.innerHTML = "";
        deck = new Deck();
        deck.shuffle();

        console.log("Initial draws:"); // giving the initial draws
        var d1 = dealerHit();
        giveDealerCard(d1);
        console.log("The dealer draws: " + d1);
        var p1 = playerHit()
        console.log("You receive: " + p1);
        givePlayerCard(p1);
        d2 = dealerHit();
        giveDealerCard("face_down");
        console.log("The dealer draws a face-down card...");
        var p2 = playerHit();
        console.log("You receive: " + p2);
        givePlayerCard(p2)
        console.log(playerHand);
        if (takesum(playerHand) == 21) { // instant player win on blackjack potentially
            if (takesum(dealerHand) != 21) {
                console.log("WOW! A blackjack! You win!");
                win();
                return;
            } else {
                console.log("Both you and the dealer have blackjack. It's a push! Your streak stays the same.");
                fpush();
                return;
            }
        };
        console.log("--------------------------------")
        console.log("Dealer's hand: " + d1 + ", ???")
        playerTurn() // once player turn finishes, the dealer turn occurs
    };

    function takesum(hand) {
        let sm = 0;
        for (let i = 0; i < hand.length; i++) {
            var pcard = hand[i];
            if (pcard.value > 11) {
                sm = sm + 10;
            } else {
                sm = sm + pcard.value;
            };
        };
        if (sm > 21) {
            for (let i = 0; i < hand.length; i++) {
                var pcard = hand[i];
                if (pcard.value == 11) {
                    pcard.adjustAce();
                    return takesum(hand);
                };
            };
        };
        console.log(sm)
        return sm
    };

    function playerHit() {
        var res = deck.draw();
        if ((res.value == 11) && (takesum(playerHand) + 11 > 21)) { // adjusting ace if it would break
            res.adjustAce();
        };
        playerHand.push(res);
        return res
    }

    function buttonHit() {
        var res = deck.draw();
        if ((res.value == 11) && (takesum(playerHand) + 11 > 21)) { // adjusting ace if it would break
            res.adjustAce();
        };
        playerHand.push(res);
        givePlayerCard(res);
        playerTurn();
    }

    function dealerHit() {
        var res = deck.draw();
        if ((res.value == 11) && (takesum(dealerHand) + 11 > 21)) { // adjusting ace if it would break
            res.adjustAce();
        };
        dealerHand.push(res);
        return res
    }

    function handDisplay(hand) {
        var disp_hand = [];
        for (let i = 0; i < hand.length; i++) {
            var thisCard = hand[i];
            var shown = thisCard.kind + " of " + thisCard.suit;
            disp_hand.push(shown);
        };
        return disp_hand;
    };

    function playerTurn() {
        console.log("Your hand: " + String(handDisplay(playerHand)));
        if (takesum(playerHand) > 21) {
            console.log("You break! You lose.");
            lose();
            return
        };
        hitButton.style = "display:block";
        stayButton.style = "display:block";
    }

    var faceDownRem = 'placeholder';

    function stay() {
        hitButton.style = "display:none";
        stayButton.style = "display:none";
        console.log("Dealer's hand: " + String(handDisplay(dealerHand)));
        faceDownRem = document.getElementById("facedown_card");
        faceDownRem.remove();
        giveDealerCard(dealerHand[1]);
        dealerTurn();
    }

    function dealerTurn() {
        if (takesum(dealerHand) > 16) {
            console.log("The dealer stays.");
        } else {
            var dealDraw = dealerHit();
            giveDealerCard(dealDraw);
            if (takesum(dealerHand) > 21) {
                console.log("The dealer breaks! You win.");
                win();
                return;
            }
            dealerTurn();
            return;
        };
        if (takesum(playerHand) > takesum(dealerHand)) {
            console.log("Congratulations! You won with a hand worth " + String(takesum(playerHand)) + "!");
            win();
        } else if (takesum(dealerHand) > takesum(playerHand)) {
            console.log("Too bad! You lost to the dealer's hand, worth "  + String(takesum(dealerHand)) + "!");
            lose();
        } else {
            console.log("It's a push! You keep your streak.");
            fpush();
        };
        return
    }

    function win() {
        hitButton.style = "display:none";
        stayButton.style = "display:none";
        currentStreak += 1;
        resultBox.innerHTML = "Congratulations! You won.";
        playButton.innerHTML = "Play Again";
        playButton.style = "display:block";
        finishButton.style = "display:block";
        return
    }
    function lose() {
        hitButton.style = "display:none";
        stayButton.style = "display:none";
        currentStreak = 0;
        resultBox.innerHTML = "Oh no! You lost.";
        playButton.innerHTML = "Play Again";
        playButton.style = "display:block";
        return
    }

    function fpush() {
        hitButton.style = "display:none";
        stayButton.style = "display:none";
        resultBox.innerHTML = "It's a push! You keep your streak.";
        playButton.innerHTML = "Play Again";
        playButton.style = "display:block";
        finishButton.style = "display:block";
        return
    }

    var storedStreak = 0;

    function record() {
        finishButton.style = "display:none";
        usernameInput.style = "display:block";
        resultBox.innerHTML = "Input a username for the leaderboard. (Current Streak: " + String(currentStreak) + ")";
        storedStreak = currentStreak;
        currentStreak = 0;
        submitButton.style = "display:block";
        console.log(String(currentStreak));
    }

    function submitInfo() {
        var unInput = usernameInput.value;
        if (unInput.length > 20) {
            resultBox.innerHTML = "That username is too long! Please keep your username within 20 characters.";
            return;
        };
        usernameInput.style = "display:none";
        submitButton.style = "display:none";
        var scoreInput = storedStreak;
        var place = 1;
        console.log(unInput, scoreInput);
        fetch(blackjackRead, readOptions)
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
                        fetch(blackjackUpdate, putOptions)
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
                        resultBox.innerHTML = 'The user "' + user['username'] + '" already has a longer streak!';
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
                        fetch(blackjackCreate, postOptions)
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