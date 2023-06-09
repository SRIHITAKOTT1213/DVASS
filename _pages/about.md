---
layout: none
title: About Me
permalink: /about/
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
                <div class="person">
                    <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/drew.png?raw=true" alt="dre">
                </div>
                <div class="info">
                    <h1 class="title">Drew</h1>
                    <h3>Drew worked on creating both Blackjack and Uno.</h3>
                </div>
        </div> 
        <div class="card">
                <div class="person">
                    <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/sreeja.png?raw=true" alt="sre">
                </div>
                <div class="info">
                    <h1 class="title">Sreeja</h1>
                    <h3>Sreeja worked on the backend end that was needed for the leaderboard that is connected to all the games (Uno, War, Blackjack, and Memory Game)</h3>
                </div>
        </div> 
        <div class="card">
                <div class="person">
                    <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/aliya.png?raw=true" alt="ali">
                </div>
                <div class="info">
                    <h1 class="title">Aliya</h1>
                    <h3>Aliya worked on creating War</h3>
                </div>
        </div> 
    </div>
    <div class="container">
         <div class="card">
                <div class="person">
                    <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/vivian.png?raw=true" alt="viv">
                </div>
                <div class="info">
                    <h1 class="title">Vivian</h1>
                    <h3>Vivian worked on the frontend for our website as well as deployed the backend that was needed for the leaderboard to work. She also worked on the frontend for all the games.</h3>
                </div>
        </div> 
        <div class="card">
                <div class="person">
                    <img src="https://github.com/SRIHITAKOTT1213/DVASS/blob/master/images/sri.png?raw=true" alt="sri">
                </div>
                <div class="info">
                    <h1 class="title">Sri</h1>
                    <h3>Sri worked on creating the Memory Game</h3>
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
        width: 90%;
        padding: 10px 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10000;
    }

    header .logo
    {
        color: black;
        font-weight: 500;
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
        padding: 6px 10px;
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
        min-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 1000px;
    }

    .container {
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .card {
        transform-style: preserve-3d;
        transition: all 0.5s ease;
        min-height: 60vh;
        width: 16rem;
        height: 35rem;
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
        font-size: 1.25rem;
        padding: 2rem 0rem;
        color:#585858;
        font-weight: lighter;
        transition: all 0.75s ease-out;
    }

    


</style>

