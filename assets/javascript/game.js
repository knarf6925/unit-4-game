var win = 0;
var loss = 0; 
var randomResults;
var previous = 0;


randomResults = Math.floor(Math.random() * 69) + 30;

$("#result").html('Random Result: ' + randomResults)

for (var i = 0; i < 4; i++){
    var random = Math.floor(Math.random()* 11) + 1;


    var crystal = $("<div>");
        crystal.attr({
        "class": 'crystal',
        "dataRandom": random
    });

    $(".crystals").append(crystal);

}

    $(".crystal").on("click", function () {
        var num = parseInt($(this).attr('dataRandom'));
        previous += num;

      console.log(previous)

        if (previous > randomResults){

            loss--;
            
            $("#loss").html(loss);
            alert("you lose");
    }   

        else if (previous === randomResults){
            
            win++;
            alert("You win")
            $("#win").html(win);

        }

    });

