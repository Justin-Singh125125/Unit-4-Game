//loads source page before javscript
$(document).ready(function () {
    //an object that is going to hold the variables we need for the game
    var game = {
        availableCharacters: [],
        selectedCharacter: "",
        //an array that stores the enemy characters id 
        enemyCharacters: [],

        //functions
        //for the reset button
        reset: function () {
            initalizeCharacterArray();
        },
        initalizeCharacterArray: function () {
            this.availableCharacters[0] = $('#character-1');
            this.availableCharacters[1] = $('#character-2');
            this.availableCharacters[2] = $('#character-3');
            this.availableCharacters[3] = $('#character-4');
        },
    };


    //create an on click for the characters
    $('.choose-characters').on('click', function () {
        // a variable that is going to hold the specific character chosen
        game.selectedCharacter = $(this);
        //now we want to move this selected character to the your character tag
        $('#your-character').append(game.selectedCharacter);
        //make the other characters append to enemies available 
        //a for loop to assign enemy characters to their spot
        for (var i = 0; i < 4; i++) {
            if ($('.choose-characters') != game.selectedCharacter) {
                //fill up the enemy array with characters that do not match

                $('#enemies-to-attack').append($(game.availableCharacters[i]));


            }
        }
    })

})