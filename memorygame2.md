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
        max-height:900px;
        width: 720px;
        transform:translateY(10px);
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

<html style="height:1000px;">
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
    <body>
        <div class="container">
            <ul id="cards" class="cards">
                <!--CARDS WILL BE ADDED HERE-->
            </ul>
            <div id="results_container" style="background-color:#FFDB58;border-radius:8px;display:none;">
                <div id="result_box" style="margin:auto;margin-top:1em;font-family:'Trebuchet MS',sans-serif;color:white;display:none;"></div>
                <input id="username_input" class="db_input" type="text" style="display:none;border:none;background-color:white;color:black;border-radius:8px;"><button id="submit_button" style="display:none;border:none;background-color:white;color:black;border-radius:8px;" onclick="submitInfo()">Submit</button>
            </div>
        </div>
    </body>
</html>

<script>
    // shuffling the cards
    const imageList = ["777", "cards", "chance", "cherry", "coins", "darts", "dealer", "diamond", "dice", "goldcard", "heart", "jackpot", "lemon", "luck", "poker", "slot", "spades", "wheel"];
    const fullImageList = [].concat(imageList, imageList);
    for (let i = 36; i > 0; i--) {
        randIndex = Math.floor(Math.random() * i);
        currentImage = fullImageList.splice(randIndex, 1)[0];
        document.getElementById("cards").innerHTML += '<li class="card"><div class="view front-view"></div><div class="view back-view"><img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory/' + currentImage + '.png?raw=true" alt="card-image"></div></li>';
    };

    //memory game js
    const cards = document.querySelectorAll('.card');
    const resultsContainer = document.getElementById('results_container');
    const resultBox = document.getElementById('result_box');
    const usernameInput = document.getElementById('username_input');
    const submitButton = document.getElementById('submit_button');
    let cardOne, cardTwo;
    let dis_Deck = false;
    let matchedCard = 0;
    var firstCard = true;
    var constant = 0;
    var seconds = 0;
    var minutes = 0;

    const memoryRead = "https://dvasscasino.duckdns.org/api/memory/";
    const memoryCreate = "https://dvasscasino.duckdns.org/api/memory/create";
    const memoryUpdate = "https://dvasscasino.duckdns.org/api/memory/update";
    const readOptions = {method: 'GET', mode: 'cors', cache: 'default', credentials: 'omit', headers: {'Content-Type': 'application/json'}};

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
            if (matchedCard == 18){
                runTimer(false);
                console.log(constant);
                matchedCard = 0;
                firstCard = true;
                return record();
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

    function record() {
        if (seconds < 10) {
            seconds = "0" + String(seconds);
        } else {seconds = String(seconds)};
        resultBox.style['display'] = "block";
        resultBox.innerHTML = "Congratulations! You've matched all of the tiles in " + String(minutes) + ":" + seconds + ". You can submit your time using the box below or play again by reloading the page.<br>";
        resultsContainer.style['display'] = "block";
        usernameInput.style['display'] = "block";
        submitButton.style['display'] = "block";
    }

    cards.forEach(card => {
        card.addEventListener('click', flipCard)

    // card.classList.add('flip')
    });

    function submitInfo() {
        var unInput = usernameInput.value;
        if (unInput.length > 20) {
            resultBox.innerHTML = "That username is too long! Please keep your username within 20 characters.";
            return;
        };
        usernameInput.style = "display:none";
        submitButton.style = "display:none";
        var scoreInput = constant;
        var place = 1;
        console.log(unInput, scoreInput);
        fetch(memoryRead, readOptions)
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
                    if (user['seconds'] <= scoreInput) {
                        place++;
                    };
                    if ((user['username'] == unInput) && (user['seconds'] > scoreInput)) {
                        // if the user achieved a new record, the user with that username is updated
                        console.log("User found: " + user['username']);
                        var body = {
                            'id':user['id'],
                            'username':user['username'],
                            'seconds':scoreInput
                        };
                        var putOptions = {method: 'PUT', body: JSON.stringify(body), headers: {'Content-Type':'application/json', 'Authorization': 'Bearer my-token'}};
                        console.log(body);
                        fetch(memoryUpdate, putOptions)
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
                        resultBox.innerHTML = 'The user "' + user['username'] + '" already has a faster record!';
                        return;
                        break;
                    } else if (i == (testEnd - 1)) {
                        // if the user is submitting for the first time
                        var body = {
                            'username':unInput,
                            'seconds':scoreInput
                        };
                        var postOptions = {method: 'POST', body: JSON.stringify(body), headers: {'Content-Type':'application/json', 'Authorization': 'Bearer my-token'}};
                        console.log(body);
                        fetch(memoryCreate, postOptions)
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