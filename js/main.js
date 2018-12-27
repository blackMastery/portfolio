/*
(function (argument) {
	// body...
// iniitialize side nav and tooltips
$(document).ready(function () {

        $('.button-collapse').sideNav()
      })

      $(function () {
  $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' })
})



// 
 var place  = document.querySelector('.gridContainer');
 	// $('span.desc').addClass('animated pulse infinite delay-10s');

 	$('section.intro').addClass('animated fadeInUp delay-3s')

 document.addEventListener("wheel", function(e) {


})

var wireframe = $('div.wireframe'),
photoshop = $('div.photoshop'),
html = $('div.html');
wireframe.hide();
photoshop.hide();
html.hide();

const animationEND = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';


// checking the window scrolly properly animating accordingly
document.getElementById('body').onscroll = function () {

if (window.scrollY >= 800 && window.scrollY <= 820) {
console.log("running ", window.scrollY)

	    console.log(window.scrollY)
	    wireframe.fadeIn('slow');
		wireframe.addClass('animated fadeInDown')
		.one(animationEND,
			function (argument) {
				$(this).removeClass('animated fadeInDown')
				photoshop.fadeIn('slow')
				photoshop.addClass('animated fadeInDown')
				.one(animationEND,
					function (argument) {
						$(this).removeClass('animated fadeInDown')
						html.fadeIn('slow')
						html.addClass('animated fadeInDown')
						.one(animationEND,
							function (argument) {
								$(this).removeClass('animated fadeInDown')
							})
					})

			})
}
	// body...



}


})();
*/