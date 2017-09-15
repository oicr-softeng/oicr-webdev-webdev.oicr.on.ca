jQuery(function($){
    $(document).ready(function() {
        particlesJS.load('particles-js', '/assets/files/particles.json', function() {
            const height = $('#home-banner-background').height();
            const canvas_el = document.querySelector('#particles-js > .particles-js-canvas-el');
            if (canvas_el.height > height) {
                canvas_el.height = height;
                $('#particles-js > .particles-js-canvas-el').css('height', '100%');
            } else {
                canvas_el.height = height;
                $('#particles-js > .particles-js-canvas-el').css('height', height+'px');
            }
            const width = $('#home-banner-background').width();
            $('#particles-js .particles-js-canvas-el').css('position', "absolute");
            if (width >= 1200) {
                $('#particles-js .particles-js-canvas-el').css('top', "0px");
            } else if (width >= 902) {
                $('#particles-js .particles-js-canvas-el').css('top', "60px");
            } else {
                $('#particles-js .particles-js-canvas-el').css('top', "108px");
            }
        });
    });

    $(window).resize(function() {
        const width = $('#home-banner-background').width();
        if (width >= 1200) {
            $('#particles-js .particles-js-canvas-el').css('top', "0px");
        } else if (width >= 902) {
            $('#particles-js .particles-js-canvas-el').css('top', "60px");
        } else {
            $('#particles-js .particles-js-canvas-el').css('top', "108px");
        }
        const height = $('#home-banner-background').height();
        const canvas_el = document.querySelector('#particles-js > .particles-js-canvas-el');
        if (canvas_el.height > height) {
            canvas_el.height = height;
            $('#particles-js > .particles-js-canvas-el').css('height', '100%');
        } else {
            canvas_el.height = height;
            $('#particles-js > .particles-js-canvas-el').css('height', height+'px');
        }
    });
});
