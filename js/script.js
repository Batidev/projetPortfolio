let typed = new Typed('.element', {
    strings: [" Developper", " Magical Princess", " Terrible"],
    typeSpeed: 150,
    loop: true
})

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        center: true
    });
});

$(function() {
    $.scrollIt({
        easing: 'ease', // the easing function for animation        
        scrollTime: 1200, // how long (in ms) the animation takes        
        topOffset: 0 // offste (in px) for fixed top navigation    
    });
});

$('#burger').on('click', function() {
    $('menu').toggleClass('menuVisi')
})

// $('#home').on('click', function() {
//     $('a').removeClass('sousLigne')
//     $('#home').addClass('sousLigne')
// })

// $grid = $(".container").isotope({
//     itemSelector: '.portfolio_image',
//     layoutMode: 'fitRows'
// });

// $('#home').on('click', function() {
//     $grid.isotope({
//         filter: '*'
//     });
//     $('')
// })