// 'use strict';
// $(document).ready(function() {
//   // $(document).on('touchmove',function(e){
//   //   e.preventDefault();
//   // });
//   // document.body.addEventListener('touchmove', function(e) {
//   //   e.preventDefault();
//   // });
//   var $wrap = $(".wrapper"),
//       pages = $(".page").length,
//       scrolling = false,
//       currentPage = 1,
//       $navPanel = $(".nav-panel"),
//       $scrollBtn = $(".scroll-btn"),
//       $navBtn = $(".nav-btn");

//   $("#navButton").click(()=>{
//     navigateDown();
//   })
//   /*****************************
//   ***** NAVIGATE FUNCTIONS *****
//   *****************************/
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
//   function navigateUp() {
//     if(currentPage == 2){
//       defaultParalax()
//     }else{
//       removeParalax()
//     }
//     if (currentPage > 1) {
//       currentPage--;
//       if (Modernizr.csstransforms) {
//         manageClasses();
//       } else {
//         $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 500);
//       }
//       changeNumberNavigateMenu(currentPage)
//     }
//   }

//   function navigateDown() {
//     if(currentPage == 2){
//       defaultParalax()
//     }else{
//       removeParalax()
//     }
//     if (currentPage < pages) {
//       currentPage++;
//       if (Modernizr.csstransforms) {
//         manageClasses();
//       } else {
//         $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 500);
//       }
//       changeNumberNavigateMenu(currentPage)
//     }
//   }

//   /*********************
//   ***** MOUSEWHEEL *****
//   *********************/
//   $(document).on("mousewheel DOMMouseScroll", function(e) {
//     if (!scrolling) {
//       if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
//         navigateUp();
//       } else { 
//         navigateDown();
//       }
//     }
//   });

//   // var tapNext = document.getElementById('tapNext');
//   window.addEventListener('touchstart', handleTouchStart, false);        
//   window.addEventListener('touchmove', handleTouchMove, false);

//   var xDown = null;                                                        
//   var yDown = null;                                                        

//   function handleTouchStart(evt) {                                         
//       xDown = evt.touches.clientX;                                      
//       yDown = evt.touches.clientY;                                      
//   };                                                

//   function handleTouchMove(evt) {
//       if ( ! xDown || ! yDown ) {
//           return;
//       }

//       var xUp = evt.touches.clientX;                                    
//       var yUp = evt.touches.clientY;

//       var xDiff = xDown - xUp;
//       var yDiff = yDown - yUp;

//       if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//           if ( xDiff > 0 ) {
//               /* left swipe */
//               navigateDown();
//           } else {
//               /* right swipe */
//               navigateUp();
//           }                       
//       } else {
//           if ( yDiff > 0 ) {
//               /* up swipe */ 
//               navigateDown();
//           } else { 
//               /* down swipe */
//               navigateUp();
//           }                                                                 
//       }
//       /* reset values */
//       xDown = null;
//       yDown = null;                                             
//   };


//   // $("#tapNext").on("click", function(e) {
//   //   if (!scrolling) {
//   //     if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
//   //       navigateUp();
//   //     } else { 
//   //       navigateDown();
//   //     }
//   //   }
//   // });






//   var slideTwo = 1;
//   var pagesTwo = $(".pageTwo").length;
//   var $wrapTwo = $(".wrapperTwo");
//   //ВТОРОЙ СЛАЙД
//   // $('#tapTwoNext').on('click', function(){
//   //   navigateTwoDown();
//   // })

//   var tapTwoNext = document.getElementById('tapTwoNext');
//   tapTwoNext.addEventListener('touchstart', handleTouchStart, false);        
//   tapTwoNext.addEventListener('touchmove', handleTouchMove, false);

//   var xDown = null;                                                        
//   var yDown = null;                                                        

//   function handleTouchStart(evt) {                                         
//       xDown = evt.touches[0].clientX;                                      
//       yDown = evt.touches[0].clientY;                                      
//   };                                                

//   function handleTouchMove(evt) {
//       if ( ! xDown || ! yDown ) {
//           return;
//       }

//       var xUp = evt.touches[0].clientX;                                    
//       var yUp = evt.touches[0].clientY;

//       var xDiff = xDown - xUp;
//       var yDiff = yDown - yUp;

//       if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//           if ( xDiff > 0 ) {
//               /* left swipe */ 
//               navigateTwoDown();
//           } else {
//               /* right swipe */
//           }                       
//       } else {
//           if ( yDiff > 0 ) {
//               /* up swipe */ 
//               navigateTwoDown();
//           } else { 
//               /* down swipe */
//               // navigateUp();
//           }                                                                 
//       }
//       /* reset values */
//       xDown = null;
//       yDown = null;                                             
//   };




// });
