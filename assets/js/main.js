const circleType = new CircleType(document.getElementById("rotated")).radius(80);

$(window).scroll(function () {
    var offset = $(window).scrollTop();
    offset = offset * 0.4;

    $(".circular-text").css({
        "-moz-transform": "translate(-50%, -50%) rotate(" + offset + "deg)",
        "-webkit-transform": "translate(-50%, -50%) rotate(" + offset + "deg)",
        "-o-transform": "translate(-50%, -50%) rotate(" + offset + "deg)",
        "-ms-transform": "translate(-50%, -50%) rotate(" + offset + "deg)",
        "transform": "translate(-50%, -50%) rotate(" + offset + "deg)"
    });
});

















