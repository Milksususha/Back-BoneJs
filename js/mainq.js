var Person = Backbone.Model.extend({
	defaults: {
		name: 'Val',
		age: 43,
		job:'voenuy'
	}
});
// выше модель
var abf = new Person; // теперь создаем экзепляр модели

var PersonView = Backbone.View.extend({
	initialize:function () {
				console.log("Иницилизация прошла успешно");
	},
	tagName: 'div',
	className:'top',
        id: 'pol',
	
	render: function () {
		console.log("Это сработал рендер");
		 this.$el.html(this.model.get('name'));
	}
});

// а это уже представление (выше)

// а это экзепляр представления
var vid = new PersonView({model:abf});
