//loads source page before javscript
$(document).ready(function () {
    //an object that is going to hold the variables we need for the game
    var game = {
        isCharacterChosen: false,
        isFighterChosen: false,
        isDefenderChosen: false,
        isGameOver: false,
        isFirstAttack: true,
        chosenCharacterValue: 0,
        chosenDefenderValue: 0,
        enemiesDestroyed: 0,


        //functions
        //for the reset button
        reset: function () {
            this.isCharacterChosen = false;
            this.isFighterChosen = false;
            this.isDefenderChosen = false;
            this.chosenCharacterValue = 0;
            this.chosenDefenderValue = 0;
            this.isGameOver = false;
            this.isFirstAttack = true;
            this.enemiesDestroyed = 0;

            $('#display').empty();
            $('#reset').css('visibility', 'visible');


            //reset images..... this may be a bit assessive but i could not figure out how else to restore my images
            $('#character-holder').empty();
            $('#your-character').empty();
            $('#your-character').append('<h2>Your Character</h2>');
            $('#enemies-to-attack').empty();
            $('#enemies-to-attack').append('<h2>Enemies Available To Attack</h2>');

            $('#defender').empty();
            $('#defender').append('<h2>Defender</h2>')




            $('#character-holder').append($("<div id = character-1 class = choose-characters value = 0></div>"))
            $('#character-1').append('<div class = char-1> </div>');
            $('.char-1').addClass('character-boxs').append('<p>Obi-Wan Kenobi</p>');
            $('.char-1').append('<img src="./assets/images/Obi-Wan Kenobi.jpg">');
            $('.char-1').append('<p class = health-0></p>');

            $('#character-holder').append($("<div id = character-2 class = choose-characters value = 1></div>"))
            $('#character-2').append('<div class = char-2> </div>');
            $('.char-2').addClass('character-boxs').append('<p>Luke Skywalker</p>');
            $('.char-2').append('<img src="./assets/images/LukeSkywalker.png">');
            $('.char-2').append('<p class = health-1></p>');


            $('#character-holder').append($("<div id = character-3 class = choose-characters value = 2></div>"))
            $('#character-3').append('<div class = char-3> </div>');
            $('.char-3').addClass('character-boxs').append('<p>Darth Sidious</p>');
            $('.char-3').append('<img src="./assets/images/Darth Sidious.png">');
            $('.char-3').append('<p class = health-2></p>');


            $('#character-holder').append($("<div id = character-4 class = choose-characters value = 3></div>"))
            $('#character-4').append('<div class = char-4> </div>');
            $('.char-4').addClass('character-boxs').append('<p>Darth Maul</p>');
            $('.char-4').append('<img src="./assets/images/Darth Maul.jpeg">');
            $('.char-4').append('<p class = health-3></p>');
            // $('#character-holder').html($('#character-1'));
            // $('#character-holder').append($('#character-2'));
            // $('#character-holder').append($('#character-3'));
            // $('#character-holder').append($('#character-4'));
            for (var i = 0; i < Characters.length; i++) {
                Characters[i].reset();
            }
            game.displayAllHealth();

        },
        //a function that displays all characters health to the screen
        displayAllHealth: function () {
            $('.health-0').html(Characters[0].healthPoints);
            $('.health-1').html(Characters[1].healthPoints);
            $('.health-2').html(Characters[2].healthPoints);
            $('.health-3').html(Characters[3].healthPoints);
        },




    };

    //an object for obi wan kenobi
    var Characters = [

        //an array of characters
        //index 0 for Obi-Wan Kenobi
        {
            name: 'Obi-Wan Kenobi',
            healthPoints: 120,
            defaultAttackPower: 8,
            attackPower: 8,
            counterAttack: 10,

            displayHealth: function () {
                $('.health-0').html(this.healthPoints);
            },
            updateHealth: function (num) {
                this.healthPoints -= num;
            },
            reset: function () {
                this.healthPoints = 120;
                this.attackPower = 8;
            },
        },
        //index 1 for luke
        {
            name: 'Luke Skywalker',
            healthPoints: 100,
            defaultAttackPower: 10,
            attackPower: 10,
            counterAttack: 7,

            displayHealth: function () {
                $('.health-1').html(this.healthPoints);
            },
            updateHealth: function (num) {
                this.healthPoints -= num;
            },
            reset: function () {
                this.healthPoints = 100;
                this.attackPower = 10;
            },
        },
        //index 2 for darth sidious
        {
            name: 'Darth Sidious',
            healthPoints: 150,
            defaultAttackPower: 12,
            attackPower: 12,
            counterAttack: 15,

            displayHealth: function () {
                $('.health-2').html(this.healthPoints);
            },
            updateHealth: function (num) {
                this.healthPoints -= num;
            },
            reset: function () {
                this.healthPoints = 150;
                this.attackPower = 12;
            },
        },
        //index 3 for darth maul
        {
            name: 'Darth Maul',
            healthPoints: 180,
            defaultAttackPower: 15,
            attackPower: 15,
            counterAttack: 25,

            displayHealth: function () {
                $('.health-3').html(this.healthPoints);
            },
            updateHealth: function (num) {
                this.healthPoints -= num;
            },
            reset: function () {
                this.healthPoints = 180;
                this.attackPower = 15;
            },

        },


    ]
    $('#reset').on('click', function () {
        game.reset();
    })

    //function that returns characters existence
    game.displayAllHealth();
    //an onclick to get the buttons
    $('.choose-characters').on('click', function () {

        //check if certain characters are clicked
        if ((!game.isCharacterChosen) && (!game.isGameOver)) {
            if (this.id == 'character-1') {
                //move character 1 to chosen character
                $('#your-character').append($('#character-1'));
                game.chosenCharacterValue = $('#character-1').attr('value');
                game.isCharacterChosen = true;
            }
            if (this.id == 'character-2') {
                //move character 1 to chosen character
                $('#your-character').append($('#character-2'));
                game.chosenCharacterValue = $('#character-2').attr('value');
                game.isCharacterChosen = true;

            }
            if (this.id == 'character-3') {
                //move character 1 to chosen character
                $('#your-character').append($('#character-3'));
                game.chosenCharacterValue = $('#character-3').attr('value');
                game.isCharacterChosen = true;

            }
            if (this.id == 'character-4') {
                //move character 1 to chosen character
                $('#your-character').append($('#character-4'));
                game.chosenCharacterValue = $('#character-4').attr('value');
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

        $('.choose-characters').on('click', function () {
            if ((game.isCharacterChosen) && (game.isFighterChosen) && (!game.isDefenderChosen && (!game.isGameOver))) {

                if (!($(this).attr('value') == game.chosenCharacterValue)) {
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

            }

        })





    })
    //if everything is good to go and locked in
    $('#attack').on("click", function () {
        //clears out the content in display
        if ((game.isCharacterChosen) && (game.isFighterChosen) && (game.isDefenderChosen) && (!game.isGameOver)) {

            if (game.isFirstAttack) {
                $('#display').empty();
                $('#display').append('<p> You attacked ' + Characters[game.chosenDefenderValue].name + ' for ' + Characters[game.chosenCharacterValue].attackPower + ' damage.</p>');
                $('#display').append('<p>' + Characters[game.chosenDefenderValue].name + ' attacked you back for ' + Characters[game.chosenDefenderValue].counterAttack + ' damage.</p>');
                //update health of enemy
                Characters[game.chosenDefenderValue].updateHealth(Characters[game.chosenCharacterValue].attackPower);
                Characters[game.chosenCharacterValue].updateHealth(Characters[game.chosenDefenderValue].counterAttack);

                //display health of all characters

                game.displayAllHealth();
                game.isFirstAttack = false;
            }
            else {
                Characters[game.chosenCharacterValue].attackPower += Characters[game.chosenCharacterValue].defaultAttackPower;
                console.log(Characters[game.chosenCharacterValue].attackPower);
                $('#display').empty();
                $('#display').append('<p> You attacked ' + Characters[game.chosenDefenderValue].name + ' for ' + Characters[game.chosenCharacterValue].attackPower + ' damage.</p>');
                $('#display').append('<p>' + Characters[game.chosenDefenderValue].name + ' attacked you back for ' + Characters[game.chosenDefenderValue].counterAttack + ' damage.</p>');

                //update health of enemy
                Characters[game.chosenDefenderValue].updateHealth(Characters[game.chosenCharacterValue].attackPower);
                //update health of myself
                Characters[game.chosenCharacterValue].updateHealth(Characters[game.chosenDefenderValue].counterAttack);
                //display health of all characters
                game.displayAllHealth();
                if (Characters[game.chosenDefenderValue].healthPoints <= 0) {
                    //move the character to hidden
                    //overwrite text
                    $('#defender').empty();
                    $('#hidden').html($('character-' + game.chosenDefenderValue));
                    $('#display').html('You Killed ' + Characters[game.chosenDefenderValue].name + '! ')
                    $('#display').append('<p>Pick another enemy to destory!</p>');
                    //so we can pick another character
                    game.isDefenderChosen = false;
                    //keeps track of the number of enemies killed
                    game.enemiesDestroyed++;
                    console.log("enemies-destoryed: " + game.enemiesDestroyed);

                }
                else if (Characters[game.chosenCharacterValue].healthPoints <= 0) {
                    $('#display').html('You Were Killed! Game Over!');
                    game.isGameOver = true;
                    $('#reset').css('visibility', 'visible');

                }
                if (game.enemiesDestroyed >= 3) {
                    $('#display').html('YOU KILLED EVERYONE, GAME OVER');
                    $('#reset').css('visibility', 'visible');
                    game.isGameOver = true;
                }

            }







        }
        //if they click the button before any of this above is true
        else {
            //if the defender is not chosen
            if (!game.isDefenderChosen && !game.isGameOver) {
                $('#display').html('No Enemy here');


            }
        }

    })

})