var Person = Backbone.Model.extend({
	defaults: {
		name1:'Name - ',
		name:'Myrluk',
		age1:'Yers - ',
		age:25,
		job1:'Job - ',
		job:'Destroit divan',
		color1: 'Sherstb - ',
		color: 'Potapuch'
	}
});

var PersonView = Backbone.View.extend({
	template: _.template('<%=name1 %><br><%= age1 %><br><%= job %><%= color %><br>'),
    template2: _.template('Я сказал <%= name %>, потому что мне <%= age %> лет и зовут меня <%= color %>'),
	initialize: function() {
		tagName: '<li>',
		this.render();
	},
	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
			//else {
		this.$el.html( this.template2( this.model.toJSON() ) );
		//}
	}
});

var person = new Person();
var personView = new PersonView({model: person});