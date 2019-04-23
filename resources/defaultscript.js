$(function() {
    
    $("#headerpane").load("./pages/header.html");

    $("#contentpane").load("./pages/content.html");

    $("#footerpane").load("./pages/footer.html");


    $("#loadbutton").click(function() {

        $("#contentpane").load("./pages/AxonTutorial.md");

    });

    $(".linkitem").click(function() {
        var item = $(this).attr("link");
        alert("Clicked." + item);
    });

});