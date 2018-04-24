(function($){



//nav fixed
$('document').ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $('.main-nav').addClass('fixed-top');
        } else {
            $('.main-nav').removeClass('fixed-top');
        }
    });
});


//main-carousel
$('document').ready(function () {
    $('.header .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.header .owl-carousel').on("changed.owl.carousel", function (event) {
        // selecting the current active item
        var item = event.item.index - 2;
        // first removing animation for all captions
        $('h5').removeClass('animated fadeInDown');
        $('.owl-item').not('.cloned').eq(item).find('h5').addClass('animated fadeInDown');

        $('h1').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated zoomIn');

        $('button').removeClass('animated jackInTheBox');
        $('.owl-item').not('.cloned').eq(item).find('button').addClass('animated jackInTheBox');

    })

});


//search popup
$('document').ready(function () {
    $('.custom-link.search').click(function () {
        $('.search-popup').addClass('active-popup');
    });
    $('.cross').click(function () {
        $('.search-popup').removeClass('active-popup');
    });
});


//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



//what we do carousel
$('document').ready(function () {
    $('.what-we-do .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        smartSpeed: 1000,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 6000,
    });
});



// parallax image
$('document').ready(function () {
    $(window).scroll(function (e) {
        parallax();
    })


    function parallax() {
        var scroll = $(window).scrollTop();
        var screenHeight = $(window).height();

        $('.parallax').each(function () {
            var offset = $(this).offset().top;
            var distanceFromBottom = offset - scroll - screenHeight

            if (offset > screenHeight && offset) {
                $(this).css('background-position', 'center ' + ((distanceFromBottom) * 0.2) + 'px');
            } else {
                $(this).css('background-position', 'center ' + ((-scroll) * 0.2) + 'px');
            }
        })
    }
});



//home tabs
$('document').ready(function () {
    $('#tabs').tabs({
        show: {
            effects: "fade",
            duration: 2000
        }
    });
});



// video popup 
$(function () {
    $(".video,#video-1").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
});


//counting up
$('document').ready(function () {
    $('.counter').countUp({
        delay: 20,
        duration: 2000,
    });
});

//scroll top
$('document').ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 260) {
            $('.scroll-top').fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
    });
    $('.scroll-top').click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
});


// preloader 
$(window).on('load', function () {
    $('.preloader').fadeOut();
    $('.loader').delay(1350).fadeOut('slow');
    $('body').delay(1350).css({
        'overflow': 'visible'
    });
})


//timeline carousel
$('document').ready(function () {
    $('#timeline-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        smartSpeed: 1000,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
    });
});

//skills bar
$('document').ready(function () {
    $('progress').each(function () {
        var max = $(this).val();
        $(this).val(0).animate({
            value: max
        }, {
            duration: 3000,
            easing: 'easeOutCirc'
        });
    });
});


//accordion
$('document').ready(function () {
    $("#accordion").accordion({
        classes: {
            "ui-accordion-header": "ui-accordion-custom-header",
            "ui-accordion-header-active": "ui-accordion-custom-header-active",
            "ui-accordion-header-collapsed": "ui-accordion-custom-header-collapsed",
            "ui-accordion-content": "ui-accordion-custom-content",
            "ui-accordion-header-icon": "ui-accordion-custom-header-icon"
        },
        collapsible: true,
        animate: 500,
        heightStyle: "content",
        icons: {
            header: "fas fa-angle-right",
            activeHeader: "fas fa-angle-left"
        }
    });
});



//portfollio carousel
$('document').ready(function () {
    $('.portfllio-popup .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        items: 1,
        dots: false,
    })
});

//portfollio popup
$('document').ready(function () {
    $('.portfollio .image .icon').click(function () {
        $('.portfllio-popup').fadeIn(600);
    });
    $('.portfllio-popup .cross').click(function () {
        $('.portfllio-popup').fadeOut(600);
    })
});


//about carousel
$('document').ready(function () {
    $('#opinions-carousel').owlCarousel({
        loop: true,
        margin: 5,
        items: 1,
    })
});



$('document').ready(function () {
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    $('.filter-button-group button').on('click', function(event){
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    })
});
    
    
    
    
    
	})(jQuery)


//map

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        maxZoom: 18,
        minZoom: 15,
        disableDefaultUI: false,
        scrollwheel: false,
        draggable: true,
        center: {
            lat: 23.8671078,
            lng: 90.3850752
        },
        styles: [
            {
                elementType: 'geometry',
                stylers: [{
                    color: '#333333'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#000'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#F35379'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#fff'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#2B2B2B'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#fff'
                }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#EDEDED'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#2B2B2B'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#E5E5E5'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#E5E5E5'
                }]
            }
          ]

    });

    var marker = new google.maps.Marker({
        position: map.getCenter(),
        icon: 'images/map.png',
        draggable: false,
        map: map
    });

}
