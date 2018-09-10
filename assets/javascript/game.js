//loads source page before javscript
$(document).ready(function () {
    //an object that is going to hold the variables we need for the game
    var game = {
        isCharacterChosen: false,
        isFighterChosen: false,

        //functions
        //for the reset button
        reset: function () {
        },

    };




    //an onclick to get the buttons
    $('.choose-characters').on('click', function () {

        //check if certain characters are clicked
        if (!game.isCharacterChosen) {
            if (this.id == 'character-1') {
                //move character 1 to chosen character
                $('#your-character').append($('#character-1'));
                game.isCharacterChosen = true;
            }
            if (this.id == 'character-2') {
                //move character 1 to chosen character
                $('#your-character').append($('#character-2'));
                game.isCharacterChosen = true;

            }
            if (this.id == 'character-3') {
                //move character 1 to chosen character
                $('#your-character').append($('#character-3'));
                game.isCharacterChosen = true;

            }
            if (this.id == 'character-4') {
                //move character 1 to chosen character
                $('#your-character').append($('#character-4'));
                game.isCharacterChosen = true;

            }

        }
        //if character is chosen but fighter is not chosen do this
        if ((game.isCharacterChosen) && (!game.isFighterChosen)) {
            if (this.id == 'character-1') {
                $('#enemies-to-attack').append($('#character-2'));
                $('#enemies-to-attack').append($('#character-3'));
                $('#enemies-to-attack').append($('#character-4'));
            }
        }

    })
})