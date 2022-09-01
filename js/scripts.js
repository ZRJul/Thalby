$(document).ready(function(){

    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "none",
                duration: 1000
            },
            hide: {
                effect: "none",
                duration: 1000
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );



    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,

        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            600:{
                items:2
            },

            1000:{
                items:3
            }
        }
    });
});