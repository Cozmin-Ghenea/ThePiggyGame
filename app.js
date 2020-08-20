/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore,activePlayer,gamePlay,lastDice,WinningScore;

    init();




document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlay==true){
   var dice1  = Math.floor(Math.random() * 6)+ 1;
   var dice2  = Math.floor(Math.random() * 6)+ 1;
   var diceDom1 =  document.querySelector('.dice1');
   var diceDom2 =  document.querySelector('.dice2');
    diceDom1.style.display = 'block';
    diceDom1.src = './poze/dice-'+ dice1 + '.png'
    diceDom2.style.display = 'block';
    diceDom2.src = './poze/dice-'+ dice2 + '.png'
    console.log('dice1: '+dice1+" dice2: "+dice2)
    if(dice1!==1 && dice2!==1){
        
        roundScore+=(dice1 + dice2)
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        if(dice1==6 && dice2==6){
            scores[activePlayer] = 0;
            nextPlayer()
        }
    }else{
            nextPlayer();
    }
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlay==true){ 
    scores[activePlayer] += roundScore
   

    if(scores[activePlayer] >=WinningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'winner!'   
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        gamePlay=false;
    }else{
       
        nextPlayer();
    }

    };
});



 function nextPlayer(){

    document.querySelector('#score-' + activePlayer).textContent= scores[activePlayer]
    document.getElementById('current-'+activePlayer).textContent = '0';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

           document.querySelector('.player-1-panel').classList.toggle('active');
           document.querySelector('.player-0-panel').classList.toggle('active');   

 }
// document.querySelector('#current-' + activePlayer).textContent = dice;
// var x = document.querySelector('#score-0').textContent;
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores=[0,0];
    activePlayer = 0;
    roundScore = 0;
    lastDice = 0;
    gamePlay = true;
    WinningScore = 0;
   
    var modal = document.getElementById('myModal');

    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
     function open() {
        modal.style.display = "block";
    }

    
    // When the user clicks anywhere outside of the modal, close it
   document.querySelector('.btn-enter').addEventListener('click', function(){
        modal.style.display = "none";
        WinningScore = document.querySelector('#WinningScore').value;
        console.log(WinningScore)
   });
      

    open();

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';   
        document.getElementById('name-1').textContent = 'Player 2';   
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');

document.querySelector('.dice1').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';
}