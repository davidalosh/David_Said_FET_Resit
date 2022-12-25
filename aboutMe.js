//Create an ‘aboutMe.js’ file in the correct folder.

// In this file, you must create functions to update the ‘about us’ content.

// Change all the "Something about the company" and “Something about our values” to some information about yourself when the page loads.This could be anything, hobbies, what you like or do not like, your pet's names, or where you live. All the "Something about” text needs to be changed from a single function. 'This information about yourself can be real or made up.'


// When you click the content that you have updated, the background color needs to change to powderblue, and the font color needs to change to white.


$("document").ready(function () {

    document.getElementsByClassName("col-lg-6");
    $("#our-values p").html('I´m David. I work as a chef and study backend development');
    $("#about-us p").html('Welcome to our page');

    $(".col-log-6 p").click(function () {
        $("#our-values p").css("background-color", "powderblue");
        $("#about-us p").css("color", "white");
    })
});