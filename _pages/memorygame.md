---
layout: none
tite: Memory Game Simulation
permalink: /memorygame/
---

<style>
     .outer_background {
        justify-content:center;
        margin:auto;
        border:20px solid;
        border-color:black;
        border-radius:200px;
        background-color: #103d1c;
        font-family:serif;
    }

    .db_input {
        justify-content:center;
        margin:auto;
        border: 5px solid;
        border-radius: 10px;
        background-color:white;
    }

    .select_button {
        margin:auto;
        text-align:center;
        justify-content:center;
        border: 5px solid;
        border-radius:5px;
        width:120px;
        height:60px;
        background-color:white;
        font-size:14px;
        font-family:serif;
    }

</style>


<div class="outer_background">
    <br>
    <div style="text-align:center;justify-content:center">
        <h1>Slot Machine Memory Game</h1>
    </div>
    <div id="buttons" style="margin:auto;text-align:center;justify-content:center">
       <button id="play_again" class="select_button" style="display:block" onclick="gameStart()">Play</button><button id="finish_game" class="select_button" style="display:none" onclick="record()">Finish and Submit Score</button>
        <input id="username_input" class="db_input" type="text" style="display:none"><button id="submit_button" class="select_button" style="display:none">Submit</button>
    </div>
    <br>
</div>

<script>

    
</script>