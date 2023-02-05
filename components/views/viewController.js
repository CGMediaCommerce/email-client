require('animate.css');

function changeView(targetView, mode) {
    $('.view').css('display', 'none');
    $('#'+targetView).css('display', mode);
}