var Person = Backbone.Model.extend({
	defaults: {
		name: 'Val',
		age: 43,
		job:'voenuy',
		test: 'free'
	}
});
// выше модель
//var abf = new Person; // теперь создаем экзепляр модели
var PersonView = Backbone.View.extend({
	tagName: 'li',
	
	template: _.template ('<%= name %> ( <%= age %> ) -<%= job %> -<%= test %>'),
	
	initialize:function () {
				this.render();
	},
	render: function() {
		 //this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('job') );
		this.$el.html( this.template( this.model.toJSON() ) );
	}
});
// а это уже представление (выше)
// а это экзепляр представления
var vid = new PersonView();
var personView = new PersonView({ model: person });