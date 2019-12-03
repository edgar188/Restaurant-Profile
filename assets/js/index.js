$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        nav: true,
        navigation: true,
        slideSpeed: 100,
        paginationSpeed: 200,
        singleItem: true,
        // autoplay: true,
        // autoPlaySpeed: 1000,
        // autoPlayTimeout: 1000,
        items : 1
    });
});

// function headerHiddenNav() {
//     var hiddenNode = document.getElementById('header-hidden');
//     if(hiddenNode.style.display === 'none') {
//         hiddenNode.style.display = 'block';
//     } else {
//         hiddenNode.style.display = 'none';
//     }
// }

function onTableSlide(direction) {
    var table = document.getElementById("table-book");
    if(direction.dataset.direction === "right") {
        if(!table.style.marginLeft) {
            table.style.marginLeft += "-70px";
        }
        else {
            var oldMarginValue = +table.style.marginLeft.slice(0, table.style.marginLeft.indexOf("px"));
            var currentMarginValue = oldMarginValue - 70 + "px";
            table.style.marginLeft = currentMarginValue;
        }
    } else {
        var oldMarginValue = +table.style.marginLeft.slice(0, table.style.marginLeft.indexOf("px"));
        if(oldMarginValue <= -70) {
            var currentMarginValue = oldMarginValue + 70 + "px";
            table.style.marginLeft = currentMarginValue;   
        }
    }
}


