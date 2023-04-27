//In the Accessibility’ section, we have a visual aid for users who struggle to read small font, in the form of a Toggle Switch. When the user clicks this Toggle Switch to the ‘On’ position, all text on the web page within <p> tags need to be increased by 20%. When the user clicks the Toggle Switch back to the ‘Off’ position, all text on the web page within <p> tags need to be decreased back to the original size. Create a single function in the file that accomplishes this.
// const action = document.getElementById("accessToggle");
// function myAction() {
//     $("#accessToggle").click(increaseBtn, decreaseBtn);
// }
// function increaseBtn() {
//     $("div p").css("font-size", "20%");

// }
// function decreaseBtn() {
//     $("div p").css("font-size", "36px");
// }
$("document").ready(function () {


    $("#accessToggle").on({
        click: function () {
            $("div p").css({ "font-size": "20%" })
        }
    })
});
