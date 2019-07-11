$(document).ready(function () {

    var rey = {
        healthPts: 120,
        attack: 5,
        ctrAttack: 5
    }

    var skywalker = {
        healthPts: 100,
        attack: 8,
        ctrAttack: 8
    }

    var darthMaul = {
        healthPts: 180,
        attack: 25,
        counterAttack: 25
    }

    var kyloRen = {
        healthPts: 150,
        attack: 20,
        ctrAttack: 20
    }

    var reyHP = $("#hp-1");
    var maulHP = $("#hp-2");
    var lukeHP = $("#hp-3");
    var kyloHP = $("#hp-4");

    var topText = $("#top-text");
    var attackText = $("#attack-stats");
    var defendText = $("#defend-stats");

    reyHP.text(rey.healthPts);
    kyloHP.text(kyloRen.healthPts);
    lukeHP.text(skywalker.healthPts);
    maulHP.text(darthMaul.healthPts);

    var playerChosen = false;
    var opponentChosen = false;
    var fightReady = false;



    $("article").click(function () {

        if (($("article").is("#avatar-1")) && !playerChosen) {
            playerChosen = true;
            $(this).prependTo("#attacker-zone").css({
                "background": "rgba(21, 104, 230, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("Choose your opponent").css({
                "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
            });
        } else if (($("article").is("#avatar-2")) && !playerChosen) {
            playerChosen = true;
            $(this).prependTo("#attacker-zone").css({
                "background": "rgba(21, 104, 230, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("Choose your opponent").css({
                "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
            });
        } else if (($("article").is("#avatar-3")) && !playerChosen) {
            playerChosen = true;
            $(this).prependTo("#attacker-zone").css({
                "background": "rgba(21, 104, 230, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("Choose your opponent").css({
                "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
            });
        } else if (($("article").is("#avatar-4")) && !playerChosen) {
            playerChosen = true;
            $(this).prependTo("#attacker-zone").css({
                "background": "rgba(21, 104, 230, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("Choose your opponent").css({
                "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
            });
        } else if (($("article").is("#avatar-1")) && playerChosen && !fightReady) {
            opponentChosen = true;
            fightReady = true;
            $(this).prependTo("#defender-zone").css({
                "background": "rgba(255, 41, 41, 0.9)",
                "color": "#fff"
            });
            topText.text("fight!");
            $("#top-text").text("fight!").css({
                "text-shadow": "1px 1px 13px rgb(42, 255, 14), 0 0 25px rgb(138, 255, 29), 0 0 5px rgb(38, 255, 103)"
            });
        } else if (($("article").is("#avatar-2")) && playerChosen && !fightReady) {
            opponentChosen = true;
            fightReady = true;
            $(this).prependTo("#defender-zone").css({
                "background": "rgba(255, 41, 41, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("fight!").css({
                "text-shadow": "1px 1px 13px rgb(42, 255, 14), 0 0 25px rgb(138, 255, 29), 0 0 5px rgb(38, 255, 103)"
            });
        } else if (($("article").is("#avatar-3")) && playerChosen && !fightReady) {
            opponentChosen = true;
            fightReady = true;
            $(this).prependTo("#defender-zone").css({
                "background": "rgba(255, 41, 41, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("fight!").css({
                "text-shadow": "1px 1px 13px rgb(42, 255, 14), 0 0 25px rgb(138, 255, 29), 0 0 5px rgb(38, 255, 103)"
            });
        } else if (($("article").is("#avatar-4")) && playerChosen && !fightReady) {
            opponentChosen = true;
            fightReady = true;
            $(this).prependTo("#defender-zone").css({
                "background": "rgba(255, 41, 41, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("fight!").css({
                "text-shadow": "1px 1px 13px rgb(42, 255, 14), 0 0 25px rgb(138, 255, 29), 0 0 5px rgb(38, 255, 103)"
            });
        }

    })










})