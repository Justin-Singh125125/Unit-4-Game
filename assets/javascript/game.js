//loads source page before javscript
$(document).ready(function () {
    //an object that is going to hold the variables we need for the game
    var game = {
        isCharacterChosen: false,
        isFighterChosen: false,
        isDefenderChosen: false,
        chosenCharacterValue: 0,

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
                game.chosenCharacterValue = $('#character-1').attr('value');
                console.log(game.chosenCharacterValue);
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
                game.isFighterChosen = true;
            }
            if (this.id == 'character-2') {
                $('#enemies-to-attack').append($('#character-1'));
                $('#enemies-to-attack').append($('#character-3'));
                $('#enemies-to-attack').append($('#character-4'));
                game.isFighterChosen = true;
            }
            if (this.id == 'character-3') {
                $('#enemies-to-attack').append($('#character-1'));
                $('#enemies-to-attack').append($('#character-2'));
                $('#enemies-to-attack').append($('#character-4'));
                game.isFighterChosen = true;
            }
            if (this.id == 'character-4') {
                $('#enemies-to-attack').append($('#character-1'));
                $('#enemies-to-attack').append($('#character-2'));
                $('#enemies-to-attack').append($('#character-3'));
                game.isFighterChosen = true;
            }
        }
        //if the character is choosen and the fighter is chosen
        if ((game.isCharacterChosen) && (game.isFighterChosen) && (!game.isDefenderChosen)) {
            $('.choose-characters').on('click', function () {

                $('#defender').append($(this));
                game.isDefenderChosen = true;

            })
        }




    })

    $('#attack').on("click", function () {
        if ((game.isCharacterChosen) && (game.isFighterChosen) && (game.isDefenderChosen)) {
            alert('characters locked in');
        }
    })


})