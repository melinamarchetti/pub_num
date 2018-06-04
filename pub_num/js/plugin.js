$(function(){
    
    //this code is for the scroll how it is look like
    $("html").niceScroll({
        cursorcolor:"aquamarine",
        cursorwidth:"24px",
        background:"rgba(20,20,20,0.3)",
        cursorborder:"1px solid aquamarine",
        cursorborderradius:0
    });
    
    
    // this code to know the width of screen to help for responsive
    $("html").niceScroll();
    console.log($(window).width());
    
    //this code for moving to map by click on any paragraph

// Initialize and add the map
    function initMap() {
        // The location of Uluru
        var center = {lat: 35.056894, lng: 9.401247};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'),
            {
                zoom: 6,
                center: center
            });
        // The markers
        var marker1 = new google.maps.Marker({
                position: {lat: 36.854245, lng: 10.334863},
                map: map
        });

        var marker2 = new google.maps.Marker({
            position: {lat: 36.559692, lng: 8.754124},
            map: map
        });

        var marker3 = new google.maps.Marker({
            position: {lat: 36.422852, lng: 9.219348},
            map: map
        });

        var marker4 = new google.maps.Marker({
            position: {lat: 35.296673, lng: 10.706876},
            map: map
        });

        var marker5 = new google.maps.Marker({
            position: {lat: 36.947785,  lng: 11.098757},
            map: map
        });

        var marker6 = new google.maps.Marker({
            position: {lat: 36.847557,  lng: 10.322021},
            map: map
        });

        var marker7 = new google.maps.Marker({
            position: {lat: 35.241590,  lng: 9.118103},
            map: map
        });

        var marker8 = new google.maps.Marker({
            position: {lat: 36.489542,  lng: 8.57696},
            map: map
        });

       var marker9 = new google.maps.Marker({
                position: {lat: 33.886917,  lng: 9.537499},
                map: map
        });

        var marker10 = new google.maps.Marker({
            position: {lat: 36.607642,  lng: 10.172211},
            map: map
        });

        google.maps.event.addListener(marker1, 'click', function () {
            $('body,html').animate({
                scrollTop: $('.infoSection:nth-of-type(1)').offset().top - 20
            },500)
        });

        google.maps.event.addListener(marker2, 'click', function () {
            $('body,html').animate({
                scrollTop: $('.infoSection:nth-of-type(2)').offset().top - 20
            },500)
        });

        google.maps.event.addListener(marker3, 'click', function () {
            $('body,html').animate({
                scrollTop: $('.infoSection:nth-of-type(3)').offset().top - 20
            },500)
        });

        google.maps.event.addListener(marker4, 'click', function () {
            $('body,html').animate({
                scrollTop: $('.infoSection:nth-of-type(4)').offset().top - 20
            },500)
        });

        google.maps.event.addListener(marker5, 'click', function () {
            $('body,html').animate({
                scrollTop: $('.infoSection:nth-of-type(5)').offset().top - 20
            },500)
        });

        google.maps.event.addListener(marker6, 'click', function () {
            $('body,html').animate({
                scrollTop: $('.infoSection:nth-of-type(6)').offset().top - 20
            },500)
        });

        google.maps.event.addListener(marker7, 'click', function () {
            $('body,html').animate({
                scrollTop: $('.infoSection:nth-of-type(7)').offset().top - 20
            },500)
        });

        google.maps.event.addListener(marker8, 'click', function () {
            $('body,html').animate({
                scrollTop: $('.infoSection:nth-of-type(8)').offset().top - 20
            },500)
        });

        google.maps.event.addListener(marker9, 'click', function () {
            $('body,html').animate({
                scrollTop: $('.infoSection:nth-of-type(9)').offset().top - 20
            },500)
        });

        google.maps.event.addListener(marker10, 'click', function () {
            $('body,html').animate({
                scrollTop: $('.infoSection:nth-of-type(10)').offset().top - 20
            },500)
        });


    }
    initMap()

    $('.infoSection > div > div > span').click(function () {
       $('body,html').animate({
           scrollTop : $('#map').offset().top
       }) ;
    });
});