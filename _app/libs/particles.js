jQuery(function($){
    $(document).ready(function() {
        const width = $('#home-banner-background').width();
        if (width >= 767) {
            $('#particles-js').show();
            particlesJS.load('particles-js', 'assets/files/particles.json', function() {
                console.log('callback - particles.js config loaded');
                if (width >= 1500) {
                    $('#particles-js').css('position', "absolute");
                    $('#particles-js').css('top', "0px");
                } else if (width >= 1200) {
                    $('#particles-js').css('position', "absolute");
                    // $('#particles-js').css('top', "-108px");
                }
            });
        } else {
            $('#particles-js').hide();
        }
    });

    $(window).resize(function() {
        const width = $('#home-banner-background').width();
        console.log('width', width);
        if (width >= 767) {
            $('#particles-js').show();
            particlesJS.load('particles-js', 'assets/files/particles.json', function() {
                console.log('callback - particles.js config loaded');
                if (width >= 1500) {
                    $('#particles-js').css('position', "absolute");
                    $('#particles-js').css('top', "0px");
                } else if (width >= 1200) {
                    $('#particles-js').css('position', "absolute");
                    // $('#particles-js').css('top', "-108px");
                }
            });
        } else {
            $('#particles-js').hide();
        }
    });
});
