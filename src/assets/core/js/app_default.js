$(document).ready(function() {
    (function() {
        if (
            '-ms-user-select' in document.documentElement.style &&
            navigator.userAgent.match(/IEMobile/)
        ) {
            var msViewportStyle = document.createElement('style');
            msViewportStyle.appendChild(
                document.createTextNode('@-ms-viewport{width:auto!important}')
            );
            document
                .getElementsByTagName('head')[0]
                .appendChild(msViewportStyle);
        }
    })();

    var $window = $(window);
    var $menuAnchor = $('#nav-main-menu .dropdown-toggle');

    function stickyNavBar() {
        var alwaysSticky = window.STICKY_BY_DEFAULT_BELOW || 768;
        var sctop = window.STICKY_SCROLL_TOP || 0;
        if (
            $(window).width() < alwaysSticky ||
            $(document).scrollTop() > sctop
        ) {
            $('#navigation').addClass('sticky');
        } else {
            $('#navigation').removeClass('sticky');
        }
    }

    function sizeDependentMenuBehaviour() {
        var windowWidth = $(window).width();
        var breakpoint = window.GRID_FLOAT_BREAKPOINT || 768;
        if (windowWidth < breakpoint) {
            $menuAnchor.attr('data-toggle', 'dropdown');
        } else {
            $menuAnchor.attr('data-toggle', '');
        }
        if (!window.STICKYNAV_DISABLED) {
            stickyNavBar();
        }
    }

    function backToTop() {
        // Display "Back to top" button if page height is longer than
        // 700px or twice the browser height
        if ($(document).height() > $(window).height() * 2) {
            if ($(this).scrollTop() > Math.min(700, $(window).height())) {
                $('#backToTop').fadeIn();
                $('#backToTop').css('display', 'flex');
            } else {
                $('#backToTop').fadeOut();
            }
        }
    }

    sizeDependentMenuBehaviour();
    $window.resize(sizeDependentMenuBehaviour);
    $window.scroll(function() {
        if (!window.STICKYNAV_DISABLED) {
            /* Navbar minimization */
            stickyNavBar();
        }

        if (!window.BACKTOTOP_DISABLED) {
            backToTop();
        }
    });
    $('#backToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});
