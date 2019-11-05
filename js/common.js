$(document).ready(function () {    
    //Попап менеджер секция Обо мне
    $(".popup").magnificPopup({type:'image'});

    //Попап менеджер секция Потрфолио
    $(".popup_link").magnificPopup();
    //Сортируем элементы .portfolio_item для добавления атрибутов
    $(".portfolio_item").each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".port_descr").attr("id", "work_" + i);
    });

    

    //анимаци для заголовка с именем
    //берем элемент .top_text h1 задаем значение параметра,чтобы элемент спускался сверху вниз
    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

    //Анимация для секции Обо мне
    $(".animation_left").animated("fadeInLeft", "fadeOutDown");
    $(".animation_center").animated("flipInY", "fadeOutDown");
    $(".animation_right").animated("fadeInRight", "fadeOutDown");

    //анимация для секции Резюме
    $(".left_column_resume .resume_item").animated("fadeInLeft", "fadeOutLeft");
    $(".right_column_resume .resume_item").animated("fadeInRight", "fadeOutRight");    
   


    function heightDetect() {//сниппет
        $(".main_head").css("height", $(window).height());//делает высоту header по высоте экрана
    };
    heightDetect();
    //При изменении размера экрана вызов ф-ции heightDetect();
    $(window).resize(function () {
        heightDetect();
    });    

    //Главное меню
    //При клике на toggle_menu
    $(".toggle_menu").click(function() {        
        //добавляем к элементу .sandwich класс active и возвращаем меню в дефолтное положение
        $(".sandwich").toggleClass("active");
    });
    //плавный скролл для меню
    $(".top_menu ul a").mPageScroll2id();

    //Портфолио
    //вкл функциональность mixItUp с помощью ф-ции mixitup() передав ей в качестве аргумента селектор ".container"
    var mixer = mixitup(".container");

    //Меню навигации протфолио
    $(".s_portfolio li").click(function() {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });
    

    //При клике на один из элементов меню
    $(".top_menu ul a").click(function() {
        //выходим из меню
        $(".top_menu").fadeOut(600);
        //добавляем к элементу .sandwich класс active и возвращаем меню в дефолтное положение
        $(".sandwich").toggleClass("active");
        //добавляем тег <span> в саму ссылку
    }).append("<span>");    

    //При клике на toggle_menu
    $(".toggle_menu").click(function() {
        //Если .top_menu отображается
       if ($(".top_menu").is(":visible")) {
           //удаляем класс
           $(".top_text").removeClass("h_opacify");
           //растворяем элемент со скоростью 600 милисекунд
            $(".top_menu").fadeOut(600);
            //удаляем класс анимации fadeInUp animated для всех элементов li a
            $(".top_menu li a").removeClass("fadeInUp animated");
       } else {
            //добавляем класс h_opacify и задаем значение в файле css для затемнения
            $(".top_text").addClass("h_opacify");
            //в другом случае проясняем элемент
            $(".top_menu").fadeIn(600);
            //добавлем класс анимации fadeInUp animated для всех элементов li a
            $(".top_menu li a").addClass("fadeInUp animated");
       }  
    });
});

//Форма валидации
function formValidation() {
    //Создаем переменную form- которая ищет совпадения элементов и если нет, то она выдает null
    //querySelector- метод возвращает 1-ый элемент, который соответствует 1 или более CSS селекторам. Если совпадения не будет, то он вернет null
    var form = document.querySelector(".needs-validation");
        //form-HTML элемент, который мы будем отслеживать
        //addEventListener-События отображают то, что случается с HTML элементом, например клик, фокусировка или загрузка
        //submit- целевое событие
        form.addEventListener("submit", function(event) {
            //Если форма не валидна
            if(form.checkValidity() === false) {
                //preventDefault предотвращает действие по умолчанию, которое браузер выполняет с этим событием.
                event.preventDefault();
                //stopPropagation предотвращает stopPropagation события в цепочке событий.
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        })
};
formValidation();


//Прелоадер смотреть версии Jquery .on и .load
$(window).on('load', function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});


//для кнопки button и запуска галереи
    /*var data = [
        {
            userJobTitle : "Заголовок работы",
            userDescrWork : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, aliquam blanditiis? Adipisci quae, quaerat assumenda error cum ipsum iste quis at aliquid non enim sequi.Veniam, soluta inventore! In, deleniti.",
            userImgSrc_img : "img/portfolio-images/1.jpg"
        },

        {
            userJobTitle : "Заголовок работы",
            userDescrWork : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, aliquam blanditiis? Adipisci quae, quaerat assumenda error cum ipsum iste quis at aliquid non enim sequi.Veniam, soluta inventore! In, deleniti.",
            userImgSrc_img : "img/portfolio-images/2.jpg"
        },

        {
            userJobTitle : "Заголовок работы",
            userDescrWork : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, aliquam blanditiis? Adipisci quae, quaerat assumenda error cum ipsum iste quis at aliquid non enim sequi.Veniam, soluta inventore! In, deleniti.",
            userImgSrc_img : "img/portfolio-images/3.jpg"
        },

        {
            userJobTitle : "Заголовок работы",
            userDescrWork : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, aliquam blanditiis? Adipisci quae, quaerat assumenda error cum ipsum iste quis at aliquid non enim sequi.Veniam, soluta inventore! In, deleniti.",
            userImgSrc_img : "img/portfolio-images/1.jpg"
        },

        {
            userJobTitle : "Заголовок работы",
            userDescrWork : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, aliquam blanditiis? Adipisci quae, quaerat assumenda error cum ipsum iste quis at aliquid non enim sequi.Veniam, soluta inventore! In, deleniti.",
            userImgSrc_img : "img/portfolio-images/4.jpg"
        },

        {
            userJobTitle : "Заголовок работы",
            userDescrWork : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, aliquam blanditiis? Adipisci quae, quaerat assumenda error cum ipsum iste quis at aliquid non enim sequi.Veniam, soluta inventore! In, deleniti.",
            userImgSrc_img : "img/portfolio-images/5.jpg"
        },

        {
            userJobTitle : "Заголовок работы",
            userDescrWork : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, aliquam blanditiis? Adipisci quae, quaerat assumenda error cum ipsum iste quis at aliquid non enim sequi.Veniam, soluta inventore! In, deleniti.",
            userImgSrc_img : "img/portfolio-images/6.jpg"
        },

        {
            userJobTitle : "Заголовок работы",
            userDescrWork : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, aliquam blanditiis? Adipisci quae, quaerat assumenda error cum ipsum iste quis at aliquid non enim sequi.Veniam, soluta inventore! In, deleniti.",
            userImgSrc_img : "img/portfolio-images/2.jpg"
        }

    ];
    
    $.each(data,function (index, value){
        console.log(index,value);
    });

    $('button').magnificPopup({ 
        key: 'my-popup', 
        items: data,
        type: 'inline',
        inline: {
            markup: '<div class="popup_content"><div class="mfp-close"></div>'+
              '<h3 class="mfp-userJobTitle"></h3>'+
              '<p class="mfp-userDescrWork"></p>'+
              '<div class="mfp-userImgSrc"></div>'+
           '</div>'
        },
        gallery: {
            enabled: true 
        },
        callbacks: {
            markupParse: function(data, values, item) {
              // optionally apply your own logic - modify "template" element based on data in "values"
              console.log('Parsing:', data, values, item);
            }
        }      
    });*/
