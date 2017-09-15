jQuery(function($){
    var checkitem = function() {
        var carouselList = $(".carousel");
        carouselList.each(function(index, element) {
            var firstSlide = $(this).find('.item.first-slide');
            var lastSlide = $(this).find('.item.last-slide');
            if (firstSlide.hasClass("active")) {
                $(this).children(".carousel-control-prev").hide();
                $(this).children(".carousel-control-next").show();
            } else if (lastSlide.hasClass("active")) {
                $(this).children(".carousel-control-next").hide();
                $(this).children(".carousel-control-prev").show();
            } else {
                $(this).children(".carousel-control-prev").show();
                $(this).children(".carousel-control-next").show();
            }
        });
    };

    function showGallery(project) {
        var x = $("#black-overlay");
        x.show();
        var projectName = "#gallery-" + project;
        var y = $(projectName);
        y.addClass('active');
        // y.show();
        $("#webdev-carousel").carousel(0);
        carouselReposition(project);
    }

    function showGallery2(project) {
        var x = $("#black-overlay");
        x.show();
        var projectName = "#gallery-" + project;
        var y = $(projectName);
        y.addClass('active');
        // y.show();
        carouselReposition(project);
    }

    function hideGallery(project) {
        var x = $("#black-overlay");
        x.hide();
        var projectName = "#" + project;
        var y = $(projectName);
        y.removeClass('active');
        //y.hide();
    }

    function show() {
        var galleryList = $(".teaser-gallery");
        galleryList.each(function(index, element) {
            var galleryItem = $(this).find("a.teaser-hover");
            var temp = $(this);
            galleryItem.on("click", function() {
                showGallery(temp.attr('id'));
            });
        });
    }

    function hide() {
        var galleryList = $(".lightbox");
        galleryList.each(function(index, element) {
            var galleryItem = $(this).find("a.lightbox-title-close");
            var temp = $(this);
            galleryItem.on("click", function() {
                hideGallery(temp.attr('id'));
            });
        });
    }

    function show2() {
        var galleryList = $(".carousel-clickable");
        galleryList.each(function(index, element) {
            var galleryItem = $(this).find("div.slides");
            var temp = $(this);
            galleryItem.on("click", function() {
                showGallery2(temp.attr('id'));
            });
        });
    }

    function carouselReposition(project) {
        var carouselName = "#webdev-carousel-" + project;
        var carousel = $(carouselName);
        var indicator = carousel.find(".carousel-indicators");
        var prev = carousel.find(".carousel-control-prev");
        var next = carousel.find(".carousel-control-next");
        indicator.css("top", carousel.width() * 0.712 + 45 + "px");
        prev.css("top", carousel.width() * 0.36 + "px");
        next.css("top", carousel.width() * 0.36 + "px");
    }

    $(document).ready(function() {
        show();
        show2();
        hide();
        checkitem();
        // $("#webdev-carousel").on("slid.bs.carousel", "", checkitem);
        $(".carousel").on("slid.bs.carousel", "", checkitem);

        $('.carousel-challenge').on('click', '.shared-control[data-slide]', function (ev) {
            ev.preventDefault();
            $('.carousel-challenge').carousel($(this).data('slide'));
        });

        $('.carousel-challenge').on('click', '.carousel-indicator[data-slide-to]', function (ev) {
            ev.preventDefault();
            $('.carousel-challenge').carousel($(this).data('slide-to'));
        });

        $('.carousel-solution').on('click', '.shared-control[data-slide]', function (ev) {
            ev.preventDefault();
            $('.carousel-solution').carousel($(this).data('slide'));
        });

        $('.carousel-solution').on('click', '.carousel-indicator[data-slide-to]', function (ev) {
            ev.preventDefault();
            $('.carousel-solution').carousel($(this).data('slide-to'));
        });

        $('.filter-item').click((e) => {
            const filters = $(e.target).parents('.filter-item').attr('id') || e.target.id;
            $('.filter-item').each((idx, val) => {
                if ($(val).attr('id') === filters) {
                    $(val).addClass('active');
                } else {
                    $(val).removeClass('active');
                }
                if (filters === 'all') {
                $('.work-grid').isotope({ filter: '*' });
                } else {
                    $('.work-grid').isotope({ filter: '.'+filters });
                }
            })
        });

        $('#all').click();

        $('#filter-collapse-link').click((e) => {
            var x = document.getElementById("our-work-filter");
            if (x.className === "filter") {
                x.className += " expand";
            } else {
                x.className = "filter";
            }
        });

        particlesJS.load('particles-js', 'assets/files/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    });

    $(window).resize(function() {
        var galleryList = $(".teaser-gallery");
        galleryList.each(function(index, element) {
            var temp = $(this);
            carouselReposition(temp.attr('id'));
        });
    });
});
