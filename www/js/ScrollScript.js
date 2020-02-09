'use strict';
$(document).ready(function() {
  var scrolling = false;
  var isScroll = true;
  var SCREEN = 1;
  var LAYOUT2 = 1;

  var sectionFullMinSlide = 1;
  var sectionFullMaxSlide = $('#backgroudnFullPage div.sectionFull').length;


    function changeNumberNavigateMenu (screen) {
        //DESKTOP
        document.getElementById("desktopNumberSlide").textContent = screen;
        document.getElementById("pre_desktopNumberSlide").textContent = screen - 1;
        document.getElementById("next_desktopNumberSlide").textContent = screen == 8 ? screen : screen + 1;
        
        //MOBILE
        document.getElementById("mobileNumberSlide").textContent = screen;
        document.getElementById("pre_mobileNumberSlide").textContent = screen - 1;
        document.getElementById("next_mobileNumberSlide").textContent = screen == 8 ? screen : screen + 1;
    }

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
                changeNumberNavigateMenu(SCREEN);

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
                changeNumberNavigateMenu(SCREEN);

                $('#screenID'+activeSlideID).removeClass("activeSlide");
                $('#screenID'+activeSlideID).addClass("next-activeSlide");
                $('#screenID'+prev_activeSlideID).addClass("activeSlide");
                $('#screenID'+prev_activeSlideID).removeClass("pre-activeSlide");
                paralax_layout2();
            }
        }else{ console.log(isScroll)}
    }

    //К первому сладу
    function navigateFirstSlide() {
        SCREEN = sectionFullMinSlide;
        changeNumberNavigateMenu(SCREEN);
        // всем элементам убрать значение activeSlid и добавить pre-activeSlide 
        for(var i = 1; i<=8; i++){
            $('#screenID'+i).removeClass("activeSlide");
            $('#screenID'+i).removeClass("pre-activeSlide");
            $('#screenID'+i).addClass("next-activeSlide");        
        }
        // первому элементу добавить класс activeSlide и удалить pre/next-activeSlide
        $('#screenID'+SCREEN).addClass("activeSlide");
        $('#screenID'+SCREEN).removeClass("pre-activeSlide");
        $('#screenID'+SCREEN).removeClass("next-activeSlide");
    }
    //К последнему слайду
    function navigateLastSlide() {
        SCREEN = sectionFullMaxSlide;
        changeNumberNavigateMenu(SCREEN);
        // всем элементам убрать значение activeSlid и добавить pre-activeSlide 
        for(var i = 1; i<=8; i++){
            $('#screenID'+i).removeClass("activeSlide");
            $('#screenID'+i).removeClass("next-activeSlide");
            $('#screenID'+i).addClass("pre-activeSlide");        
        }
        // первому элементу добавить класс activeSlide и удалить pre/next-activeSlide
        $('#screenID'+SCREEN).addClass("activeSlide");
        $('#screenID'+SCREEN).removeClass("pre-activeSlide");
        $('#screenID'+SCREEN).removeClass("next-activeSlide");
    }

    // Использовать эту функцию для отслеживания позиции экрана 2
    function paralax_layout2() {
        switch(SCREEN) {
            case 1:
                $("#layout_21").addClass("layout_2-1_paralax");
                $("#layout_22").addClass("layout_2-1_paralax");
                $("#layout_23").addClass("layout_2-1_paralax");
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
                navigatePrevSlide();
            } else {
                // console.log("+", event.originalEvent.detail)
                navigateNextSlide();
            }
        }
    });

    //mailOfer SENDMAIL
    onTouchEdnMSG(document.getElementById("nameMailFormOfer"));
    onTouchEdnMSG(document.getElementById("phoneMailFormOfer"));
    onTouchEdnMSG(document.getElementById("emailMailFormOfer"));
    onTouchEdnMSG(document.getElementById("themeMailFormOfer"));
    onTouchEdnMSG(document.getElementById("msgMailFormOfer"));
    onTouchEdnMSG(document.getElementById("agreeMailFormOfer"));
    onTouchEdnMSG(document.getElementById("sendMailFormOfer"));

    onTouchEdnMSG(document.getElementById("themeOptionValue-distrib"));
    onTouchEdnMSG(document.getElementById("themeOptionValue-opt"));
    onTouchEdnMSG(document.getElementById("themeOptionValue-other"));
    onTouchEdnMSG(document.getElementById("themeOptionValue-backCall"));

    //BTN NAVIGATE
    onTouchEdnMSG(document.getElementById("inStartLayout"));
    onTouchEdnMSG(document.getElementById("prevLayout"));
    onTouchEdnMSG(document.getElementById("prevNumber"));
    onTouchEdnMSG(document.getElementById("nextNumber"));
    onTouchEdnMSG(document.getElementById("nextLayout"));
    onTouchEdnMSG(document.getElementById("inEndLayout"));

    onTouchEdnMSG(document.getElementById("inStartLayout_mob"));
    onTouchEdnMSG(document.getElementById("prevLayout_mob"));
    onTouchEdnMSG(document.getElementById("prevNumber_mob"));
    onTouchEdnMSG(document.getElementById("nextNumber_mob"));
    onTouchEdnMSG(document.getElementById("nextLayout_mob"));
    onTouchEdnMSG(document.getElementById("inEndLayout_mob"));

    //UI INTERFASE
    function onTouchEdnMSG(targetClick) {
        targetClick.addEventListener('touchend', () => {controllerDoing(targetClick)});
        targetClick.addEventListener('click', () => {controllerDoing(targetClick)});
    }

    //CONTROLLER UI INTERFASE
    function controllerDoing(target){
        switch(target.id){
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
                navigateNextSlide();
                break;
            case "nameMailFormOfer":
            case "phoneMailFormOfer":
            case "emailMailFormOfer":
            case "msgMailFormOfer":
                // console.log("target", target);
                target.focus();
                break;
            case "themeMailFormOfer":
                var themeSelectOptions = document.getElementById("themeSelectOptions");
                if(themeSelectOptions.classList.contains("p7-height0px")){
                    document.getElementById("themeMailFormOferTreg").setAttribute("style", "transform: rotate(180deg);");
                    themeSelectOptions.classList.remove("p7-height0px");
                    themeSelectOptions.classList.add("p7-height80px");
                }else{
                    document.getElementById("themeMailFormOferTreg").setAttribute("style", "transform: rotate(0deg);");
                    themeSelectOptions.classList.remove("p7-height80px");
                    themeSelectOptions.classList.add("p7-height0px");                      
                }
                break;

            case "themeOptionValue-distrib":
            case "themeOptionValue-opt":
            case "themeOptionValue-other":
            case "themeOptionValue-backCall":
                // console.log(target.getAttribute("data-value"));
                document.getElementById("themeMailFormOfer").setAttribute("data-value", target.getAttribute("data-value"));
                document.getElementById("themeMailFormOferValue").textContent = target.textContent;
                break;
            case "agreeMailFormOfer":
                // console.log("agreeMailFormOfer", target);
                var checkboxFormOfer = document.getElementById("checkboxFormOfer");
                if(checkboxFormOfer.checked == true){checkboxFormOfer.checked = false}else{checkboxFormOfer.checked = true}
                break;
            case "sendMailFormOfer":
                var nameMailFormOfer = document.getElementById("nameMailFormOfer").value;
                var phoneMailFormOfer = document.getElementById("phoneMailFormOfer").value;
                var emailMailFormOfer = document.getElementById("emailMailFormOfer").value;
                var themeMailFormOfer = document.getElementById("themeMailFormOfer").getAttribute("data-value");
                var msgMailFormOfer = document.getElementById("msgMailFormOfer").value;
                var agreeMailFormOfer = document.getElementById("checkboxFormOfer");
                if(agreeMailFormOfer.checked == true){
                    var objectMassage = {
                        "name":nameMailFormOfer,
                        "phone":phoneMailFormOfer,
                        "email":emailMailFormOfer,
                        "theme":themeMailFormOfer,
                        "msg":msgMailFormOfer
                    }
                    console.log(objectMassage);
                }else{
                    event.preventDefault;
                    console.error("checked agree filed")
                }
                break;
            default:
                break;
        }
    }

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

//    console.log(document.getElementById("p1_animationEffectSfera").getAttribute("y"));
});