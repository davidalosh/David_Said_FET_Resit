
// 'Toggle Switch to the ‘On’ position, the background color of all text in the table needs to change to black, and the table’s text color needs to change to white.When the user clicks the Toggle Switch back to the ‘Off’ position, the background color of all text in '

// 'the table needs to change back to white and the text color back to black.Create a single function in the file that accomplishes this.'


$(document).ready(function () {

    $("#accessToggle").on("click", function () {
        $(".table").css({ "backgroundColor": "black" });
        $("#accessToggle").off("click", function () {
            $(".table").css({ "backgroundColor": "white", "color": "black" });

        });
    });
});