$(function() {

    alert("Loading content");
    
    $("#headerpane").load("./pages/header.html", function() {
        $("#headerpane").fadeIn(800);
    });

    $("#contentpane").load("./pages/content.html");

    $("#footerpane").load("./pages/footer.html");

});