---
layout: none
tite: Memory Game Simulation
permalink: /memorygame2/
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
        background: #274510;
    }

    .card .back-view img{
        max-width: 60px;
    }

    .container{
        height: 720px;
        width: 720px;
        background: linear-gradient(to right, #FFDB58, #699e42);
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
        border-radius: 25px;
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

<!--
<li class="card">
    <div class="view front-view"></div>
    <div class="view back-view">
        <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/[card name].png?raw=true" alt="card-image">
    </div>
</li>
-->

<html>
    <body>
        <div class="container">
            <ul id="cards" class="cards">
                <!--CARDS WILL BE ADDED HERE-->
            </ul>
        </div>
    </body>
</html>

<script>
    const imageList = ["777", "cards", "chance", "cherry", "coins", "darts", "dealer", "diamond", "dice", "goldcard", "heart", "jackpot", "lemon", "luck", "poker", "slot", "spades", "wheel"];
    const fullImageList = [].concat(imageList, imageList);
    for (let i = 36; i > 0; i--) {
        randIndex = Math.floor(Math.random() * i);
        currentImage = fullImageList.splice(randIndex, 1)[0];
        document.getElementById("cards").innerHTML += '<li class="card"><div class="view front-view"></div><div class="view back-view"><img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/' + currentImage + '.png?raw=true" alt="card-image"></div></li>';
    };

    //memory game js
    const cards = document.querySelectorAll('.card');
    let cardOne, cardTwo;
    let dis_Deck = false;
    let matchedCard = 0;
    var firstCard = true;
    var constant = 0;
    var seconds = 0;
    var minutes = 0;

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

    function flipCard(e){
        if (firstCard) {
            runTimer(true);
            firstCard = false;
        };

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
            if (matchedCard === 18){
                runTimer(false);
                console.log(constant);
                setTimeout(() => {
                    return shuffCard();
                }, 1200);
            }
            
            cardOne.removeEventListener('click', flipCard);
            cardTwo.removeEventListener('click', flipCard);
            cardOne = cardTwo = '';
            dis_Deck = false;
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

    cards.forEach(card => {
        card.addEventListener('click', flipCard)

    // card.classList.add('flip')
    });