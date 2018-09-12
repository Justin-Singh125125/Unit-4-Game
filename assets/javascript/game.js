//loads source page before javscript
$(document).ready(function () {
    //an object that is going to hold the variables we need for the game
    var game = {
        isCharacterChosen: false,
        isFighterChosen: false,
        isDefenderChosen: false,
        isGameOver: false,
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

    //an object for obi wan kenobi
    var Characters = [

        //an array of characters
        //index 0 for Obi-Wan Kenobi
        {
            name: 'Obi-Wan Kenobi',
            healthPoints: 120,
            attackPower: 8,
            counterAttack: 10,

            displayHealth: function () {
                $('.health-0').html(this.healthPoints);
            },
            updateHealth: function (num) {
                this.healthPoints -= num;
            },
        },
        //index 1 for luke
        {
            name: 'Luke Skywalker',
            healthPoints: 100,
            attackPower: 10,
            counterAttack: 7,
            displayHealth: function () {
                $('.health-1').html(this.healthPoints);
            },
            updateHealth: function (num) {
                this.healthPoints -= num;
            },
        },
        //index 2 for darth sidious
        {
            name: 'Darth Sidious',
            healthPoints: 150,
            attackPower: 12,
            counterAttack: 15,
            displayHealth: function () {
                $('.health-2').html(this.healthPoints);
            },
            updateHealth: function (num) {
                this.healthPoints -= num;
            },
        },
        //index 3 for darth maul
        {
            name: 'Darth Maul',
            healthPoints: 180,
            attackPower: 15,
            counterAttack: 25,
            displayHealth: function () {
                $('.health-3').html(this.healthPoints);
            },
            updateHealth: function (num) {
                this.healthPoints -= num;
            },
        },


    ]
    //a function that displays all characters health to the screen
    function displayAllHealth() {
        $('.health-0').html(Characters[0].healthPoints);
        $('.health-1').html(Characters[1].healthPoints);
        $('.health-2').html(Characters[2].healthPoints);
        $('.health-3').html(Characters[3].healthPoints);
    }





    displayAllHealth();
    //an onclick to get the buttons
    $('.choose-characters').on('click', function () {

        //check if certain characters are clicked
        if (!game.isCharacterChosen) {
            if (this.id == 'character-1') {
                //move character 1 to chosen character
                $('#your-character').append($('#character-1'));
                game.chosenCharacterValue = $('#character-1').attr('value');
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
                $('.char-2, .char-3, .char-4').css('border', '1px solid black');
                game.isFighterChosen = true;
            }
            if (this.id == 'character-2') {
                $('#enemies-to-attack').append($('#character-1'));
                $('#enemies-to-attack').append($('#character-3'));
                $('#enemies-to-attack').append($('#character-4'));
                $('.char-1, .char-3, .char-4').css('background-color', 'red');
                $('.char-1, .char-3, .char-4').css('border', '1px solid black');

                game.isFighterChosen = true;
            }
            if (this.id == 'character-3') {
                $('#enemies-to-attack').append($('#character-1'));
                $('#enemies-to-attack').append($('#character-2'));
                $('#enemies-to-attack').append($('#character-4'));
                $('.char-1, .char-2, .char-4').css('background-color', 'red');
                $('.char-1, .char-2, .char-4').css('border', '1px solid black');

                game.isFighterChosen = true;
            }
            if (this.id == 'character-4') {
                $('#enemies-to-attack').append($('#character-1'));
                $('#enemies-to-attack').append($('#character-2'));
                $('#enemies-to-attack').append($('#character-3'));
                $('.char-1, .char-2, .char-3').css('background-color', 'red');
                $('.char-1, .char-2, .char-3').css('border', '1px solid black');

                game.isFighterChosen = true;
            }
        }
        //if the character is choosen and the fighter is chosen
        {
            $('.choose-characters').on('click', function () {
                if ((game.isCharacterChosen) && (game.isFighterChosen) && (!game.isDefenderChosen)) {
                    $('#defender').append($(this));

                    //this is going to allow us to store the defender value so we can control who we are fighting
                    game.chosenDefenderValue = $(this).attr('value');

                    if (this.id == 'character-1') {
                        $('.char-1').css('background-color', 'black');
                        $('.char-1').css('border', 'solid green');
                        $('.char-1').css('color', 'white');
                    }
                    if (this.id == 'character-2') {
                        $('.char-2').css('background-color', 'black');
                        $('.char-2').css('color', 'white');
                        $('.char-2').css('border', 'solid green');
                    }
                    if (this.id == 'character-3') {
                        $('.char-3').css('background-color', 'black');
                        $('.char-3').css('color', 'white');
                        $('.char-3').css('border', 'solid green');
                    }
                    if (this.id == 'character-4') {
                        $('.char-4').css('background-color', 'black');
                        $('.char-4').css('color', 'white');
                        $('.char-4').css('border', 'solid green');
                    }
                    game.isDefenderChosen = true;

                }

            })
        }




    })
    //if everything is good to go and locked in
    $('#attack').on("click", function () {
        //clears out the content in display

        if ((game.isCharacterChosen) && (game.isFighterChosen) && (game.isDefenderChosen)) {
            $('#display').empty();
            $('#display').append('<p> You attacked ' + Characters[game.chosenDefenderValue].name + ' for ' + Characters[game.chosenCharacterValue].attackPower + ' damage.</p>');
            $('#display').append('<p>' + Characters[game.chosenDefenderValue].name + ' attacked you back for ' + Characters[game.chosenDefenderValue].counterAttack + ' damage.</p>');



        }
        //if they click the button before any of this above is true
        else {
            //if the defender is not chosen
            if (!game.isDefenderChosen) {
                $('#display').html('No Enemy here');


            }
        }

    })


})