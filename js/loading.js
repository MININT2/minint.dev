$(document).ready(function() {
    //executes when the document is loaded and the DOM is ready
    $('#loading').show();
});
$(window).on("load", function() {
    //executes when complete page is fully loaded
    //includes all objects and images
    $("#loading").hide();
});