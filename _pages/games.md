---
layout: none
permalink: /games/
---
 
<html>
<body>
    <h1 class="header">GAME SELECTION</h1>
    <div class="container">
        <div class="card">
                <div class="game">
                    <div class="circle"></div>
                    <img src="/images/blackjack.png" alt="diamond">
                </div>
                <div class="info">
                    <h1 class="title">Black Jack</h1>
                    <h3>game description</h3>
                    <div class="play">
                        <button>PLAY</button>
                    </div>
                </div>
        </div> 
        <div class="card">
                <div class="game">
                    <div class="circle"></div>
                    <img src="/images/war.png" alt="diamond">
                </div>
                <div class="info">
                    <h1 class="title">War</h1>
                    <h3>game description</h3>
                    <div class="play">
                        <button>PLAY</button>
                    </div>
                </div>
        </div> 
        <div class="card">
                <div class="game">
                    <div class="circle"></div>
                    <img src="/images/uno.png" alt="diamond">
                </div>
                <div class="info">
                    <h1 class="title">Uno</h1>
                    <h3>game description</h3>
                    <div class="play">
                        <button>PLAY</button>
                    </div>
                </div>
        </div> 
        <div class="card">
                <div class="game">
                    <div class="circle"></div>
                    <img src="/images/memory.png" alt="diamond">
                </div>
                <div class="info">
                    <h1 class="title">Memory</h1>
                    <h3>game description</h3>
                    <div class="play">
                        <button>PLAY</button>
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
        background: #274510;
    }

    body {
        font-family: "Poppins", sans-serif;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header {
        font-family: "Poppins", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 5rem;
    }

    .container {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .card {
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
        background: black;
    }

    .game img {
        width: 20rem;
        z-index: 2;
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
    }

    .info h3{
        font-size: 1.3rem;
        padding: 2rem 0rem;
        color:#585858;
        font-weight: lighter;
    }

    .play {
        margin-top: 5rem;
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


</script>