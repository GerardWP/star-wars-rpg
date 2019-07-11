$(document).ready(function () {

    var rey = {
        healthPts: 120,
        attack: 5,
        cntrAttack: 5
    }

    var skywalker = {
        healthPts: 100,
        attack: 8,
        cntrAttack: 8
    }

    var darthMaul = {
        healthPts: 180,
        attack: 25,
        cntrAttack: 25
    }

    var kyloRen = {
        healthPts: 150,
        attack: 20,
        cntrAttack: 20
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
    // var fightReady = false;

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

    $("article").click(function () {


        if (($("article").is("#avatar-1")) && !playerChosen) {
            playerChosen = true;
            playerAvatar = rey;
            play();
            $(this).unbind('click').prependTo("#attacker-zone").css({
                "background": "rgba(21, 104, 230, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("Choose your opponent").css({
                "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
            });
        } else if (($("article").is("#avatar-2")) && !playerChosen) {
            playerChosen = true;
            playerAvatar = darthMaul;
            play();
            $(this).unbind('click').prependTo("#attacker-zone").css({
                "background": "rgba(21, 104, 230, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("Choose your opponent").css({
                "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
            });
        } else if (($("article").is("#avatar-3")) && !playerChosen) {
            playerChosen = true;
            playerAvatar = skywalker;
            play();
            $(this).unbind('click').prependTo("#attacker-zone").css({
                "background": "rgba(21, 104, 230, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("Choose your opponent").css({
                "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
            });
        } else if (($("article").is("#avatar-4")) && !playerChosen) {
            playerChosen = true;
            playerAvatar = kyloRen;
            play();
            $(this).unbind('click').prependTo("#attacker-zone").css({
                "background": "rgba(21, 104, 230, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("Choose your opponent").css({
                "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
            });
        } else if (($("article").is("#avatar-1")) && !opponentChosen) {
            opponentChosen = true;
            fightReady = true;
            opponentAvatar = rey;
            play();
            $(this).prependTo("#defender-zone").css({
                "background": "rgba(255, 41, 41, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("fight!").css({
                "text-shadow": "1px 1px 13px rgb(22, 41, 19), 0 0 25px rgb(32, 68, 18), 0 0 5px rgb(25, 139, 44)"
            });
        } else if (($("article").is("#avatar-2")) && !opponentChosen) {
            opponentChosen = true;
            fightReady = true;
            opponentAvatar = darthMaul;
            play();
            $(this).prependTo("#defender-zone").css({
                "background": "rgba(255, 41, 41, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("fight!").css({
                "text-shadow": "1px 1px 13px rgb(22, 41, 19), 0 0 25px rgb(32, 68, 18), 0 0 5px rgb(25, 139, 44)"
            });
        } else if (($("article").is("#avatar-3")) && !opponentChosen) {
            opponentChosen = true;
            fightReady = true;
            opponentAvatar = skywalker;
            play();
            $(this).prependTo("#defender-zone").css({
                "background": "rgba(255, 41, 41, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("fight!").css({
                "text-shadow": "1px 1px 13px rgb(22, 41, 19), 0 0 25px rgb(32, 68, 18), 0 0 5px rgb(25, 139, 44)"
            });
        } else if (($("article").is("#avatar-4")) && !opponentChosen) {
            opponentChosen = true;
            fightReady = true;
            opponentAvatar = kyloRen;
            play();
            $(this).prependTo("#defender-zone").css({
                "background": "rgba(255, 41, 41, 0.9)",
                "color": "#fff"
            });
            $("#top-text").text("fight!").css({
                "text-shadow": "1px 1px 13px rgb(22, 41, 19), 0 0 25px rgb(32, 68, 18), 0 0 5px rgb(25, 139, 44)"
            });
        }

    })

    $("button").click(function () {

        if (opponentChosen) {
            playClash();
        } else return;


    })










})