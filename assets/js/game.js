var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

//var enemyName = "Roborto";
var enemyNames = ["Roborto","Amy Andorid","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);

var randomNumber = function(min,max){
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
};

var fight = function(enemyName) {
    //Alert players that they are starting the round
    while(enemyHealth > 0 && playerHealth >0){

                var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if(promptFight === "skip" || promptFight === "SKIP"){
            window.alert(playerName + " has chosen to skip the fight");
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            //if yes (true), leave fight
            if(confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }
    
    
            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = Math.max(0,enemyHealth - playerAttack);
    
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
            var damage = randomNumber(enemyAttack - 3,enemyAttack);
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = Math.max(0,playerHealth - damage);
    
            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
            //Check enemy's Health
            if(enemyHealth <= 0){
                window.alert(enemyName + " has died!");
                //award money to player
                playerMoney += 20;
                break;
            }
            else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
    

            //check player's health
            if(playerHealth <= 0){
                window.alert(playerName + " has died!");
                                break;
            }
            else{
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        
    }

};


//fight();
var startGame = function() {

    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i =  0; i < enemyNames.length; i++){

        if(playerHealth > 0){    
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1)) ;

            var pickedEnemyName = enemyNames[i];    

            enemyHealth = randomNumber(40,60);

            fight(pickedEnemyName);

            if(playerHealth > 0 && i < enemyNames.length - 1){
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")

                //if yes, let them shop!
                if(storeConfirm){
                    shop();
                }
            }
        }
        else{
            window.alert("You lost your robot in battle! Game Over");
            break;
        }

    }

    endGame();

};

var endGame = function() {
    //if player is still alive, player wins!
    if(playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.")
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm){
        //restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function(){
    var shopOptionPrompt = window.prompt(
        "Would you like ot REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
            if(playerMoney >= 7){
                window.alert("Refilling player's health by 10 for 7 dollars.");
                //increase health and decrease money
                playerHealth += 20;
                playerMoney -= 7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                //increase attack and decrease money
                playerAttack += 6;
                playerMoney -= 7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop()
            shop();
            break;
    }
};

startGame();