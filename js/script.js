jQuery(document).ready(function($){
    $(window).bind('scroll', function() {
        var navHeight = $( window ).height() - 100;
        //console.log(navHeight);
        if ($(window).scrollTop() > $('nav').height()+25) {
            $('nav').addClass('fixed-top');
        }
        else {
            $('nav').removeClass('fixed-top');
        }
    });
});


jQuery(document).ready(function($){
    var form = $(".form-container");

    form.on("submit", function (event) {
        event.preventDefault();
        var vanilaForm = this;
        var form = $(vanilaForm);

        var way = form.data('action') || "ajax_order";

        var formData = new FormData(vanilaForm);
        formData.append("action", way);

        $.ajax({
            url: "/wp-admin/admin-ajax.php",
            method: 'post',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                $('#submit-ajax').html(response);
            },
            error: function(ts) { alert(ts.responseText) } });
    });
});
