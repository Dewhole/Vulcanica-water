'use strict';
$(document).ready(function() {
  var scrolling = false

    function navigateUp() {
        console.log("UP")
    }

    function navigateDown() {
        console.log("DOWN")
    }

    function navigateLeft() {
        console.log("LEFT")
    }

    function navigateRight() {
        console.log("RIGHT")
    }

    //mousewheel
    $(document).on("mousewheel DOMMouseScroll", function(event) {
        if (!scrolling) {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            if ( Math.abs(event.originalEvent.wheelDelta) > this.scrollDelta*2 ) {
                navigateUp();
            }
            this.scrollDelta = Math.abs(event.originalEvent.wheelDelta);
        } else {
            if ( Math.abs(event.originalEvent.wheelDelta) > this.scrollDelta*2 ) {
                navigateDown();
            }
            this.scrollDelta = Math.abs(event.originalEvent.wheelDelta);
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

// var $wrap = $(".wrapper"),
// pages = $(".page").length,
// scrolling = false,
// currentPage = 1,
// $navPanel = $(".nav-panel"),
// $scrollBtn = $(".scroll-btn"),
// $navBtn = $(".nav-btn");

  /*****************************
  ***** NAVIGATE FUNCTIONS *****
  *****************************/
//   function manageClasses() {
//     $wrap.removeClass(function (index, css) {
//       return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
//     });
//     $wrap.addClass("active-page" + currentPage);
//     $navBtn.removeClass("active");
//     $(".nav-btn.nav-page" + currentPage).addClass("active");
//     $navPanel.addClass("invisible");
//     scrolling = true;
//     setTimeout(function() {
//       $navPanel.removeClass("invisible");
//       scrolling = false;
//     }, 1000);
//   }

// function navigateUp() {
//     console.log("UP")
  // if (currentPage > 1) {
  //   currentPage--;
  //   if (Modernizr.csstransforms) {
  //     manageClasses();
  //   } else {
  //     $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
  //   }
  // }
// }

// function navigateDown() {
//     console.log("DOWN")
  // if (currentPage < pages) {
  //   currentPage++;
  //   if (Modernizr.csstransforms) {
  //     manageClasses();
  //   } else {
  //     $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
  //   }
  // }
// }

// function navigateLeft() {
//       console.log("LEFT")
  // if (currentPage > 1) {
  //   currentPage--;
  //   if (Modernizr.csstransforms) {
  //     manageClasses();
  //   } else {
  //     $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
  //   }
  // }
//   }

//   function navigateRight() {
//       console.log("RIGHT")
  // if (currentPage < pages) {
  //   currentPage++;
  //   if (Modernizr.csstransforms) {
  //     manageClasses();
  //   } else {
  //     $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
  //   }
  // }
//   }


  /**************************
  ***** RIGHT NAVIGATION ****
  **************************/

  /* NAV UP/DOWN BTN PAGE NAVIGATION */
//   $(document).on("click", ".scroll-btn", function() {
//     if ($(this).hasClass("up")) {
//       navigateUp();
//     } else {
//       navigateDown();
//     }
//   });

  /* NAV CIRCLE DIRECT PAGE BTN */
//   $(document).on("click", ".nav-btn:not(.active)", function() {
//     if (!scrolling) {
//       var target = $(this).attr("data-target");
//       if (Modernizr.csstransforms) {
//         $wrap.removeClass(function (index, css) {
//           return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
//         });
//         $wrap.addClass("active-page" + target);
//         $navBtn.removeClass("active");
//         $(this).addClass("active");
//         $navPanel.addClass("invisible");
//         currentPage = target;
//         scrolling = true;
//         setTimeout(function() {
//           $navPanel.removeClass("invisible");
//           scrolling = false; 
//         }, 1000);
//       } else {
//         $wrap.animate({"top": "-" + ( (target - 1) * 100) + "%"}, 1000);
//       }
//     }
//   });