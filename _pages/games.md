---
layout: none
permalink: /games/
---

<html>
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
        <div class="card">
                <div class="game">
                    <div class="circle"></div>
                    <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/blackjack.png?raw=true" alt="bj">
                </div>
                <div class="info">
                    <h1 class="title">Black Jack</h1>
                    <h3>Blackjack is a popular game played between a player and a dealer. The objective is to accumulate cards with a total value as close to 21 as possible without exceeding it. </h3>
                    <br><br>
                    <div class="play">
                        <a href="{{ site.baseurl }}/blackjack"><button>PLAY</button></a>
                    </div>
                </div>
        </div> 
        <div class="card">
                <div class="game">
                    <div class="circle"></div>
                    <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/war.png?raw=true" alt="war">
                </div>
                <div class="info">
                    <h1 class="title">War</h1>
                    <h3>War is played between 2 players. Both reveal the top card and the player with the higher-value card wins and collects both cards. Repeats until the player has collected all  cards from the opponent.</h3>
                    <br><br>
                    <div class="play">
                        <a href="{{ site.baseurl }}/war"><button>PLAY</button></a>
                    </div>
                </div>
        </div> 
        <div class="card">
                <div class="game">
                    <div class="circle"></div>
                    <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/uno.png?raw=true" alt="uno">
                </div>
                <div class="info">
                    <h1 class="title">Uno</h1>
                    <h3>UNO is a popular card game played with a specially designed deck of 108 cards. The objective of the game is to be the first player to get rid of all their cards.</h3>
                    <br><br>
                    <div class="play">
                        <a href="{{ site.baseurl }}/uno"><button>PLAY</button></a>
                    </div>
                </div>
        </div> 
        <div class="card">
                <div class="game">
                    <div class="circle"></div>
                    <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/memory.png?raw=true" alt="memory">
                </div>
                <div class="info">
                    <h1 class="title">Memory</h1>
                    <h3>Memory is a game that consists of cards with a matching pair somewhere in the deck.The objective of the game is to find and match all the pairs of cards.</h3>
                    <br><br>
                    <div class="play">
                        <a href="{{ site.baseurl }}/memorygame"><button>PLAY</button></a>
                    </div>
                </div>
        </div>
    </div>
</body>
</html>


<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    header 
    {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 30px 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10000;
    }

    header .logo
    {
        color: black;
        font-weight: 700;
        text-decoration: none;
        font-size: 2em;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    header ul 
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header ul li
    {
        list-style: none;
        margin-left: 20px;
    }

    header ul li a
    {
        text-decoration: none;
        padding: 6px 15px;
        color: black;
        border-radius: 20px; 
    }

    header ul li a:hover
    {
        background: #f54642;
        color: #fff;
    }

    body {
        font-family: "Poppins", sans-serif;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 1250px;
    }

    .container {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .card {
        transform-style: preserve-3d;
        transition: all 0.5s ease;
        min-height: 70vh;
        width: 26rem;
        height: 45rem;
        box-shadow: 0 20px 20px rgba(0,0,0,0.2), 0px 0px 50px rgba(0,0,0,0.2);
        border-radius: 27px;
        padding: 0rem 5rem;
        position: relative;
    }

    .game {
        min-height: 35vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .game img {
        width: 20rem;
        z-index: 2;
        transition: all 0.75s ease-out;
        width: 16rem;
        height: 16rem;
    }

    .circle {
        width: 14rem;
        height: 14rem;
        background: linear-gradient(
            to right,
            rgba(245,79,66,0.75),
            rgba(8,83,156,0.75)
        );
        position: absolute;
        padding: 10% 0;
        border-radius: 50%;
        z-index 1;
    }

    .info h1{
        font-size: 2.5rem;
        transition: all 0.75s ease-out;
    }

    .info h3{
        font-size: 1.5rem;
        padding: 2rem 0rem;
        color:#585858;
        font-weight: lighter;
        transition: all 0.75s ease-out;
    }

    .play {
        margin-top: 5rem;    
        margin-bottom: 2rem;     
        transition: all 0.75s ease-out;
        justify-content:center;
        text-align:center;
    }

    .play button {
        width: 50%;
        height: 8%;
        padding-bottom: 2px;
        background: #f54642;
        border: none;
        color: white;
        cursor: pointer;
        border-radius: 22px;
        font-weight: bolder;
        position: absolute;
        top: 85%;
        bottom: 15%;
        left: 5%;
        right: 2%;
        margin:auto;
    }

    .play button a
    {
        text-decoration: none;
        color: #ffffff;
    }

</style>

<script>
    document.body.style.zoom = "80%" 

    const card = document.querySelector(".card");
    const container = document.querySelector(".container");

    const title = document.querySelector('.title');
    const game = document.querySelector('.game img');
    const play = document.querySelector('.play button');
    const info = document.querySelector('.info h3');

    container.addEventListener("mousemove", (e) => { //everytime there is mouse movement over container, animation will run 
        let xAxis = (window.innerWidth / 2 - e.pageX / 25);
        let yAxis = (window.innerHeight / 2 - e.pageY / 25);
        card.style.transform = `rotateY(%{xAxis}deg) rotateX(%{yAxis}deg)`;
    });

    // animate in
    container.addEventListener("mouseenter", (e) => {
        card.style.transition = "none";
        title.style.transform = "translateZ(150px)";
    });

    //animate out
    container.addEventListener('mouseleave', (e) => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        title.style.transform = "translateZ(150px)";
    });
</script>
