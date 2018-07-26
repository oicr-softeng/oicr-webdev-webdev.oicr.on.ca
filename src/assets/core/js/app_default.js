$(document).ready(function() {
    if (!window.BACKTOTOP_DISABLED) {
        // Display "Back to top" button if page height is longer than
        // 700px or twice the browser height
        $(window).scroll(function() {
            if ($(document).height() > $(window).height() * 2) {
                if ($(this).scrollTop() > Math.min(700, $(window).height())) {
                    $('#backToTop').fadeIn();
                    $('#backToTop').css('display', 'flex');
                } else {
                    $('#backToTop').fadeOut();
                }
            }
        });

        // Scroll to top animation
        $('#backToTop').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 600);
            return false;
        });
    }
});
