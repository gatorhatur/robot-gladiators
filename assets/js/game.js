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
                playerMoney -= 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
    
        
    
            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth -= playerAttack;
    
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth -= enemyAttack;
    
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

for(var i =  0; i < enemyNames.length; i++){

    if(playerHealth > 0){    
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1)) ;

        var pickedEnemyName = enemyNames[i];    

        var enemyHealth = 50;

        fight(pickedEnemyName);
    }

}