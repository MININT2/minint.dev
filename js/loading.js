$(document).ready(function() {
    //executes when the document is loaded and the DOM is ready
    $('#loading').show();
});
//.load() method deprecated from jQuery 1.8 onward
$(window).on("load", function() {
    //executes when complete page is fully loaded, including
    //all frames, objects and images
    $("#loading").hide();
});