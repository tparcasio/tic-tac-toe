$(document).ready(function() {
    //Variable should live outside of the click event
    var turn = "X";

    //Set up click events on each space of board
    $(document).on("click", ".game-space", function() {
        //Make sure spot is empty before continuing
        if ($(this).html() === "") {
            //Change inner html of element we just clicked on
            $(this).html(turn);
            //Alternate between X and O
            if (turn === "X") {
                turn = "O";
            } else {
                turn = "X";
            }
        }
      //Don't need an else if you don't want anything to happen
    });

});
