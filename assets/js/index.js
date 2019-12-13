// Intro Slider
$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        nav: true,
        navigation: true,
        slideSpeed: 100,
        paginationSpeed: 200,
        singleItem: true,
        items : 1
    });
});

// Magnific-popup
$(document).ready(function () {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('#close').click(function() {
        $.magnificPopup.close();
    });
});


// Navigation-bar
function headerNav() {
    var navBar = document.getElementById("nav-bar");

    if(navBar.className === "nav-bar nav-open") {
        navBar.className = "nav-bar nav-close";
    } else {
        navBar.className = "nav-bar nav-open";
    }
}

// Table slider
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

// Menu bar button click (Info & Rev section)
function onInfoMenuBtnClick(target, blockName) {
    var infoButtons = document.getElementsByClassName("button-primary info");

    for(var btn of infoButtons) {
        btn.className = "button-primary info";
        if(target.className.indexOf("active") === -1 && target.innerText === btn.innerText) {
            target.className += " active";
        }
    }

    var blocks = document.getElementById("info-block-wrapper").children;

    for(var block of blocks) {
        block.style.display = "none";
        if(block.dataset.block === blockName) {
            block.style.display = "block";
        }
    }
}


function onScrollWindow(to) {
    if(to === "top") {
        window.scrollTo({top: 0, behavior: "smooth"}) 
    } else {
        window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
    }
}

