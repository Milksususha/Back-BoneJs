(function() {
	
	window.App = {
		Views: {},
		Models: {},
		Collecions: {},
		Router: {}
};

//Шаблончик sdgsdgs

window.template = function(id) {
	return _.template( $('#' + id).html() );
};

App.Router = Backbone.Router.extend({
	routes: {
		''							: 'index',
		'page/:id/*simbo'			: 'page',
		'search/:query'				: 'search',
		'*other'					: 'default'
	},
	
	index: function() {
		console.log('Running');
	},
	
	page: function(id, simbo) {
		//console.log('Royt = ' + id + ' id');
		console.log(simbo);
	},
	
	search: function(query) {
		
	},
	
	default: function(other) {
		alert('Ээээ......помоему ошибочка в коде, бро ' + other);
	}
});

new App.Router();
Backbone.history.start();

})();