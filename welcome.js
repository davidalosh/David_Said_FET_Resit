//create a jQuery function that selects the HTML element with the “liveToastBtn” ID and shows the HTML Toast element with the ID of ‘liveToast’. This function should be run when the user clicks the ‘Like’ button in the HTML header.


$("document").ready(function () {
    $("#liveToastBtn").click(function () {
        $("#liveToast").toast('show');
    });

});

//create another function that executes a GET Request to the “https://www.boredapi.com/api/activity/” API, once the new “I’m Bored” button is clicked. The response from this API Request should be logged into the web console.


const button = document.getElementById('boredBtn');

button.addEventListener('click', function () {
    fetch('https://www.boredapi.com/api/activity/')
        .then(function (result) {
            console.log(result);

        })
});