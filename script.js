const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".high-score");
const spaceKey = document.querySelector(".space-key");

let currentScore = 0;
let HighScore = 0;
let isPlaying = false;
let timer = 5;

document.addEventListener("keypress",function(e){    
    if(e.key == "Enter" && !isPlaying){
        currentScore=0;
        isPlaying = true;
        message.textContent = "GO!";
        let gameInterval = setInterval(function(){
        message.textContent = "time left: "+timer;
            if(timer <=0){
                isPlaying=false;
                message.textContent = "Game over. Press [Enter] to start again";
                clearInterval(gameInterval);
                if(currentScore>HighScore){
                    HighScore = currentScore;
                    highscore.textContent = currentScore;
                }
                clearInterval(gameInterval);
                timer = 5;
                return;
            }
            timer--;
        },1000) 
    }
});

document.addEventListener("keyup",function(e){
    if (e.key == " " && isPlaying){
        currentScore++;
        console.log(currentScore);
        score.textContent = currentScore;
        spaceKey.style.backgroundImage = "url(assets/spacekey.png)";
    }
});

document.addEventListener("keydown",function(e){
    if(e.key == " " && isPlaying){
        spaceKey.style.backgroundImage = "url(assets/spacekeyPressed.png)";

    }
})
