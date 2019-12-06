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

function onInfoBtnClick(target, blockName) {
    var infoButtons = document.getElementsByClassName("button-primary info");
    for(var btn of infoButtons) {
        btn.className = "button-primary info";
        if(target.className.indexOf("active") === -1 && target.innerText === btn.innerText) {
            target.className += " active";
        }
    }

    var blocks = document.getElementById("info-block-wrapper").children;
    for(var block of blocks) {
        block.style.display = "none"
        if(block.dataset.block === blockName) {
            
            block.style.display = "block"
        }
    }
}

function scrollWindow(to) {
    to ==="top" 
        ? window.scrollTo({top: 0, behavior: "smooth"}) 
        : window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
}
