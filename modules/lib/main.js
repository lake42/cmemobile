require.config({
	paths: {
		jQuery: 'public/javascripts/jquery',
		Underscore: 'public/javascripts/underscore',
		Backbone: 'public/javascript/backbone',
		Bootstrap: 'public/javascript/bootstrap'
	}
});

require([
	'app',
	'order!public/javascripts/jquery-1.72.min',
	'order!public/javascripts/underscore-min',
	'order!public/javascripts/backbone-min',
	'order!public/javascripts/bootstrap-min'
	], function(App) {
		App.initialize();
	});