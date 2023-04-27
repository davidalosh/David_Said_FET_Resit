
/*Create a ‘contact.js’ file in the correct folder.

In this file, you must create a single function with the following 3 variables:

email
telephone_number
address
 In the index.html file, in the ‘contact’ section, add a Button.

When this button is clicked, the following should happen in the function created above:

1. Ask the user for information.

You must store this information in the 3 variables created in the contact.js file. Make sure that data is received from the user input, and that it is in the correct format (e.g., make sure the user enters an email address containing both a '@' and '.' ).

 2. Change the current contact information (email, telephone number, and address) to the input data in these 3 new variables.

This must be done using jQuery selectors, without adding more HTML IDs to the ‘contact’ section.

 3. Print the data entered to the console in the following format:

From: email@emailaddress.co.za
Contact: 0458754125
Address: 12 Smith Road, John Park.*/




$(document).ready(function () {
    document.getElementById("contact");
    $(":button").click(function () {
        var email = prompt("enter email");
        var telephone_number = prompt("Enter telephone");
        var address = prompt("Enter address");

        $("contact p:eq(1)").html(telephone_number);
        $("contact p:eq(2)").html(email);
        $("contact p:eq(3)").html(address);
        console.log("From :", email, "\ncontact :", telephone_number, "\naddress : ", adress);
    })
});