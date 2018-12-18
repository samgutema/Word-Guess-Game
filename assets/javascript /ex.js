<!DOCTYPE>
<html>
<head>
    <title>Rock Paper Scissor Game</title>
</head>
<body>

    <div id="computerpick" />
    <div id="userpick" />
    <div id="result" />

    <script type="text/javascript">
    
       
        document.onkeyup = function(event)
        {

        var computerpick = ['r','s', 'p'];
        var computerGuess = computerpick[Math.floor(Math.random() * computerpick.length)];
        var result =  document.getElementById("result");
        
        if(event.key == computerGuess)
        {

          
          result.textContent = "Draw";
        }
        else if(computerpick == "r" && event.key == "p")
        {
            result.textContent = "You wins";
        }
        else if(computerpick == "p" && event.key == "r")
        {
            result.textContent = "Computer Wins";
        }
        }

    </script>

</body>
</html>