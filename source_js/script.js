$(document).ready(function() {

	/* Full Page Plugin Settings */
	$('#fullpage').fullpage({
		anchors: ['top', 'about', 'work', 'expertise', 'connect', 'bottom'],
		menu: '#menu',
		fixedElements: '#modal0, #modal1'
	});

});
