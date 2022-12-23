// Create a ‘contact.js’ file in the correct folder.

// In this file, you must create a single function called “updateDetails()” with the following 2 variables:

// •	telephone_number

// •	email_address



//  In the index.html file, there is an “Update Contact detail” button element.

// When this button is clicked, the following should happen in the function created above:



// Ask the user for information.
// You must store this information in the 2 variables created in the contact.js file.Make sure that data is received from the user input, 
//'and that it is in the correct format(e.g., make sure the user enters only numbers for the telephone number, and make sure the user enters an email address containing both a '@' and '.').'

//  Change the current contact information(“Number not found”, and “Email not found”) to the input data in these 2 new variables.

// This must be done using jQuery selectors, without adding more HTML IDs to the ‘contact’ section.

//  Print the data entered, into the console in the following format:

// Contact: 0458754125
// Address: 12 Smith Road, John Park. 




$(document).ready(function () {
    document.getElementById("update-contact");
    $("#update-contact").click(function (updateDetails) {
        var email = prompt("enter email_address contains both a '@' and '.'");
        var telephone_number = prompt("Enter telephone_number (only numbers accepted!)");




        $(".info-box p:eq(1)").html(telephone_number);
        $(".info-box p:eq(3)").html(email);



        console.log("contact :" + telephone_number, "\naddress : " + email);

    })
});
