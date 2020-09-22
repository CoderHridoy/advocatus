// CAROUSEL SLILDER //
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    });
    new WOW().init();
});

// SCROLLIFY //
$(function () {
    $.scrollify({
        section: ".scrollify",
        setHeights: false,
        updateHash: false,
    });
});

// HAMBURGER MENU //
function openMenu() {
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu() {
    document.getElementById('navbar').style.height = 0;
}

// SMOOTH SCROLL //
$(function () {
    $('.main-nav a').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});