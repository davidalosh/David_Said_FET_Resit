$("document").ready(function () {
    $("#liveToastBtn").click(function () {
        $("#liveToast").toast("show");
    })
});

$.ajax({
    url: 'https://www.boredapi.com/api/activity/',
    success: function (response) {
        console.log(response);
        $('#getGoingBtn').click(function () {
            console.log(response.activity);
        })
    }
});