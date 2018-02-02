$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
$("#close1").click(function(e){
    $("#card1").remove();
});

$("#appearance4").roundSlider({
    radius: 90,
    width: 10,
    handleSize: "+10",
    sliderType: "range",
    value: "10,65",
    showTooltip: false
});
$("#toggle1").click(function(e){
    $(this).find("i").toggleClass("text-primary");
});
