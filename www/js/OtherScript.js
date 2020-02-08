// 'use strict';
    var desktop_layoutID1 = document.getElementById("desktop_layoutID1");
    var desktop_layoutID2 = document.getElementById("desktop_layoutID2");
    var desktop_layoutID3 = document.getElementById("desktop_layoutID3");
    desktop_layoutID1.addEventListener('click', () => {
        console.log("desktop_layoutID1")
    });
    desktop_layoutID2.addEventListener('touchend', function(event) {
        console.log("desktop_layoutID2")
    });
    desktop_layoutID3.addEventListener('touchend', function(event) {
        console.log("desktop_layoutID3")
    });