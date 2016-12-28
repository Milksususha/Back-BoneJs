$(function() {
	window.App = {
			Models: {},
			Collections: {},
			Views: {}
	};
	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};
	App.Models.Task = Backbone.Model.extend({});
	App.Views.Task = Backbone.View.extend({
		tagName: 'li',
		render: function () {
			this.$el.html( this.model.get('title') );
			return this;
		}
	});
App.Collections.Task = Backbone.Collection.extend({
	model:App.Models.Task
});
//var task = new App.Models.Task({
	//title: 'Сходить в магаз',
	//priority: 4
//});
App.Views.Tasks = Backbone.View.extend ({
	model: App.Models.Task
});
App.Views.Tasks = Backbone.View.extend({
	tagName: 'ul',
	render: function function_name (argument) {
			this.collection.each(this.addOne, this);
			return this;
	},
	addOne: function () {
		var taskView = new App.Views.Task({ model: task});
		this.$el.append(taskView.render().el);
	}
})

var tasks = new App.Collections.Task([
	{
		title: 'Сходить  в магаз',
		priority: 4
	},
	{
		title: 'Пойти  в магаз',
		priority: 3
	},
	{
		title: 'Выйти  в магаз',
		priority: 5
	},
])


var taskView = new App.Views.Task({ model: task});
console.log(taskView.render().el);
});