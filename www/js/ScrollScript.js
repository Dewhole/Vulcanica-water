'use strict';
$(document).ready(function() {
  var scrolling = false;
  var isScroll = true;
  var SCREEN = 1;
  var LAYOUT2 = 1;

  var sectionFullMinSlide = 1;
  var sectionFullMaxSlide = $('#backgroudnFullPage div.sectionFull').length;

    function navigateNextSlide() {
        if (isScroll == true) {
            scrolling = true;
            isScroll = false;
            setTimeout(() => {isScroll = true; scrolling = false;}, 1500);
            var activeSlideID = $('.activeSlide').attr("id").slice(-1);
            // console.log("activeSlideID", activeSlideID);
            if(activeSlideID == sectionFullMaxSlide) { 
                console.log("END"); 
            } else {
                var next_activeSlideID = +activeSlideID + 1;
                SCREEN = next_activeSlideID;
                // $('#changeSlide').val(SCREEN);

                $('#screenID'+activeSlideID).removeClass("activeSlide");
                $('#screenID'+activeSlideID).addClass("pre-activeSlide");
                $('#screenID'+next_activeSlideID).addClass("activeSlide");
                $('#screenID'+next_activeSlideID).removeClass("next-activeSlide");
                paralax_layout2();
            }
        }else{ console.log(isScroll)}
    }

    function navigatePrevSlide() {
        if (isScroll == true) {
            scrolling = true;
            isScroll = false;
            setTimeout(() => {isScroll = true; scrolling = false;}, 1500);
            var activeSlideID = $('.activeSlide').attr("id").slice(-1);
            // console.log("activeSlideID", activeSlideID);
            if(activeSlideID == sectionFullMinSlide) { 
                console.log("START"); 
            } else {
                var prev_activeSlideID = activeSlideID - 1;
                SCREEN = prev_activeSlideID;
                // $('#changeSlide').val(SCREEN);

                $('#screenID'+activeSlideID).removeClass("activeSlide");
                $('#screenID'+activeSlideID).addClass("next-activeSlide");
                $('#screenID'+prev_activeSlideID).addClass("activeSlide");
                $('#screenID'+prev_activeSlideID).removeClass("pre-activeSlide");
                paralax_layout2();
            }
        }else{ console.log(isScroll)}
    }

    function navigateLeft() {
        console.log("LEFT")
    }

    function navigateRight() {
        console.log("RIGHT")
    }

    //  Предыдущий  Экран
    $('#prevLayout').click(function(){
        navigatePrevSlide();
    });

    //  Следующий Экран
    $('#nextLayout').click(function(){
        navigateNextSlide();
    });

    // Использовать эту функцию для отслеживания позиции экрана 2
    function paralax_layout2() {
        switch(SCREEN) {
            case 1:
                $("#layout_21").addClass("layout_2-1_paralax");
                $("#layout_22").addClass("layout_2-1_paralax");
                $("#layout_23").addClass("layout_2-1_paralax");
                console.log("Первый слайд")
                prevLayoutSlide2();
                break;
            case 2: 
                setTimeout(()=>{
                    $("#layout_21").removeClass("layout_2-1_paralax");
                }, 1000);
                break;
            default:
                $("#layout_21").addClass("layout_2-1_paralax");
                $("#layout_22").addClass("layout_2-1_paralax");
                $("#layout_23").addClass("layout_2-1_paralax");
                prevLayoutSlide2();
                break;
          }
    }


    //Переключение слайдов во втором экране ПРИ НАЖАТИИ НА КНОПКУ ДАЛЬШЕ
    var buttonNextCLicker = document.getElementById('buttonNext');
    buttonNextCLicker.addEventListener('touchend', function(event) {
        if (isScroll == true) {
            scrolling = true;
            isScroll = false;
            setTimeout(() => {isScroll = true; scrolling = false;}, 1500);
            $("#buttonNext").removeClass("buttonNextNotActive");
            $("#buttonNext").addClass("buttonNextActive");
            setTimeout(()=>{
                $("#buttonNext").addClass("buttonNextNotActive");
                $("#buttonNext").removeClass("buttonNextActive");                  
            },1000)

            nextLayoutSlide2();
        }else{console.log("СТОП")}
    });

    //Слайд Эффект, смена текста
    function slideHoverEffect(slide, nextSlide){
        $('#textUnderButton_p2').addClass("height0");
        $('#textUnderButton_p2').removeClass("height100");
        setTimeout(()=>{
            $('#textLayoutID'+slide).removeClass("textLayoutID_Active");
            $('#textLayoutID'+nextSlide).addClass("textLayoutID_Active");
            $('#textUnderButton_p2').addClass("height100");
            $('#textUnderButton_p2').removeClass("height0");
        }, 1000)
    }

    //Переключаем слйады на втором экране вперед
    function nextLayoutSlide2() {
        // console.log("LAYOUT2", LAYOUT2)
        var layoutID = document.getElementsByClassName("layoutID");
        if(LAYOUT2 == layoutID.length) {
            prevLayoutSlide2();
        }else{
            var Actyve_LAYOUT2 = LAYOUT2;
            var Next_LAYOUT2 = LAYOUT2 + 1;
            if(Next_LAYOUT2 == 3){
                $('#buttonNext').removeClass("buttonNext");
                $('#buttonNext').removeClass("buttonNextNotActive");
                $('#buttonNext').addClass("buttonPrev");
            }
            setTimeout(()=>{
                $("#layout_2"+Next_LAYOUT2).removeClass("layout_2-1_paralax");
            }, 1000);
            $('#layoutID'+Actyve_LAYOUT2).removeClass('activeLayout2');
            $('#layoutID'+Actyve_LAYOUT2).addClass('pre-activeLayout2');
            $('#layoutID'+Next_LAYOUT2).addClass('activeLayout2');
            $('#layoutID'+Next_LAYOUT2).removeClass('next-activeLayout2');
            $("#layout_21").addClass("layout_2-1_paralax");
            slideHoverEffect(LAYOUT2, Next_LAYOUT2);
            LAYOUT2 = Next_LAYOUT2;
            
        }
    }
    function prevLayoutSlide2(){
        $('#textUnderButton_p2').addClass("height0");
        $('#textUnderButton_p2').removeClass("height100");

        $('#layoutID1').addClass('activeLayout2');
        $('#layoutID1').removeClass('next-activeLayout2');
        $('#layoutID1').removeClass('pre-activeLayout2');
        setTimeout(()=>{
            $("#layout_21").removeClass("layout_2-1_paralax");

            // Default for text screen 2
            $('#textLayoutID1').addClass("textLayoutID_Active");
            $('#textLayoutID2').removeClass("textLayoutID_Active");
            $('#textLayoutID3').removeClass("textLayoutID_Active");

            $('#textUnderButton_p2').addClass("height100");
            $('#textUnderButton_p2').removeClass("height0");
        }, 1000);

        $('#layoutID2').removeClass('activeLayout2');
        $('#layoutID2').addClass('next-activeLayout2');
        $('#layoutID2').removeClass('pre-activeLayout2');
        $("#layout_22").addClass("layout_2-1_paralax");

        $('#layoutID3').removeClass('activeLayout2');
        $('#layoutID3').addClass('next-activeLayout2');
        $('#layoutID3').removeClass('pre-activeLayout2');
        $("#layout_23").addClass("layout_2-1_paralax");

        $('#buttonNext').addClass("buttonNext");
        $('#buttonNext').addClass("buttonNextNotActive");
        $('#buttonNext').removeClass("buttonPrev"); 

        LAYOUT2 = 1;
    }


    //mousewheel
    $(document).on("mousewheel DOMMouseScroll", function(event) {
        if (!scrolling) {
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // console.log("-", event.originalEvent.detail)
                navigateNextSlide();
            } else {
                // console.log("+", event.originalEvent.detail)
                navigatePrevSlide();
            }
        }
    });

    // TOUCH MOVE FOR MOBILE
    var initialPoint;
    var finalPoint;
    document.addEventListener('touchstart', function(event) {
        event.stopPropagation();
        initialPoint=event.changedTouches[0];
    }, false);

    document.addEventListener('touchend', function(event) {
        event.preventDefault();
        event.stopPropagation();
        finalPoint=event.changedTouches[0];
        var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
        if (xAbs > 20 || yAbs > 20) {
            if (xAbs > yAbs) {
                if (finalPoint.pageX < initialPoint.pageX){
                    navigateNextSlide();
                } else {
                    navigatePrevSlide();
                }
            } else {
                if (finalPoint.pageY < initialPoint.pageY){
                    console.log("UP")
                } else {
                    console.log("Down")
                }
            }
        }
    }, false);
});