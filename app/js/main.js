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
    headerBtn.classList.toggle('active')
})






