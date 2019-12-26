$('.A-slider').flickity({
    autoPlay: true
})

$(window).scroll(function() {
    if ($('#category').offset().top) {
        $('#fadeleft').addClass('animated fadeInLeft delay-200ms')
        $('#faderight').addClass('animated fadeInRight delay-200ms')
    }
})

$('.product-carousel').flickity({
    pageDots: false,
    freeScroll: true,
    cellAlign: 'center',
    wrapAround: true
})
$('.main-slider').flickity({
  pageDots:false,
  freeScroll:true,
  cellAlign:'center',
  wrapAround:true
})
