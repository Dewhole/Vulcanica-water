'use strict';
$(document).ready(function() {
  var $wrap = $(".wrapper"),
      pages = $(".page").length,
      scrolling = false,
      currentPage = 1,
      $navPanel = $(".nav-panel"),
      $scrollBtn = $(".scroll-btn"),
      $navBtn = $(".nav-btn");

  /*****************************
  ***** NAVIGATE FUNCTIONS *****
  *****************************/
  function manageClasses() {
    $wrap.removeClass(function (index, css) {
      return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
    });
    $wrap.addClass("active-page" + currentPage);
    $navBtn.removeClass("active");
    $(".nav-btn.nav-page" + currentPage).addClass("active");
    $navPanel.addClass("invisible");
    scrolling = true;
    setTimeout(function() {
      $navPanel.removeClass("invisible");
      scrolling = false;
    }, 1000);
  }
  function navigateUp() {
    if (currentPage > 1) {
      currentPage--;
      if (Modernizr.csstransforms) {
        manageClasses();
      } else {
        $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 500);
      }
      changeNumberNavigateMenu(currentPage)
    }
  }

  function navigateDown() {
    if (currentPage < pages) {
      currentPage++;
      if (Modernizr.csstransforms) {
        manageClasses();
      } else {
        $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 500);
      }
      changeNumberNavigateMenu(currentPage)
    }
  }

  /*********************
  ***** MOUSEWHEEL *****
  *********************/
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    }
  });

  $("#tapNext").on("click", function(e) {
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    }
  });

  /**************************
  ***** RIGHT NAVIGATION ****
  **************************/

  /* NAV UP/DOWN BTN PAGE NAVIGATION */
  $(document).on("click", ".scroll-btn", function() {
    if ($(this).hasClass("up")) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  /* NAV CIRCLE DIRECT PAGE BTN */
  $(document).on("click", ".nav-btn:not(.active)", function() {
    if (!scrolling) {
      var target = $(this).attr("data-target");
      changeNumberNavigateMenu(target)
      if (Modernizr.csstransforms) {
        $wrap.removeClass(function (index, css) {
          return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
        });
        $wrap.addClass("active-page" + target);
        $navBtn.removeClass("active");
        // $(this).addClass("active");
        $navPanel.addClass("invisible");
        currentPage = target;
        scrolling = true;
        setTimeout(function() {
          $navPanel.removeClass("invisible");
          scrolling = false; 
        }, 500);
      } else {
        $wrap.animate({"top": "-" + ( (target - 1) * 100) + "%"}, 500);
      }
    }
  });

  //Функция изменения цифры в панели навигации
  function changeNumberNavigateMenu (screen) {
    //DESKTOP
    document.getElementById("desktopNumberSlide").textContent = +screen;
    document.getElementById("pre_desktopNumberSlide").textContent = +screen - 1;
    document.getElementById("next_desktopNumberSlide").textContent = +screen == 8 ? 1 : +screen + 1;

    
    //MOBILE
    document.getElementById("mobileNumberSlide").textContent = +screen;
    document.getElementById("pre_mobileNumberSlide").textContent = +screen - 1;
    document.getElementById("next_mobileNumberSlide").textContent = +screen == 8 ? 1 : +screen + 1;
    
    document.getElementById("prevNumber_mob").setAttribute("data-target", +screen - 1);
    document.getElementById("nextNumber_mob").setAttribute("data-target", +screen == 8 ? 1 : +screen + 1);

    document.getElementById("prevNumber").setAttribute("data-target", +screen - 1);
    document.getElementById("nextNumber").setAttribute("data-target", +screen == 8 ? 1 : +screen + 1);
    document.getElementById("prevLayout").setAttribute("data-target", +screen - 1);
    document.getElementById("nextLayout").setAttribute("data-target", +screen == 8 ? 1 : +screen + 1);

    if(+screen == 1){
      document.getElementById("navigationField_mob").classList.add("d-none");
      document.getElementById("navigationField_mob").classList.remove("d-flex");
      document.getElementById("navigationField").classList.add("d-md-none");
      document.getElementById("navigationField").classList.remove("d-md-flex");
    }else{
      document.getElementById("navigationField_mob").classList.remove("d-none");
      document.getElementById("navigationField_mob").classList.add("d-flex");
      document.getElementById("navigationField").classList.remove("d-md-none");
      document.getElementById("navigationField").classList.add("d-md-flex");
    }
    if(+screen == 7){
      document.getElementById("tapNext").classList.add("d-none");
      document.getElementById("tapNext").classList.remove("d-flex");
    }else{
      document.getElementById("tapNext").classList.remove("d-none");
      document.getElementById("tapNext").classList.add("d-flex");    
    }
  }
});