'use strict';
$(document).ready(function() {

    //переменные состояния
    var scrolling = false;
    var isScroll = true;
    var SCREEN = 1;
    var LAYOUT2 = 1;

    //Переменные 1 и последеного экрана
    var sectionFullMinSlide = 1;
    var sectionFullMaxSlide = $('#backgroudnFullPage div.sectionFull').length;

    // //ОТСЛЕЖИВАЕМ КЛИК ПО ЭКРАНУ, и вызываем функцию следующего экрана
    document.addEventListener('touchend', (e)=> {
        console.log(e.target) 
        controllerDoing(e.target);
        // nextScreen(true) 
    });

    //ФУНКЦИЯ СЛЕДУЮЩЕГО ЭКРАНА  ДЛЯ ТАП
    function nextScreen(tap){
        //Если экран не 8 и не 2 и 7, тогда перелистываем на следующий слайд,
        if(SCREEN != 8 && SCREEN != 7 && SCREEN != 2 && tap == true){
            SCREEN++;
            LAYOUT2 = 1;
            showNextScreen(SCREEN);
        }else if(SCREEN == 8 && tap == true){ //Если экран номер 8, тогда перелистываем на первый
            SCREEN = 1; 
            LAYOUT2 = 1;
            showNextScreen(SCREEN);
        }else if(SCREEN == 2 && tap == false){ //Если экран номер 2, тогда перелистываем сначала все слайды на нем и только потом идем дальше
            if(LAYOUT2 != 3){
                LAYOUT2++;
                console.log(LAYOUT2);
            }else{
                SCREEN++;
                LAYOUT2 = 1;
                showNextScreen(SCREEN);        
            }
        }else if(SCREEN == 7 && tap == false){ //Если экран равен номер 7, тогда мы никуда не идем, а переключаемся, только по навигации
            SCREEN++;
            LAYOUT2 = 1;
            showNextScreen(SCREEN); 
        }
    }

    //Фнукция, перелистывания экрана
    function showNextScreen(screen_id){
        console.log("screen_id", screen_id)
        for (let i = 1; i <= 8; i++){
            if(i < screen_id){
                document.getElementById("screenID"+i).classList.add("pre-activeScreen"); 
                document.getElementById("screenID"+i).classList.remove("activeScreen");
            } else {
                document.getElementById("screenID"+i).classList.add("activeScreen"); 
                document.getElementById("screenID"+i).classList.remove("pre-activeScreen");
            }
        }
        changeNumberNavigateMenu(SCREEN);
    }

    //Функция изменения цифры в панели навигации
    function changeNumberNavigateMenu (screen) {
        //DESKTOP
        document.getElementById("desktopNumberSlide").textContent = screen;
        document.getElementById("pre_desktopNumberSlide").textContent = screen - 1;
        document.getElementById("next_desktopNumberSlide").textContent = screen == 8 ? 1 : screen + 1;
        
        //MOBILE
        document.getElementById("mobileNumberSlide").textContent = screen;
        document.getElementById("pre_mobileNumberSlide").textContent = screen - 1;
        document.getElementById("next_mobileNumberSlide").textContent = screen == 8 ? 1 : screen + 1;
    }

    function controllerDoing(target){
        switch (target.id){
            case "tapNext1":
            case "tapNext":
                nextScreen(true);   
                break;
            case "inStartLayout":
            case "inStartLayout_mob":
                navigateFirstSlide();
                break;
            case "inEndLayout":
            case "inEndLayout_mob":
                navigateLastSlide();
                break;
            case "prevLayout":
            case "prevNumber":
            case "prevLayout_mob":
            case "prevNumber_mob":
                navigatePrevSlide();
                break;
            case "nextNumber":
            case "nextLayout": 
            case "nextNumber_mob":
            case "nextLayout_mob":
                nextScreen(false);
                break;
            default:
                break;
        }
    }
});