$(function () {
	/* Header drop down
	$('#personas').mouseover(function () {
		$('#menuPersonas').slideDown();
		$('body').addClass('body-no-scroll');
	});

	$('#menuPersonas').find('#close-menu').click(function(){
		$('#menuPersonas').hide();
		$('body').removeClass('body-no-scroll');
	});
	*/


	/* Scroll Link */
	$(document).on('click', 'header a[href^="#"], main a[href^="#"]', function (
		event
	) {
		event.preventDefault();

		$('html, body').animate(
			{
				scrollTop: $($.attr(this, 'href')).offset().top,
			},
			500
		);
	});
});
