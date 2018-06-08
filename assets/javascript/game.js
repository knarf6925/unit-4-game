var win = 0;
var loss = 0; 
var randomResults;
var previous = 0;


var resetStart = function () {

$(".crystals").empty();

var images = [
              'assets/images/blue-crystal.jpg'
            , 'assets/images/mag-crystal.jpg'
            , 'assets/images/red-crystal.jpg'
            , 'assets/images/yellow-crystal.jpg']


    randomResults = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Random Result: ' + randomResults)

    for (var i = 0; i < 4; i++){
        var random = Math.floor(Math.random()* 11) + 1;

    
        var crystal = $("<div>");
            crystal.attr({
         "class": 'crystal',
         "dataRandom": random
    });
    

    crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size": "cover"
        
    })

    
    
    $(".crystals").append(crystal);


    }

    $("#previous").html(previous);
}

resetStart();

    $(document).on("click", ".crystal", function () {
        var num = parseInt($(this).attr('dataRandom'));
        previous += num;

         $("#previous").html(previous);


     console.log(previous)

        if (previous > randomResults){

            loss++;
            
            $("#loss").html(loss);
                 alert("You lose");
           resetStart();
             $("#previous").html(previous);
            
             previous = 0;
          
    }   

        else if (previous === randomResults){
            
            win++;
           
            $("#win").html(win);
            alert("You Win");
            resetStart();
             $("#previous").html(previous);
           
            previous = 0;

           
        }

    });

