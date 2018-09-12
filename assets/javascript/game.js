//loads source page before javscript
$(document).ready(function () {
    //an object that is going to hold the variables we need for the game
    var game = {
        isCharacterChosen: false,
        isFighterChosen: false,
        isDefenderChosen: false,
        chosenCharacterValue: 0,
        chosenDefenderValue: 0,

        //functions
        //for the reset button
        reset: function () {
            this.isCharacterChosen = false;
            this.isFighterChosen = false;
            this.isDefenderChosen = false;
            this.chosenCharacterValue = 0;
            this.chosenDefenderValue = 0;


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
                //change color
                $('.char-2, .char-3, .char-4').css('background-color', 'red');
                game.isFighterChosen = true;
            }
            if (this.id == 'character-2') {
                $('#enemies-to-attack').append($('#character-1'));
                $('#enemies-to-attack').append($('#character-3'));
                $('#enemies-to-attack').append($('#character-4'));
                $('.char-1, .char-3, .char-4').css('background-color', 'red');

                game.isFighterChosen = true;
            }
            if (this.id == 'character-3') {
                $('#enemies-to-attack').append($('#character-1'));
                $('#enemies-to-attack').append($('#character-2'));
                $('#enemies-to-attack').append($('#character-4'));
                $('.char-1, .char-2, .char-4').css('background-color', 'red');

                game.isFighterChosen = true;
            }
            if (this.id == 'character-4') {
                $('#enemies-to-attack').append($('#character-1'));
                $('#enemies-to-attack').append($('#character-2'));
                $('#enemies-to-attack').append($('#character-3'));
                $('.char-1, .char-2, .char-3').css('background-color', 'red');

                game.isFighterChosen = true;
            }
        }
        //if the character is choosen and the fighter is chosen
        {
            $('.choose-characters').on('click', function () {
                if ((game.isCharacterChosen) && (game.isFighterChosen) && (!game.isDefenderChosen)) {
                    $('#defender').append($(this));

                    if (this.id == 'character-1') {
                        $('.char-1').css('background-color', 'black');
                    }
                    if (this.id == 'character-2') {
                        $('.char-2').css('background-color', 'black');
                    }
                    if (this.id == 'character-3') {
                        $('.char-3').css('background-color', 'black');
                    }
                    if (this.id == 'character-4') {
                        $('.char-4').css('background-color', 'black');
                    }
                    game.isDefenderChosen = true;

                }

            })
        }




    })
    //if everything is good to go and locked in
    $('#attack').on("click", function () {
        if ((game.isCharacterChosen) && (game.isFighterChosen) && (game.isDefenderChosen)) {
            alert('characters locked in');
            //
        }

    })


})