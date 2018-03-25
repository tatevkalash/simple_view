
$(document).ready(function(){
    $.scrollify({
        section : "section",
        updateHash: true,
    });
    $(".popup-image").click(function (e) {
        e.preventDefault();
        $(".modal img").attr("src", $(this).attr("href"));
        $(".modal").modal("show");
    });
    $(".popup-image").click(function (e) {
        e.preventDefault();
        $(".modal img").attr("src", $(this).attr("href"));
        $(".modal").modal("show");
    });
});