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
                    <h3>game description</h3>
                    <div class="play">
                        <button><a href="{{ site.baseurl }}/blackjack">PLAY</a></button>
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
                    <h3>game description</h3>
                    <div class="play">
                        <button><a href="{{ site.baseurl }}/war">PLAY</a></button>
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
                    <h3>game description</h3>
                    <div class="play">
                        <button><a href="{{ site.baseurl }}/uno">PLAY</a></button>
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
                    <h3>game description</h3>
                    <div class="play">
                        <button><a href="{{ site.baseurl }}/memorygame">PLAY</a></button>
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
        color: #fff;
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
    color: #fff;
    border-radius: 20px; 
    }

    header ul li a:hover
    {
        background: #fff;
        color: #274510
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
        box-shadow: 0 20px 20px rgba(0,0,0,0.2), 0px 0px 50px rgba(0,0,0,0.2);
        border-radius: 27px;
        padding: 0rem 5rem;
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
        border-radius: 50%;
        z-index 1;
    }

    .info h1{
        font-size: 2.5rem;
        transition: all 0.75s ease-out;
    }

    .info h3{
        font-size: 1.3rem;
        padding: 2rem 0rem;
        color:#585858;
        font-weight: lighter;
        transition: all 0.75s ease-out;
    }

    .play {
        margin-top: 5rem;       
        transition: all 0.75s ease-out;
    }

    .play button {
        width: 100%;
        padding: 1rem 0rem;
        background: #f54642;
        border: none;
        color: white;
        cursor: pointer;
        border-radius: 25px;
        font-weight: bolder;
    }
</style>

<script>
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
