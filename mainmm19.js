(function() {
	
	window.App = {
		Views: {},
		Models: {},
		Collecions: {},
		Router: {}
	};
	
	var vent = _.extend({}, Backbone.Events);
	
	//console.log(vent);
	App.Views.SpecialTasks = Backbone.View.extend({
		initialize: function () {
			vent.on('specialTasks:show', this.show, this);
		},
		show:function (id) {
			var specialTask = this.collection.get('id');
			//console.log('Выведем задачу с id : ' + id);
		var specialTaskView = new App.Views.specialTask({ model: specialTask });
		$('body').append(specialTaskView.render().el);
		}
	});

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'start',
			'specialTasks/:id' : 'showSpecialTasks'
		},
		
		showSpecialTasks: function (id) {
			vent.trigger('specialTasks:show', id);
			//console.log(id);
		},
	
		start: function() {
			console.log( 'Стартовая' );
		}
	});
	
	new App.Views.SpecialTasks({collection: someCollection});
	
	new App.Router;
	Backbone.history.start();

})();