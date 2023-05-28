var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = [];



$("body").keypress(function(keypressed){

    if(keypressed.key === "a"){
        if(gamePattern.length < 1){
            nextSequence();
        }
    }
})

$(".btn").click(function(clicked){
    clicked = clicked.target.id
    userClickedPattern.push(clicked)
    animation(clicked)
    checkAnswer(userClickedPattern.length - 1)

})    
   
function checkAnswer(currentLevel){
        if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
            console.log("nice")
            if(userClickedPattern.length === gamePattern.length){
                setTimeout(function () {
                    nextSequence();
                  }, 1000);
            }

        }else{
            console.log("gameOver")
            $("body").addClass("game-over")
            $("h1").text("Game Over")
            var wrong = new Audio('sounds/wrong.mp3');
            wrong.play();
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);
            startOver()
            setTimeout(function (){
                nextSequence();
            }, 2000);
        }
        
}
function nextSequence(){
    
    $("h1").text("level "+ gamePattern.length)
    var randomNumber = Math.floor((Math.random())*4)
    randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour); 
    animation(randomChosenColour)
    userClickedPattern = []
}
function startOver(){
    gamePattern = []
    userClickedPattern = [];
}

function animation(colorUsed){
    switch (colorUsed) {
        case "red":
            var red = new Audio('sounds/red.mp3');
            red.play();
            $("#red").addClass("pressed")

            setTimeout(function() {
                $("#red").removeClass("pressed")
              }, 200);
            
            break;
        case "blue":
            var blue = new Audio('sounds/blue.mp3');
            blue.play();
            $("#blue").addClass("pressed")

            setTimeout(function() {
                $("#blue").removeClass("pressed")
              }, 200);
            
            break;
        case "green":
            var green = new Audio('sounds/green.mp3');
            green.play();
            $("#green").addClass("pressed")

            setTimeout(function() {
                $("#green").removeClass("pressed")
              }, 200);
            
            break;
        case "yellow":
            var yellow = new Audio('sounds/yellow.mp3');
            yellow.play();
            $("#yellow").addClass("pressed")

            setTimeout(function() {
                $("#yellow").removeClass("pressed")
              }, 200);
            
            break;
        default:
            break;
    }
    
}
