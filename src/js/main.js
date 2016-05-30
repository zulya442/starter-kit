var responsiveNav = require('responsive-nav');
var Flickity = require('flickity');

document.addEventListener('DOMContentLoaded', function(){

//Scripts
	var nav = responsiveNav('.nav-collapse', {
		transition: 400,
		insert: 'after'
	
	});

	var flickity = new Flickity('.flickity', {
		contain: true,
		wrapAround: true
	});
});