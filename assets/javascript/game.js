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



    $("#avatar-1").click(function () {
        $(this).prependTo("#attacker-zone");
        topText.text("Choose your opponent");
        $("#top-text").css({
            "text-shadow": "1px 1px 13px rgb(255, 14, 14), 0 0 25px rgb(255, 74, 29), 0 0 5px rgb(255, 38, 38)"
        })
    })

    // ("#NodesToMove").detach().appendTo('#DestinationContainerNode')









})