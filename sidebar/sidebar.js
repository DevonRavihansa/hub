$(".sidebar-toggler-left").click(function(e) {
        e.preventDefault();
        $(".wrapper").toggleClass("toggled-left");
});
$(".sidebar-toggler-right").click(function(e) {
        e.preventDefault();
        $(".wrapper").toggleClass("toggled-right");
});
