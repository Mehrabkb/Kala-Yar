$('.A-slider').flickity({
    autoPlay: true
})

if ($(window).width() < 1024) {
    $('.A-slider').flickity({
        prevNextButtons: false,
        pageDots: false
    })
}