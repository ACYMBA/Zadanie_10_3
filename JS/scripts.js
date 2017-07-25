$(function(){
  //this code will execute after the DOM is loaded
var carouselList = $("ul");


setInterval(changeSlide, 3000); 


function changeSlide() {
  carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem)
    carouselList.css({marginLeft:0});
  }
}
$(document).ready(function() {
    $('#fullpage').fullpage({
		 navigation: true,
		 navigationPosition: 'right',
		 slidesNavigation: true,
		 slidesNavPosition: 'bottom',
		 controlArrows: false,
		 verticalCentered: true,
		 paddingTop: '3em',
       paddingBottom: '10px',
       fixedElements: '#header, .footer',
       responsiveWidth: 0,
       responsiveHeight: 0,
	 })
})
});