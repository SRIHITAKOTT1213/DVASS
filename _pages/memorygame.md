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
        height: 50px;
        width: 50px;
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
    <body>
        <div class="container">
            <ul class="cards">
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/777.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/cards.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/chance.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/cherry.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/coins.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/darts.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/dealer.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/diamond.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/dice.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/goldcard.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/heart.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/jackpot.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/lemon.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/luck.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/poker.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/slot.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/spades.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/wheel.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/777.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/cards.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/chance.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/cherry.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/coins.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/darts.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/dealer.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/diamond.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/dice.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/goldcard.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/heart.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/jackpot.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/lemon.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/luck.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/poker.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/slot.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/spades.png?raw=true" alt="card-image">
                    </div>
                </li>
                <li class="card">
                    <div class="view front-view"></div>
                    <div class="view back-view">
                        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/wheel.png?raw=true" alt="card-image">
                    </div>
                </li>
        </div>
    </body>
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