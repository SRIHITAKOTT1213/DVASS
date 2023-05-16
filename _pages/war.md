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
        <table id="dealer_card_table" class="card_table_d">
            <tr id="dealer_cards">
            </tr>
        </table>
        <table id="dealer_card_table" class="card_table_p">
            <tr id="player_cards">
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

//function gameStart()

// Card class representing a playing card
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}

// Deck class representing a deck of cards
class Deck {
  constructor() {
    this.cards = [];
    this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    this.ranks = [
      "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"
    ];

    // Initialize the deck with all 52 cards
    for (const suit of this.suits) {
      for (const rank of this.ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }
  }

  shuffle() {
    // Fisher-Yates shuffle algorithm
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal() {
    if (this.cards.length > 0) {
      return this.cards.pop();
    }
    return null;
  }
}

// Player class representing a player in the game
class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  addCards(cards) {
    this.cards.push(...cards);
  }

  playCard() {
    if (this.cards.length > 0) {
      return this.cards.shift();
    }
    return null;
  }
}

// Function to compare ranks of two cards
function compareRanks(card1, card2) {
  const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  return ranks.indexOf(card1.rank) - ranks.indexOf(card2.rank);
}

// Main game function
function playWarGame() {
  const deck = new Deck();
  deck.shuffle();

  const player1 = new Player("Player 1");
  const player2 = new Player("Player 2");

  // Deal cards to players
  while (deck.cards.length > 0) {
    player1.addCards([deck.deal()]);
    player2.addCards([deck.deal()]);
  }

  // Play the game until one player runs out of cards
  let round = 1;
  while (player1.cards.length > 0 && player2.cards.length > 0) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();

    console.log(`Round ${round}:`);
    console.log(`${player1.name} plays ${card1}`);
    console.log(`${player2.name} plays ${card2}`);

    const rankComparison = compareRanks(card1, card2);
    if (rankComparison > 0) {
      console.log(`${player1.name} wins the round!`);
      player1.addCards([card1, card2]);
    } else if (rankComparison < 0) {
      console.log(`${player2.name} wins the round!`);
      player2.addCards([card1, card2]);
</script>