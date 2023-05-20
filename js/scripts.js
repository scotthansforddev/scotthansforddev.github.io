$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$("#mainListDiv a").click(function () {
    $('.navTrigger').removeClass('active');
    $("#mainListDiv").removeClass("show_list");
    // Add any additional logic to close the menu here, if needed
});