// отсчет времени в пути до ресторана в блоке контакты
let time = 2;
let cc = 1;

$(window).scroll(function() {
$('#counter').each(function() {
    let
    cPos = $(this).offset().top,
    topWindow = $(window).scrollTop();
    if (cPos < topWindow + 1000) {
    if (cc < 2) {
        $(".initial__number").addClass("viz");
        $('div').each(function() {
        let
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
    // $('html').addClass('no__scroll')
});
//Закрытие попап
$('.close__popup').click(function(){
    $('.hidden').fadeOut(600);
    // $('html').removeClass('no__scroll')
});

//burger-menu
const leftBar = document.getElementById('left-bar');
const burgerBtn = document.getElementById('burger-btn');
const burgerNav = document.getElementById('burger-nav');
const socialIcons = document.getElementById('social-icons');
const barOpened = document.querySelector('.left__bar_logo');
const bodyNoScroll = document.body;
// document.addEventListener('DOMContentLoaded', function(){
//     leftBar.addEventListener('click', function () {
        
//     })
// })

burgerBtn.addEventListener('click', function () {
    leftBar.classList.toggle('open');
    burgerNav.classList.toggle('hidden2');
    socialIcons.classList.toggle('soc__icons_row');
    burgerBtn.classList.toggle('lb__burger_mb');
    // bodyNoScroll.classList.toggle('no__scroll');
    barOpened.classList.toggle('show');
})

// табы с меню в странице delivery ---------------
// получаем все табы-кнопки
const tabsBtn = document.querySelectorAll('.tabs-menu-btn');
//все блоки с меню
const dishBlock = document.querySelectorAll('.menu-dish');
// проходим по коллекции кнопок и вешаем обработчик события click
tabsBtn.forEach(function(item){
    item.addEventListener('click', function(){
        //загоняем текущую кнопку в переменную currentBtn
        let currentBtn = item;
        //получаем атрибут по выбранной кнопке
        let tabIdAtt = currentBtn.getAttribute('data-tab');
        // в переменную задаем таб. который мы хотим показывать
        let currentTab = document.querySelector(tabIdAtt);
        //перезаписываем класс active, если он где-то есть
        
        tabsBtn.forEach(function(item){
            item.classList.remove('active');
        });

        dishBlock.forEach(function(item){
            item.classList.remove('active');
        });
        //добавляем текущей кнопке класс active
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    })
})
