// Tekst w Header
var typed = new Typed(".auto-input", {
    strings: ["Jestem Dominik Wędzina"],
    smartBackSpace: true,
    typeSpeed: 100,
    loop: false,
    showCursor: true

})


// Przycisk w Header
$('.btnportfolio').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.portfolio').offset().top
    }, 1500)
})

//Button w nawigacji
const menuBtn = document.querySelector('.menuBtn');
const navigation = document.querySelector('.navigation');
const icon = document.querySelector('.fa-bars');
const secondIcon = document.querySelector('.fa-xmark');

menuBtn.addEventListener('click', function() {
    navigation.classList.toggle('off');
    navigation.classList.toggle('active');
    icon.classList.toggle('off');
    secondIcon.classList.toggle('off');
})

//Nawigacja

// $('.navAbout').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.features').offset().top
//     },1500)
// })

$('li a').on('click', function () {
    const $goToSection = '.' + $(this).attr('id');
    $('body, html').animate({
        scrollTop: $($goToSection).offset().top
    },1500)
})

//Nawigacja przy scrollu
    $(window).on('scroll', function() {
        const scrollValuee = $(window).scrollTop();
        const featuresHeight = $('.features').offset().top;

        if(scrollValuee > featuresHeight) {
            $(menuBtn).addClass('off');
        } else {
            $(menuBtn).removeClass('off');
        }
    })

// Sekcja 2
$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    const $pro2 = $('.project2');
    const pro2Height = $pro2.outerHeight();
    const pro2FromTop = $pro2.offset().top;

    const $pro3 = $('.project3');
    const pro3Height = $pro3.outerHeight();
    const pro3FromTop = $pro3.offset().top;

    const $pro4 = $('.project4');
    const pro4Height = $pro4.outerHeight();
    const pro4FromTop = $pro4.offset().top;

    if (scrollValue > pro2Height + pro2FromTop - windowHeight) {
        $pro2.addClass('active');
    }

    if (scrollValue > pro3Height + pro3FromTop - windowHeight) {
        $pro3.addClass('active');
    }

    if (scrollValue > pro4Height + pro4FromTop - windowHeight) {
        $pro4.addClass('active');
    }

    // Czyszczenie
    if (scrollValue < 100) {
        $('.project').removeClass('active');
    }

})

// Scroll Top
const btnScrollToTop = $('.goback');

btnScrollToTop.on('click', function() {
    $('body, html').animate({
        scrollTop: $('header').offset().top
    }, 500)
})

$(window).on('scroll', function() {
    const scrollValuee = $(window).scrollTop();
    const headerHeight = $('header').offset().top;

    if(scrollValuee > headerHeight) {
        btnScrollToTop.addClass('active');
    } else {
        btnScrollToTop.removeClass('active');
    }
})
