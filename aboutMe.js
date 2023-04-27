$("document").ready(function () {
    $(".col-lg-6 > p").replaceWith("<p>I am David. I am a student and i work as a chef</p>");

});
$("document").ready(function () {
    $(".col-lg-6 > p").click(function () {
        $(this).css({ "backgroundColor": "powderblue", "fontColor": "white" });
    })
});
