'use strict';
$(document).ready(function() {
  var scrolling = false;
  var isScroll = true;
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
                $('#screenID'+activeSlideID).removeClass("activeSlide");
                $('#screenID'+activeSlideID).addClass("pre-activeSlide");
                var next_activeSlideID = +activeSlideID + 1;
                $('#screenID'+next_activeSlideID).addClass("activeSlide");
                $('#screenID'+next_activeSlideID).removeClass("next-activeSlide");
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
                $('#screenID'+activeSlideID).removeClass("activeSlide");
                $('#screenID'+activeSlideID).addClass("next-activeSlide");
                var prev_activeSlideID = activeSlideID - 1;
                $('#screenID'+prev_activeSlideID).addClass("activeSlide");
                $('#screenID'+prev_activeSlideID).removeClass("pre-activeSlide");
            }
        }else{ console.log(isScroll)}
    }

    function navigateLeft() {
        console.log("LEFT")
    }

    function navigateRight() {
        console.log("RIGHT")
    }

    //  Предыдущий слайд
    $('#prevLayout').click(function(){
        navigatePrevSlide();
    });

    //  Следующий слайд
    $('#nextLayout').click(function(){
        navigateNextSlide();
    });


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
                    navigateLeft();
                } else {
                    navigateRight();
                }
            } else {
                if (finalPoint.pageY < initialPoint.pageY){
                    navigateUp();
                } else {
                    navigateDown();
                }
            }
        }
    }, false);
});