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
        items : 1,
    });
});

function headerHiddenNav() {
    var hiddenNode = document.getElementById('header-hidden');
    if(hiddenNode.style.display === 'none') {
        hiddenNode.style.display = 'block';
    } else {
        hiddenNode.style.display = 'none';
    }
}
