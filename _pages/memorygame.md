---
layout: none
tite: Memory Game Simulation
permalink: /memorygame/
---

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    .card .back-view img{
        max-width: 60px;
    }

    .container{
        height: 720px;
        width: 720px;
        background: linear-gradient(to right, #fc6767, #ec008c);
        border-radius: 10px;
        padding: 25px;
        box-shadow: 0 0 10px;
    }

    .cards,
    .card,
    .view{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cards{
        height: 100%;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .cards .card{
        height: calc(100% / 6 - 10px);
        width: calc(100% / 6 - 10px);
        position: relative;
        perspective: 800px;
        transform-style: preserve-3d;
    }

    .cards .card .view {
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 25px 0;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.616);
        position: absolute;
        transition: transform .25s linear;
        backface-visibility: hidden;
        pointer-events: none;
        user-select: none;
    }

    .cards .back-view{
        /* display: none;*/
        transform: rotateY(-180deg);
    }
    .card.flip .back-view{
        transform: rotateY(0);
    }
    .card.flip .front-view{
        transform: rotateY(180deg);
    }

    .card.vibration{
        animation: vibration 0.38s ease-in-out; 
    }

    @keyframes vibration {
        0%,
        100%{
            transform: translateX(0);
        }
        20%{
            transform: translateX(-13px);
        }
        40%{
            transform: translateX(13px);
        }
        60%{
            transform: translateX(-8px);
        }
        80%{
            transform: translateX(8px);
        }
    }
</style>


<html>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Memory Game</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="memory_game.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div class="container">
            <ul class="cards">
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/777.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/cards.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/chance.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/cherry.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/coins.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/darts.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/dealer.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/diamond.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/dice.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/goldcard.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/heart.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/jackpot.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/lemon.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/luck.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/poker.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/slot.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/spades.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/wheel.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/777.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/cards.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/chance.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/cherry.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/coins.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/darts.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/dealer.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/diamond.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/dice.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/goldcard.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/heart.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/jackpot.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/lemon.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/luck.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/poker.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/slot.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/spades.png" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="images/memory/wheel.png" alt="card-image">
                    </div>
                </li>
        <script src="memory_game.js"></script>
    </body>
</html>
</html>

<script>
    const cards = document.querySelectorAll('.card');
    let cardOne, cardTwo;
    let dis_Deck = false;
    let matchedCard = 0;

    function flipCard(e){
        let clickedCard = e.target;
        
        if(clickedCard !== cardOne && !dis_Deck) {
            clickedCard.classList.add('flip');
            
            if(!cardOne) {
                return cardOne = clickedCard;
            }

            cardTwo = clickedCard;
            dis_Deck = true;

            let cardOneImg = cardOne.querySelector('img').src,
            cardTwoImg = cardTwo.querySelector('img').src;
            matchCards(cardOneImg, cardTwoImg);
        }
    }

    function matchCards(img1, img2){
        if(img1 == img2){ 
            
            matchedCard++;
            if(matchedCard == 40){
                setTimeout(() => {
                    return shuffCard();
                }, 1200);
            }
            
            cardOne.removeEventListener('click', flipCard);
            cardTwo.removeEventListener('click', flipCard);
            cardOne = cardTwo = '';
            return dis_Deck = false;
        }
        else{
            setTimeout(() => {
                cardOne.classList.add('vibration');
                cardTwo.classList.add('vibration');
            }, 400);
            setTimeout(() => {
                cardOne.classList.remove('vibration', 'flip');
                cardTwo.classList.remove('vibration', 'flip');
                cardOne = cardTwo = '';
                dis_Deck = false;
            }, 1200);
        }
    }

    function shuffCard(){
        matchedCard = 0;
        cardOne = cardTwo = '';

        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18]
        array.sort(() => Math.random() > 0.5 ? 1 : -1);

        cards.forEach((card) => {
            card.classList.remove('flip');
            card.addEventListener('click', flipCard);
        
        });
    }
    shuffCard();


    cards.forEach(card => {
        card.addEventListener('click', flipCard)

    // card.classList.add('flip')
    });
</script>