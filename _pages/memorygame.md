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


<html>
    <body>
        <div class="container">
            <ul id="container" class="cards">
            </ul>
        </div>
    </body>
</html>

<script>
    //memory game js
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
                    return shuffle();
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


    const container = document.getElementById("container");

    function createCardElement(imageLink) {
        var card = document.createElement('li');
        var outer_div = document.createElement('div');
        var inner_div = document.createElement('div');
        var image = document.createElement('img');
        image.src = imageLink;
        card.classList.add("card");
        outer_div.classList.add("front-view");
        inner_div.classList.add("back-view"); 
        outer_div.classList.add("view");
        inner_div.classList.add("view"); 

        inner_div.appendChild(image);
        outer_div.appendChild(inner_div);
        card.appendChild(outer_div);
        return card;
    };

    function shuffle() {
        console.log("i have been called");
        // array of cards to be shuffled
        let image_array = [
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/777.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/777.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/cards.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/cards.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/chance.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/chance.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/cherry.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/cherry.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/coins.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/coins.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/darts.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/darts.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/dealer.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/dealer.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/diamond.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/diamond.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/dice.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/dice.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/goldcard.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/goldcard.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/heart.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/heart.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/jackpot.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/jackpot.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/lemon.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/lemon.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/luck.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/luck.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/poker.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/poker.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/slot.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/slot.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/spades.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/spades.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/wheel.png?raw=true",
            "https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/wheel.png?raw=true"
        ]

        // While there remain elements to shuffle.
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
        //array.sort(() => Math.random() > 0.5 ? 1 : -1);

        // loop through the array
        array.forEach(index => {
            ele = createCardElement(image_array[index])
            container.appendChild(ele)
        }

        );
    };

    function startProgram() {
        container.innerHTML = "";
        shuffle();
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', flipCard)

            // card.classList.add('flip')
        });
    }

    
    window.onload = startProgram;
</script>