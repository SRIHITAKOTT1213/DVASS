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
            height: 100vh;
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
<section>
    <ul>
        <li><a href="{{ site.baseurl }}/index">Blackjack</a></li>
        <li><a href="{{ site.baseurl }}/games">Uno</a></li>
        <li><a href="{{ site.baseurl }}/leaderboard/">War</a></li>
        <li><a href="{{ site.baseurl }}/about">Memory</a></li>
    </ul>
</section>
<p id="loading_text">Loading...</p>
<section id="table_content_blackjack" style="color:white;display:none;">
    <table id="flaskTable" class="table table-striped nowrap" style="width:100%">
        <thead id="flaskHead">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>DOB</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody id="flaskBody"></tbody>
    </table>
</section>
</body>

<script>
  $(document).ready(function() {

    fetch('https://flask.nighthawkcodingsociety.com/api/users/', { mode: 'cors' })
    .then(response => {
      if (!response.ok) {
        throw new Error('API response failed');
      }
      return response.json();
    })
    .then(data => {
      for (const row of data) {
        $('#flaskBody').append('<tr><td>' + 
            row.id + '</td><td>' + 
            row.name + '</td><td>' + 
            row.dob + '</td><td>' + 
            row.age + '</td></tr>');
      }
      $("#flaskTable").DataTable();
      document.getElementById('loading_text').style["display"] = "none";
      document.getElementById('table_content_blackjack').style["display"] = "flex";
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
</script>