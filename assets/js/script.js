AOS.init();

// rk rk rk 

$(document).ready(function(){

    $('.menu-icon').click(function(){
        $('.menu').slideToggle(1000);
    });




    $("#smak").owlCarousel({
        loop:true,
        items:1,
        nav:true,
        navText:['prev','next'],
        autoplay:true,
        autoplayTimeout:1000,
    });

    $("#work-image").owlCarousel({
        loop:true,
        items:5,
        autoplay:true,
        autoplayTimeout:1000,
        responsive :{
            0:{
                item:1
            },
            449:{
                item:2
            },
            767:{
                item:3
            },
            991:{
                item:4
            },
        }
    });


    $('.count').counterUp({
        delay: 10,
        time: 3000
    });

  



});
