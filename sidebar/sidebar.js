$("#toggle-left").click(function(e) {
        e.preventDefault();
        $(".wrapper").toggleClass("toggled-left");
});
$("#toggle-right").click(function(e) {
        e.preventDefault();
        $(".wrapper").toggleClass("toggled-right");
});
