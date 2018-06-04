var win;
var losses; 
var randomResults;

randomResults = Math.floor(Math.random() * 69) + 30;

$("#result").html('Random Result: ')

for (var i = 0; i < 4; i++){
    var random = Math.floor(Math.random()* 12);


    var crystal = $("<div>");
        crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    $(".crystals").append(crystal);

}