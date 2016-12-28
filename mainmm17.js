(function() {
	
	window.App = {
		Views: {},
		Models: {},
		Collecions: {},
		Router: {}
};

//шаблончик

window.template = function(id) {
	return _.template( $('#' + id).html() );
};

App.Router = Backbone.Router.extend({
	routers: {
		''	   : 'index',
		'read' : 'read'
	},
	
	index: function() {
		console.log('Running');
	},
	
	read: function() {
		console.log('Royt');
	}
});

new App.Router();
Backbone.history.start();

})();