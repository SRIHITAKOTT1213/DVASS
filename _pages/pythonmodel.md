---
layout: page
title: Blackjack Python Model
permalink: /pythonmodel/
---

In certain lessons, this code will be referenced as a Python version of the simulation. The code for it is found below.

```python
import random
from IPython.display import clear_output as clr

class Card:
    def __init__(self, suit, val):
        self.suit = suit
        self.val = val
        if val == 11:
            self.kind = "Ace"
        elif val == 12:
            self.kind = "Jack"
        elif val == 13:
            self.kind = "Queen"
        elif val == 14:
            self.kind = "King"
        else:
            self.kind = str(self.val)

    def show(self):
        return f"{self.kind} of {self.suit}"
    
    def ace_adj(self):
        if self.kind == "Ace":
            self.val = 1

class Deck:
    def __init__(self):
        self.cards = []
        self.build()

    def build(self):
        for suit in ["Spades", "Clubs", "Diamonds", "Hearts"]:
            for val in range(2, 15):
                self.cards.append(Card(suit, val))
    
    def show(self):
        card_disp = [card.show() for card in self.cards]
        return card_disp
    
    def shuffle(self):
        random.shuffle(self.cards)

    def draw_card(self):
        return self.cards.pop()

deck = Deck()
deck.shuffle()

player_chips = 100

def game_start():
    clr(wait=True)
    global player_hand #initializing hands and deck
    global dealer_hand
    global deck
    global p_bet
    deck = Deck()
    deck.shuffle()
    player_hand = []
    dealer_hand = []
    p_bet = bet(player_chips) #getting the player bet

    print("Initial draws:") #giving the initial draws
    d1 = hit(dealer_hand)
    print(f"The dealer draws: {d1}")
    p1 = hit(player_hand)
    print(f"You receive: {p1}")
    d2 = hit(dealer_hand)
    print("The dealer draws a face-down card...")
    p2 = hit(player_hand)
    print(f"You receive: {p2}")
    if sum(player_hand) == 21: #instant player win on blackjack potentially
        if sum(dealer_hand) != 21:
            print("WOW! A blackjack! You win!")
            win(p_bet)
            play_again()
            return
        else:
            print("Both you and the dealer have blackjack, so it's a bust! Keep your bet.")
            play_again()
            return
    print("--------------------------------")
    print(f"Dealer's hand: {d1}, ???")
    player_turn() #once player turn finishes, the dealer turn occurs

    play_again()

def bet(chips):
    print(f"Current chips: {chips}")
    b = input(f"How much would you like to bet? (Input an integer {str(player_chips)} or less.)")
    try:
        if int(b) <= chips:
            return int(b)
        else:
            print("Invalid bet.")
            bet(chips)
    except:
        print("Invalid bet.")
        bet(chips)

def sum(hand):
    sm = 0
    for card in hand:
        if card.val > 11:
            sm += 10
        else:
            sm += card.val
    if sm > 21:
        for card in hand:
            if card.val == 11:
                card.ace_adj()
                return sum(hand)
    return sm

def hit(hand):
    res = deck.draw_card()
    if (res.val == 11) and (sum(hand) + 11 > 21): #adjusting ace if it would break
        res.ace_adj()
    hand.append(res)
    return res.show()

def hand_display(hand):
    disp_hand = []
    for card in hand:
        disp_hand.append(card.show())
    return ", ".join(disp_hand)

def player_turn():
    print(f"Your hand: {hand_display(player_hand)}")
    if sum(player_hand) > 21:
        print("You break! You lose.")
        lose(p_bet)
        return
    rsp = input("Would you like to hit (h) or stay (s)? (input either option)")
    if rsp == "h":
        received = hit(player_hand)
        print(f"You drew a {received}!")
        player_turn()
    elif rsp == "s":
        print("You stand.")
        dealer_turn()
    else:
        print('Invalid input. Input "h" to hit or "s" to stand.')
        player_turn()

def dealer_turn():
    print(f"Dealer's hand: {hand_display(dealer_hand)}")
    if sum(dealer_hand) > 16:
        print("The dealer stays.")
        pass
    else:
        print(f"The dealer draws: {hit(dealer_hand)}")
        if sum(dealer_hand) > 21:
            print("The dealer breaks! You win.")
            win(p_bet)
            return
        dealer_turn()
        return
    if sum(player_hand) > sum(dealer_hand):
        print(f"Congratulations! You won with a hand worth {sum(player_hand)}!")
        win(p_bet)
    elif sum(dealer_hand) > sum(player_hand):
        print(f"Too bad! You lost to the dealer's hand, worth {sum(dealer_hand)}.")
        lose(p_bet)
    else:
        print("It's a push! You keep your bet.")
    return

def win(bet):
    global player_chips
    player_chips += bet
    return

def lose(bet):
    global player_chips
    player_chips -= bet
    return

def play_again():
    if player_chips != 0:
            pa = input('Would you like to play again? (Input "y" for yes and "n" for no.)')
            if pa.lower() == "y":
                game_start()
            else:
                print(f"You finished with {str(player_chips)} chips!")
                return
    else:
        print("You lost all of your chips! Better luck next time.")
        return

game_start()
```