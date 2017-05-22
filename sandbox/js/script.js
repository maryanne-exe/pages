jQuery(function(){
  var menuOffset = jQuery('#site-navigation')[0].offsetTop;
  jQuery(document).bind('ready scroll',function() {
    var docScroll = jQuery(document).scrollTop();
    if(docScroll >= menuOffset) {
      jQuery('#site-navigation').addClass('fixed');
    } else {
      jQuery('#site-navigation').removeClass('fixed');
    }
   });
});



