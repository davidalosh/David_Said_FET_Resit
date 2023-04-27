const table = document.getElementById("personalTable");

var row = table.insertRow(1);
var row1 = table.insertRow(2);
var row2 = table.insertRow(3);
var row3 = table.insertRow(4);
var row4 = table.insertRow(5);

//make the firste row
var id = row.insertCell(0);
var icon = row.insertCell(1);
var description = row.insertCell(2);
var info = row.insertCell(3);
var img = row.insertCell(4);

//make the second row
var id1 = row1.insertCell(0);
var icon1 = row1.insertCell(1);
var description1 = row1.insertCell(2);
var info1 = row1.insertCell(3);
var img1 = row1.insertCell(4);

// make the third row
var id2 = row2.insertCell(0);
var icon2 = row2.insertCell(1);
var description2 = row2.insertCell(2);
var info2 = row2.insertCell(3);
var img2 = row2.insertCell(4);

//make the forth row
var id3 = row3.insertCell(0);
var icon3 = row3.insertCell(1);
var description3 = row3.insertCell(2);
var info3 = row3.insertCell(3);
var img3 = row3.insertCell(4);

//mak ethe fifth row
var id4 = row4.insertCell(0);
var icon4 = row4.insertCell(1);
var description4 = row4.insertCell(2);
var info4 = row4.insertCell(3);
var img4 = row4.insertCell(4);


//Set the innerHTML property
id.innerHTML = "new id 1";
icon.innerHTML = "new icon 1";
description.innerHTML = "new description 1";
info.innerHTML = "new info 1";
img.innerHTML = "<img src='https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width=50>"

id1.innerHTML = "new id 2";
icon1.innerHTML = "new icon 2";
description1.innerHTML = "new description 2";
info1.innerHTML = "new info 2";
img1.innerHTML = "<img src='https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width=50>"
id2.innerHTML = "new id 3";
icon2.innerHTML = "new icon 3";
description2.innerHTML = "new description 3";
info2.innerHTML = "new info 3";
img2.innerHTML = "<img src='https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width=50>"
id3.innerHTML = "new id 4";
icon3.innerHTML = "new icon 4";
description3.innerHTML = "new description 4";
info3.innerHTML = "new info 4";
img3.innerHTML = "<img src='https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width=50>"
id4.innerHTML = "new id 5";
icon4.innerHTML = "new icon 5";
description4.innerHTML = "new description 5";
info4.innerHTML = "new info 5";
img4.innerHTML = "<img src='https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width=50>"
//When one of the images in the Table is clicked, the image needs to be displayed in a new window in your web browser.
$("#personalTable").click(function () {
    window.open("<img src='https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg' style: width=50>")
});

//The table’s odd rows need to change font color when the mouse hovers over them, changing font color back to black once the mouse stops hovering over them.
$("#personalTable").on({
    mouseover: function () {
        $("table tr:odd").css({ "color": "red" });
    },

    mouseleave: function () {
        $("table tr:odd").css({ "color": "black" });


    }
}
);

