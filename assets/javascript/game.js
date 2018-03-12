

$(document).ready(function() {
//  Variables


    // function gameStart() {
        //Is it possible to set variables and begin function simultaneously?
        var Wins = 0;
        $(".wins").html(Wins);
        var Losses = 0;
        $(".losses").html(Losses);
        var Total = 0;
        $(".guessTotal").html(Total);
        // var matchNumber = Math.floor((Math.random() * (120 - 19 + 1) + 19));
        var matchNumber;
        // $(".matchNumber").html(matchNumber);
        // var gem1 = Math.ceil(Math.random() * 12);
        // var gem2 = Math.ceil(Math.random() * 12);
        // var gem3 = Math.ceil(Math.random() * 12);
        // var gem4 = Math.ceil(Math.random() * 12);
        var gem1;
        var gem2;
        var gem3;
        var gem4;

        // console.log(matchNumber);
        // console.log('var Gem1: ' + gem1);
        // console.log(gem2);
        // console.log(gem3);
        // console.log(gem4);
    // }

    function gameStart() {
        matchNumber = Math.floor((Math.random() * (120 - 19 + 1) + 19));
        $(".matchNumber").html(matchNumber);
    
        gem1 = (Math.ceil(Math.random() * 12));
        // console.log('GameStart Gem1: ' + gem1);
        gem2 = (Math.ceil(Math.random() * 12));
        gem3 = (Math.ceil(Math.random() * 12));
        gem4 = (Math.ceil(Math.random() * 12));

        Total = 0;
        $(".guessTotal").html(Total);
      }


//Functions

    $("#gem1").on("click", function() {
        Total = Total + gem1;
        $(".guessTotal").html(Total);

            if (matchNumber === Total) {
                Wins++;
                $('.wins').html(Wins);
                setTimeout(function() { alert("You've Won!"); }, 50);
                setTimeout(function() { gameStart(); }, 200);
            }
            
            else if (matchNumber < Total) {                
                Losses++;
                $('.losses').html(Losses);
                setTimeout(function() { alert("You've Lost"); }, 50);
                setTimeout(function() { gameStart(); }, 200);
            }
        })


    $("#gem2").on("click", function() {
        Total = Total + gem2;
        $(".guessTotal").html(Total);

            if (matchNumber === Total) {
                Wins++;
                $('.wins').html(Wins);
                setTimeout(function() { alert("You've Won!"); }, 50);
                setTimeout(function() { gameStart(); }, 200);
            }
            
            else if (matchNumber < Total) {                
                Losses++;
                $('.losses').html(Losses);
                setTimeout(function() { alert("You've Lost"); }, 50);
                setTimeout(function() { gameStart(); }, 200);
            }
        })



    $("#gem3").on("click", function() {
        Total = Total + gem3;
        $(".guessTotal").html(Total);

            if (matchNumber === Total) {
                Wins++;
                $('.wins').html(Wins);
                setTimeout(function() { alert("You've Won!"); }, 50);
                setTimeout(function() { gameStart(); }, 200);
            }
            
            else if (matchNumber < Total) {                
                Losses++;
                $('.losses').html(Losses);
                setTimeout(function() { alert("You've Lost"); }, 50);
                setTimeout(function() { gameStart(); }, 200);
            }
        })

    

    $("#gem4").on("click", function() {
        Total = Total + gem4;
        $(".guessTotal").html(Total);

            if (matchNumber === Total) {
                Wins++;
                $('.wins').html(Wins);
                setTimeout(function() { alert("You've Won!"); }, 50);
                setTimeout(function() { gameStart(); }, 200);
            }
            
            else if (matchNumber < Total) {                
                Losses++;
                $('.losses').html(Losses);
                setTimeout(function() { alert("You've Lost"); }, 50);
                setTimeout(function() { gameStart(); }, 200);
            }
        });

        

    gameStart();
});







