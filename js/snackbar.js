function myFunction() {
    //get the snackbar div
    var x = document.getElementById("snackbar");  
    //add the "show" class to div
    x.className = "show";
    //after 3 seconds, remove the show class from div
    setTimeout(function() { 
        x.className = x.className.replace("show", ""); 
    }, 3000);
}