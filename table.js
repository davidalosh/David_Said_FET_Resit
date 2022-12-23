//  There are 5 buttons in the table section on the web page. Each button can only be clicked once. When a button has been clicked,
//' the button is disabled and the action calls the function “addrow()”, which adds a row to the table.'

// Each button should call the same "addrow()" function, but for each button clicked a new unique row should be added to the table.

// Create a ‘table.js’ file in the correct folder. 

// Use this file to populate the Table in the ‘personal’ section as follows, using Vanilla JavaScript:

// You need to have 5 rows of data. (Add a row on each button that has been clicked)
// Populate the table with data of your choice that is relevant to the table headers.
// Each row must have different data.
// The Table needs to be populated from the 'table.js' file you have created
//  The following functionality needs to be implemented in the ‘table.js’ file, using jQuery:

// When one of the images in the Table is clicked, the image needs to be displayed in a new tab / window in your web browser.
// The table’s odd rows need to change font color to pink when the mouse hovers over them, changing font color back to black once the mouse stops hovering over them.






//add row button

$("document").ready(function () {
    $("#btnAdd1").click(function (addrow) {
        $(".table").append("<tr><th> new id 1</th><th>new name 1</th><th>new description 1</th><th>'<img src = 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width = 50 >'</th> </tr>");
    });
});
$("document").ready(function () {
    $("#btnAdd2").click(function (addrow) {
        $(".table").append("<tr><th>new id 2</th><th>new name 2</th><th>new description 2</th><th>'<img src = 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width = 50 >'</th> </tr>");
    });
});
$("document").ready(function () {
    $("#btnAdd3").click(function (addrow) {
        $(".table").append("<tr><th>new id 3 </th><th>new name 3</th><th>new description 3</th><th>'<img src = 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width = 50 >'</th> </tr>");
    });
});
$("document").ready(function () {
    $("#btnAdd4").click(function (addrow) {
        $(".table").append("<tr><th>new id 4 </th><th>new name 4</th><th>new description 4</th><th>'<img src = 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width = 50 >'</th> </tr>");
    });
});
$("document").ready(function () {
    $("#btnAdd5").click(function (addrow) {
        $(".table").append("<tr><th>new id 5 </th><th>new name 5</th><th>new description 5</th><th>'<img src = 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width = 50 >'</th> </tr>");
    });
});

//When one of the images in the Table is clicked, the image needs to be displayed in a new window in your web browser.

const table = document.getElementsByTagName("table");
$(".table").click(function () {
    window.open("<img src='https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width=50>")
});

//The table’s odd rows need to change font color when the mouse hovers over them, changing font color back to black once the mouse stops hovering over them.
$(".table").on({
    mouseover: function () {
        $("table tr:odd").css({ "color": "pink" });
    },

    mouseleave: function () {
        $("table tr:odd").css({ "color": "black" });


    }
}
);

