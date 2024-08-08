//For Slider One Starts
$('.owl_carousel_slider_one').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navContainer:'#myNav',
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//For Slider One Ends
//Special Offers Slider Starts
$('.owl_carousel_slider_two').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    navContainer:'#myNavTwo',
    navText:['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
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
})
//Special Offers Slider Ends