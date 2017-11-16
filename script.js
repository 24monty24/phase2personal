// $(".separator").append('<img src="images/line-2.png" style="width: 100%">');

// $(window).on('resize', function(event){
//   var windowWidth = $(window).width();
//   console.log(windowWidth);
//   if(windowWidth < 768){
//       $(".separator").append('<img src="images/line-2.png" style="width: 100%">');
//   } else {
//     $(".separator").empty();
// })


$(window).one('resize', function(event){
  var windowWidth = $(window).width();
  console.log(windowWidth);
  if(windowWidth < 750) {
    $('.separator').append('<img src="images/line-2.png">');
  } else {
    $('.separator').empty()
  }
})