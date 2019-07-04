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

    /*-------------------------------------------------*/
    // BANNER
    function setCookie(cname, cvalue) {
        document.cookie = `${cname}=${cvalue}`;
    }

    function getCookie(cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }

    function getClosedBannerListCookie() {
        var bannerCookie = getCookie('closedBanner');

        if (bannerCookie && bannerCookie.length) {
            return JSON.parse(bannerCookie.trim());
        }

        return null;
    }

    function setClosedBannerListCookie(messages) {
        setCookie(
            'closedBanner',
            messages && messages.length ? JSON.stringify(messages) : ''
        );
    }

    function setMainMarginTopBottom() {
        var bannerTopMargin = $('#banner-top-container')
            ? $('#banner-top-container').outerHeight()
            : 0;
        var bannerBottomMargin = $('#banner-bottom-container')
            ? $('#banner-bottom-container').outerHeight()
            : 0;
        $('#main-website-area').css('margin-top', `${bannerTopMargin}px`);
        $('#main-website-area').css('margin-bottom', `${bannerBottomMargin}px`);
        $('#navigation').css('top', `${bannerTopMargin}px`);
    }

    function getBannerTopHeight() {
        return $('#banner-top-container')
            ? $('#banner-top-container').outerHeight()
            : 0;
    }

    $(document).ready(function() {
        var closedBanner = getClosedBannerListCookie();

        if ($('.banner.banner-dismissible')) {
            $('.banner.banner-dismissible').each(function() {
                if (
                    closedBanner &&
                    closedBanner.length &&
                    closedBanner.includes($(this).attr('id'))
                ) {
                    $(this).remove();
                } else {
                    $(this).css('display', 'flex');
                }
            });
        }

        if ($('#banner-top-container')) {
            $('#banner-top-container').css('position', 'fixed');
        }
        if ($('#banner-bottom-container')) {
            $('#banner-bottom-container').css('position', 'fixed');
        }

        setMainMarginTopBottom();

        $('.banner-dismiss').click(function() {
            var target = $(this).data('target');
            var bannerCookie = getClosedBannerListCookie() || [];
            setClosedBannerListCookie(bannerCookie.concat([target]));
            $(`#${target}`).remove();

            setMainMarginTopBottom();
        });
    });

    /*-------------------------------------------------*/
    // BACK TO TOP

    function backToTop() {
        // Display "Back to top" button if page height is longer than
        // 700px or twice the browser height
        if ($(document).height() > $(window).height() * 2) {
            if ($(this).scrollTop() > Math.min(700, $(window).height())) {
                $('#backToTop').fadeIn();
                $('#backToTop').css('display', 'flex');
                if ($('#banner-bottom-container'))
                    $('#backToTop').css(
                        'bottom',
                        `${$('#banner-bottom-container').outerHeight() + 15}px`
                    );
            } else {
                $('#backToTop').fadeOut();
            }
        }
    }

    backToTop();

    $('#backToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*-------------------------------------------------*/
    // Navbar Functions

    var $window = $(window);
    var $menuAnchor = $('#nav-main-menu .dropdown-toggle');

    function stickyNavSetting() {
        $('#navigation').addClass('sticky');
        $('#navigation').css('top', `${getBannerTopHeight()}px`);
        $('#main-website-area').css(
            'padding-top',
            `${$('#navigation').outerHeight()}px`
        );
    }

    function unStickyNavSetting() {
        $('#navigation').removeClass('sticky');
        $('#main-website-area').css('padding-top', '0');
    }

    function stickyNavBar(forceRecalculate) {
        var windowWidth = $window.width();
        var alwaysSticky = window.STICKY_BY_DEFAULT_BELOW || 768;
        var sctop = window.STICKY_SCROLL_TOP || 0;

        if (windowWidth < alwaysSticky || $(document).scrollTop() > sctop) {
            $('#navigation').css('top', `${getBannerTopHeight()}px`);
            if (
                !$('#navigation').hasClass('sticky') ||
                $('#navigation').scrollTop() ||
                forceRecalculate
            ) {
                stickyNavSetting();
            }
            //Dropdown list
            $('.dropdown-toggle').attr('data-toggle', 'dropdown');
            $('.dropdown-toggle').click(function() {
                if ($(this).hasClass('open')) {
                    $(this).removeClass('open');
                } else {
                    $(this).addClass('open');
                }
            });
        } else {
            if ($('#navbar-collapse-1').hasClass('in')) {
                $('#navbar-collapse-1').removeClass('in');
            }
            $('.dropdown-toggle').attr('data-toggle', '');

            if ($('#navigation').hasClass('sticky')) {
                var navHeight = 0;
                if ($('#sticky-nav')) {
                    if ($('main').length && $('main').offset()) {
                        navHeight =
                            $('main').offset().top -
                            $('#sticky-nav').outerHeight();
                    } else if (
                        $('#app-user-services') &&
                        $('#app-user-services').offset()
                    ) {
                        navHeight =
                            $('#app-user-services').offset().top -
                            $('#sticky-nav').outerHeight();
                    }
                }
                if (window.pageYOffset <= navHeight) {
                    unStickyNavSetting();
                }
            } else {
                var navOffset = 0;
                if ($('#menu-main-menu') && $('#menu-main-menu').offset()) {
                    navOffset += $('#menu-main-menu').offset().top;
                    if (
                        $('#navbar-collapse-1') &&
                        $('#navbar-collapse-1').offset()
                    ) {
                        navOffset =
                            $('#menu-main-menu').offset().top -
                            $('#navbar-collapse-1').offset().top;
                    } else {
                        navOffset = $('#menu-main-menu').offset().top;
                    }
                }
                if (window.pageYOffset > navOffset) {
                    stickyNavSetting();
                }
            }
        }
    }

    function sizeDependentMenuBehaviour(forceRecalculate) {
        var windowWidth = $(window).width();
        var breakpoint = window.GRID_FLOAT_BREAKPOINT || 768;
        setMainMarginTopBottom();
        if (windowWidth < breakpoint) {
            $menuAnchor.attr('data-toggle', 'dropdown');
        } else {
            $menuAnchor.attr('data-toggle', '');
        }
        if (!window.STICKYNAV_DISABLED) {
            stickyNavBar(forceRecalculate);
        }
    }

    function centerModal() {
        $(this).css('display', 'block');
        var $dialog = $(this).find('.modal-dialog'),
            offset = ($(window).height() - $dialog.height()) / 2,
            bottomMargin = parseInt($dialog.css('marginBottom'), 10);

        // Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
        if (offset < bottomMargin) offset = bottomMargin;
        $dialog.css('margin-top', offset);
    }

    $(document).on('show.bs.modal', '.image-modal', centerModal);
    $(window).on('resize', function() {
        $('.image-modal:visible').each(centerModal);
    });

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
    document.body.addEventListener('userLoggedin', function() {
        sizeDependentMenuBehaviour(true);
    });
});
