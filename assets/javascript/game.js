var win = 0;
var loss = 0; 
var randomResults;
var previous = 0;


var resetStart = function () {

$(".crystals").empty();


    randomResults = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Random Result: ' + randomResults)

    for (var i = 0; i < 4; i++){
        var random = Math.floor(Math.random()* 11) + 1;

    
        var crystal = $("<div>");
            crystal.attr({
         "class": 'crystal',
         "dataRandom": random
    });

        crystal.html(random);
    
    $(".crystals").append(crystal);

    }
}

resetStart();

    $(document).on("click", ".crystal", function () {
        var num = parseInt($(this).attr('dataRandom'));
        previous += num;

      console.log(previous)

        if (previous > randomResults){

            loss++;
            
            $("#loss").html(loss);
           resetStart();
           previous = 0;
    }   

        else if (previous === randomResults){
            
            win++;
           
            $("#win").html(win);
            resetStart();
            previous = 0;
        }

    });

