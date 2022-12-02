let number = document.querySelector("#num-1"),
numberTop = number.getBoundingClientRect().top,
start = +number.innerHTML,
end = +number.dataset.max;
let isAnimatePriceInitialized = false;
let infoTop = $(".info").offset().top;

window.addEventListener ("scroll", function onScroll(){
    if(window.pageYOffset > infoTop) {
        this.removeEventListener("scroll", onScroll);
        let interval = setInterval(function() {
            number.innerHTML = ++start;
            if(start == end) {
                clearInterval(interval);
            }
        }, 0.1);
    };
});

let number2 = document.querySelector("#num-2"),
numberTop2 = number2.getBoundingClientRect().top,
start2 = +number2.innerHTML,
end2 = +number2.dataset.max;
let isAnimatePriceInitialized2 = false;
let infoTop2 = $(".info").offset().top;

window.addEventListener ("scroll", function onScroll(){
    if(window.pageYOffset > infoTop2) {
        this.removeEventListener("scroll", onScroll);
        let interval2 = setInterval(function() {
            number2.innerHTML = ++start2;
            if(start2 == end2) {
                clearInterval(interval2);
            }
        }, 0.1);
    };
});


$(document).ready(function(){
    $('.videos__content').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });
})


const headerBtn = document.querySelector("#header-btn");
const headerModal = document.querySelector("#header-modal");

headerBtn.addEventListener('click', function(){
    headerModal.classList.toggle('active')
    headerBtn.classList.toggle('transform')
})

document.addEventListener('keydown', function(e) {
    if( e.keyCode == 27 ){
        headerModal.classList.remove('active')
        headerBtn.classList.remove('transform')
    }
});

// Modal
const modal = document.querySelector(".modal");
const modalWindow = document.querySelector(".modal__window");
const headerImg = document.querySelector(".header__img");
const modalClose = document.querySelector("#modal__close");
const body = document.querySelector("body");


headerImg.addEventListener('click', function(){
    modal.classList.remove('modal-hidden')
    body.style.overflow = 'hidden';
})

modalClose.addEventListener('click', function(){
    modal.classList.add('modal-hidden')
    body.style.overflow = '';
})

modal.addEventListener('click', function(){
    modal.classList.add('modal-hidden')
    body.style.overflow = '';
})

    modalWindow.addEventListener('click', function(e) {
        e.stopPropagation();
})

document.addEventListener('keydown', function(e) {
    if( e.keyCode == 27 ){
        modal.classList.add('modal-hidden')
        body.style.overflow = '';
    }
});



$('#intro-img').on('click', function() {
    $('html,body').animate({scrollTop:$('.contacts').offset().top+"px"},{duration:1E3});
});

$('.header__logo').on('click', function() {
    $('html,body').animate({scrollTop:$('.intro').offset().top+"px"},{duration:1E3});
});

$('.menu-1').on('click', function() {
    $('html,body').animate({scrollTop:$('.info').offset().top+"px"},{duration:1E3});
    headerModal.classList.remove('active')
    headerBtn.classList.remove('transform')
});

$('.menu-2').on('click', function() {
    $('html,body').animate({scrollTop:$('.videos').offset().top+"px"},{duration:1E3});
    headerModal.classList.remove('active')
    headerBtn.classList.remove('transform')
});

$('.menu-3').on('click', function() {
    $('html,body').animate({scrollTop:$('.services').offset().top+"px"},{duration:1E3});
    headerModal.classList.remove('active')
    headerBtn.classList.remove('transform')
});

$('.menu-4').on('click', function() {
    $('html,body').animate({scrollTop:$('.partners').offset().top+"px"},{duration:1E3});
    headerModal.classList.remove('active')
    headerBtn.classList.remove('transform')
});

$('.menu-5').on('click', function() {
    $('html,body').animate({scrollTop:$('.contacts').offset().top+"px"},{duration:1E3});
    headerModal.classList.remove('active')
    headerBtn.classList.remove('transform')
});


// Mask_tel 
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.modal__content-input'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});











