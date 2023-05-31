---
layout: none
permalink: /leaderboard/
---

<head>
    <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/index.css">
    <!-- JQuery -->
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <!-- Bootstrap -->
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"></script>
    <style>
        #flaskTable th:first-child {
            width: 75px;
        }
        #flaskTable td:not(:first-child) {
            width: 150px;
        }
        section { 
            position: relative;
            width: 100%;
            height: 100%;
            max-height: 100px;
            padding: 30px;
            display: flex;
            margin:auto;
            text-align:center;
        }
        table { border: none; border-collapse: collapse; color:white; padding:10px;}
        .row {position:relative; display:flex; justify-content:space-around;}
        section ul {
            list-style-type: none;
            margin: 0;
            margin-top: 1em;
            overflow: hidden;
            background-color: #fff;
            text-decoration: none;
            display: inline-block;
            padding: 5px 16px;
            border-radius: 40px;
            color: black;
            font-size: 14px;
            z-index: 9; 
        }
        section li {
            float: left;
        }
        section li a {
            display: block;
            color: black;
            text-align: center;
            padding: 16px;
            text-decoration: none;
        }
        section li a:hover {
            background-color: #272727;
            color: #fff;
        }
        .dataTables_info {
            margin-top: 1em;
        }
        .dataTables_length {
            display:none;
        }
        label {
            margin-bottom: 1em;
        }
        .table {
            border-spacing: 0 15px;
            margin: 20px;
        }
        #loading_text {
            top:50%;
            position:relative;
            font-family: 'Poppins', sans-serif;
            font-size: 30px;
            margin: auto;
            text-align: center;
            color:white;
        }
        .form-select {
            border-radius: 5px;
            border:0px;
        }
        .form-control {
            border-radius: 5px;
            border:0px;
            margin-left: 10px;
        }
        .table-headers {
            position: relative;
            max-height: 200px;
            height: 200px;
        }
    </style>
</head>
<body>
<header>
    <a href="{{ site.baseurl }}/index" class="logo">DVASS</a>
    <ul>
        <li><a href="{{ site.baseurl }}/index">Home</a></li>
        <li><a href="{{ site.baseurl }}/games">Games</a></li>
        <li><a href="{{ site.baseurl }}/leaderboard/">Leaderboard</a></li>
        <li><a href="{{ site.baseurl }}/about">About</a></li>
    </ul>
</header>
<section class="table_headers" style="top:10%">
    <ul>
        <li onclick="tableBuild(blackjack_read, false)"><a>Blackjack</a></li>
        <li onclick="tableBuild(uno_read, true)"><a>Uno</a></li>
        <li onclick="tableBuild(war_read, false)"><a>War</a></li>
        <li onclick="tableBuild(memory_read, true)"><a>Memory</a></li>
    </ul>
</section>
<p id="loading_text">Loading...</p>
<section id="table_content" style="color: white; display: none; max-height: 100vh; overflow:visible;">
    <table id="flaskTable" class="table table-striped nowrap" style="width:100%">
        <thead id="flaskHead">
            <tr>
                <th>Place</th>
                <th>Username</th>
                <th id="score_description">Streak</th>
            </tr>
        </thead>
        <tbody id="flaskBody"></tbody>
    </table>
</section>
</body>

<script>
    const blackjack_read = "https://dvasscasino.duckdns.org/api/blackjack/";
    const uno_read = "https://dvasscasino.duckdns.org/api/uno/";
    const war_read = "https://dvasscasino.duckdns.org/api/war/";
    const memory_read = "https://dvasscasino.duckdns.org/api/memory/";

    function tableBuild(readLink, time) {
        var i = 0;
        document.getElementById('table_content').style["display"] = "none";
        document.getElementById('loading_text').innerHTML = "Loading...";
        document.getElementById('loading_text').style["display"] = "relative";
        document.getElementById('flaskBody').innerHTML = "";
        fetch(readLink, { mode: 'cors' })
        .then(response => {
            if (!response.ok) {
                throw new Error('API response failed');
            }
            return response.json();
        })
        .then(data => {
            if (time) {
                document.getElementById("score_description").innerHTML = "Time";
                for (const row of data) {
                    i++;
                    var seconds = String(row.seconds % 60);
                    if (seconds.length < 2) {
                        seconds = "0" + seconds;
                    }
                    var minutes = String(Math.floor(row.seconds / 60));
                    $('#flaskBody').append('<tr><td>' + 
                        String(i) + '</td><td>' + 
                        row.username + '</td><td>' + 
                        minutes + ":" + seconds + '</td>');
                    };
            } else {
                document.getElementById("score_description").innerHTML = "Streak"
                for (const row of data) {
                    i++;
                    $('#flaskBody').append('<tr><td>' + 
                        String(i) + '</td><td>' + 
                        row.username + '</td><td>' + 
                        row.streak + '</td>');
                    };
            };
            $("#flaskTable").DataTable();
            document.getElementById('loading_text').style["display"] = "none";
            document.getElementById('table_content').style["display"] = "flex";
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementByIds('loading_text').innerHTML = "Error: Leaderboard couldn't be fetched!<br>Check your internet.";
        });
    }

    tableBuild(blackjack_read, false);
    document.getElementById('table_content').style["display"] = "none";
    document.getElementById('loading_text').innerHTML = "Loading...";
    setTimeout(tableBuild, 700, blackjack_read, false);
</script>