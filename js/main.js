let time = 2;
let cc = 1;

$(window).scroll(function() {
$('#counter').each(function() {
    var
    cPos = $(this).offset().top,
    topWindow = $(window).scrollTop();
    if (cPos < topWindow + 200) {
    if (cc < 2) {
        $(".number").addClass("viz");
        $('div').each(function() {
        var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
            if (i <= num) {
                that.html(i);
            } else {
                cc = cc + 2;
                clearInterval(int);
            }
            i++;
            }, step);
        });
    }
    }
});
});

//popup
//ОТкрытие popup
$('.open__popup').click(function(){
    $('.hidden').fadeIn(600);
    $('html').addClass('no__scroll')
});
//Закрытие попап
$('.close__popup').click(function(){
    $('.hidden').fadeOut(600);
    $('html').removeClass('no__scroll')
});

//burger-menu
const leftBar = document.getElementById('left-bar');
const burgerBtn = document.getElementById('burger-btn');
const burgerNav = document.getElementById('burger-nav');
const socialIcons = document.getElementById('social-icons')
// document.addEventListener('DOMContentLoaded', function(){
//     leftBar.addEventListener('click', function () {
        
//     })
// })

burgerBtn.addEventListener('click', function () {
    leftBar.classList.toggle('open');
    burgerNav.classList.toggle('hidden2');
    socialIcons.classList.toggle('soc__icons_row');
    burgerBtn.classList.toggle('lb__burger_mb')

})
