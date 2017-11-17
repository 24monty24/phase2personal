// $(".separator").append('<img src="images/line-2.png" style="width: 100%">');

// $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//   console.log(windowWidth);
//   if(windowWidth < 768){
//       $(".separator").append('<img src="images/line-2.png" style="width: 100%">');
//   } else {
//     $(".separator").empty();
// })


// $(window).one('resize', function(event){
//   var windowWidth = $(window).width();
//   console.log(windowWidth);
//   if(windowWidth < 750) {
//     $('.separator').append('<img src="images/line-2.png">');
//   } else {
//     $('.separator').empty()
//   }
// })


window.onbeforeunload = function() {
    return "You're leaving the site.";
};
$(document).ready(function() {
    $('a[rel!=ext]').click(function() { window.onbeforeunload = null; });
    $('form').submit(function() { window.onbeforeunload = null; });
});