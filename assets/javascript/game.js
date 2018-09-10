//loads source page before javscript
$(document).ready(function () {
    //an object that is going to hold the variables we need for the game
    var game = {
        isCharacterChosen: false,

        //functions
        //for the reset button
        reset: function () {
        },

    };





    $('#character-1').on('click', function () {

        if (game.isCharacterChosen === true) {
            alert('NO');
        }
        else {
            $('#your-character').append($('#character-1'));
            $('#enemies-to-attack').append($('#character-2'));
            $('#enemies-to-attack').append($('#character-3'));
            $('#enemies-to-attack').append($('#character-4'));
            game.isCharacterChosen = true;
        }


    })
    $('#character-2').on('click', function () {
        if (game.isCharacterChosen === true) {
            alert('NO');
        }
        else {
            $('#your-character').append($('#character-2'));
            $('#enemies-to-attack').append($('#character-1'));
            $('#enemies-to-attack').append($('#character-3'));
            $('#enemies-to-attack').append($('#character-4'));
            game.isCharacterChosen = true;
        }

    })

    $('#character-3').on('click', function () {
        if (game.isCharacterChosen === true) {
            alert('NO');
        }
        else {
            $('#your-character').append($('#character-3'));
            $('#enemies-to-attack').append($('#character-1'));
            $('#enemies-to-attack').append($('#character-2'));
            $('#enemies-to-attack').append($('#character-4'));
            game.isCharacterChosen = true;
        }

    })
    $('#character-4').on('click', function () {
        if (game.isCharacterChosen === true) {
            alert('NO');
        }
        else {
            $('#your-character').append($('#character-4'));
            $('#enemies-to-attack').append($('#character-1'));
            $('#enemies-to-attack').append($('#character-2'));
            $('#enemies-to-attack').append($('#character-3'));
            game.isCharacterChosen = true;

        }

    })








})