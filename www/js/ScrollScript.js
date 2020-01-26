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