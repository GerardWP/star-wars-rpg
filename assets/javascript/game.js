//
// Star Wars - RPG Gerard Pelly
//
// I know this code is not the cleanest, and also I do not have a reset function. I would never make a game
// reset simply by refreshignt he page (which is what ive done here) but i have simply run out of time now to 
// fix this. I have unavoidable plans tonight. be as brutal as possible with feedback, I feel I need to tidy up the way I do things a bit. Cheers.

$(document).ready(function () {

    var rey = {
        name: "Rey",
        healthPts: 135,
        attack: 15,
        cntrAttack: 8,
        healthText: $("#hp-1"),
        id: $("#avatar-1")
    }

    var darthMaul = {
        name: "Darth Maul",
        healthPts: 170,
        attack: 25,
        cntrAttack: 25,
        healthText: $("#hp-2"),
        id: $("#avatar-2")
    }

    var skywalker = {
        name: "Luke Skywalker",
        healthPts: 125,
        attack: 17,
        cntrAttack: 6,
        healthText: $("#hp-3"),
        id: $("#avatar-3")
    }

    var kyloRen = {
        name: "Kylo Ren",
        healthPts: 150,
        attack: 20,
        cntrAttack: 20,
        healthText: $("#hp-4"),
        id: $("#avatar-4")
    }

    var characters = {
        rey: rey,
        skywalker: skywalker,
        darthMaul: darthMaul,
        kyloRen: kyloRen,
    }


    var topText = $("#top-text");
    var attackText = $("#attack-stats");
    var defendText = $("#defend-stats");

    rey.healthText.text(rey.healthPts);
    darthMaul.healthText.text(darthMaul.healthPts);
    skywalker.healthText.text(skywalker.healthPts);
    kyloRen.healthText.text(kyloRen.healthPts);

    var playerChosen = false;
    var opponentChosen = false;
    // var fightReady = false;

    var playerAvatar;
    var opponentAvatar;

    var fighter;
    var enemy;

    var winCount = 0;

    function play() {
        var lightSaber = $("#sound")[0];
        if (lightSaber.paused) {
            lightSaber.play();
        } else {
            lightSaber.currentTime = 0;
        }
    }

    function playClash() {
        var clash = $("#sound-two")[0];
        if (clash.paused) {
            clash.play();
        } else {
            clash.currentTime = 0;
        }
    }

    function clearText() {
        attackText.text("");
        defendText.text("");
    }

    var ogAttack; // varible to hold players original attack power

    $(".avatar").on("click", function () {

        if ($(this).attr("data-name") === playerAvatar) {
            return
        } else if (!playerChosen) {
            playerChosen = true;
            playerAvatar = $(this).attr("data-name");
            fighter = characters[playerAvatar];
            ogAttack = fighter.attack;
            play();
            $(this).prependTo("#attacker-zone").css({
                "background": "rgba(21, 104, 230, 0.9)",
                "color": "#fff"
            });
            topText.text("Choose your opponent").css({
                "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
            });
        } else if (!opponentChosen) {
            opponentChosen = true;
            fightReady = true;
            opponentAvatar = $(this).attr("data-name");
            enemy = characters[opponentAvatar]
            console.log(opponentChosen);
            console.log(enemy);
            play();
            $(this).prependTo("#defender-zone").css({
                "background": "rgba(255, 41, 41, 0.9)",
                "color": "#fff"
            });
            topText.text("fight!").css({
                "text-shadow": "1px 1px 13px rgb(22, 41, 19), 0 0 25px rgb(32, 68, 18), 0 0 5px rgb(25, 139, 44)"
            });
        }

    })

    $("button").click(function () {

        if (!opponentChosen) {
            return
        } else if (opponentChosen && fighter.healthPts > 0 && enemy.healthPts > 0) {
            playClash();
            fighter.healthPts = fighter.healthPts - enemy.cntrAttack;
            fighter.healthText.text(fighter.healthPts);
            enemy.healthPts = enemy.healthPts - fighter.attack;
            enemy.healthText.text(enemy.healthPts);
            if (enemy.healthPts <= 0 && fighter.healthPts > 0) {
                ++winCount;
                defendText.text(enemy.name + " has been vanquished!");
                attackText.text("You defeated " + enemy.name + "!");
                $(enemy.id).css({
                    "display": "none"
                });
                enemy = undefined;
                opponentChosen = false;
                if (winCount == 3) {
                    topText.text("You won!! The Galaxy is yours!").css({
                        "text-shadow": "1px 1px 13px rgb(14, 118, 255), 0 0 25px rgb(29, 153, 255), 0 0 5px rgb(38, 139, 255)",
                        "font-size": "3.5em",
                        "text-align": "center"
                    });
                    $(".restart-button").css({
                        "display": "inline-block"
                    });
                } else {
                    topText.text("Choose your next opponent").css({
                        "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
                    });
                };
                console.log(enemy);
                setTimeout(clearText, 2000);
            } else if (fighter.healthPts <= 0) {
                attackText.text("You have been killed in battle");

                $("#choose-player").css({
                    "display": "none"
                });
                topText.text("oh no..you (je)Died!!").css({
                    "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)",
                    "font-size": "3.5em",
                    "text-align": "center"
                });
                $(".restart-button").css({
                    "display": "inline-block"
                });
            } else {
                attackText.text(enemy.name + " attacked you for " + enemy.cntrAttack + " damage");
                defendText.text("You attacked " + enemy.name + " for " + fighter.attack + " damage");
                fighter.attack = fighter.attack + ogAttack;
                console.log(winCount);
                console.log(fighter);
                console.log(enemy);
            }
        }


    })










})