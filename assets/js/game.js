// var playerName = window.prompt("What is your robot's name?");
// var playerHealth = 100;
// var playerInfo.attack = 10;
// var playerMoney = 10;
var getPlayerName = function(){
    var name = "";

    while(name === "" || name === null){
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);

    return name;

};

var randomNumber = function(min,max){
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
};

var fightOrSkip = function(){
    //ask player fi they'd like to fight or skip
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    //catch bad answer
    if(promptFight === "" || promptFight === null){
        window.alert("You need to provide a valid answer. Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    //if player picks "skip" confirm and then stop the loop
    if(promptFight === "skip"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if(confirmSkip){
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0,playerInfo.money - 10);
            return true;
        }
    }

};

var fight = function(enemy) {
    //Alert players that they are starting the round
    while(enemy.health > 0 && playerInfo.health >0){

            if(fightOrSkip()){
                //if true end the fight
                break;
            };
    
            //Subtract the value of 'playerInfo.attack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemy.health = Math.max(0,enemy.health - playerInfo.attack);
    
            // Log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
    
            var damage = randomNumber(enemy.attack - 3,enemy.attack);
            // Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
            playerInfo.health = Math.max(0,playerInfo.health - damage);
    
            // Log a resulting message to the console so we know that it worked.
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
    
            //Check enemy's Health
            if(enemy.health <= 0){
                window.alert(enemy.name + " has died!");
                //award money to player
                playerInfo.money += 20;
                break;
            }
            else{
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
    

            //check player's health
            if(playerInfo.health <= 0){
                window.alert(playerInfo.name + " has died!");
                                break;
            }
            else{
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }

        
    }

};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if(this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.")
            this.attack += 6;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

//var enemyName = "Roborto";
// var enemyNames = ["Roborto","Amy Andorid","Robo Trumble"];
// var enemyHealth = 50;
// var enemyAttack = 12;

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

//fight();
var startGame = function() {

    //reset player stats
    playerInfo.reset();

    for(var i =  0; i < enemyInfo.length; i++){

        if(playerInfo.health > 0){    
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1)) ;
            
            var pickedEnemyObj = enemyInfo[i];    

            pickedEnemyObj.health = randomNumber(40,60);

            fight(pickedEnemyObj);

            if(playerInfo.health > 0 && i < enemyInfo.length - 1){
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
    if(playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
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