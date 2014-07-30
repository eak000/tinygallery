$(document).ready(function() {

	var img = $('photo img');
	$('#nextButton').click(function() {
		// alert("I got clicked");
		$('#photo').attr({
				src: 'images/leaf.JPG',
				alt: 'close-up of maple leaf'
			}); //photo attributes

		$('#description h2').text("maple leaf in the sun");
	}); //click function end

}); //ready() end