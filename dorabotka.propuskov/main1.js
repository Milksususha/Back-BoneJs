(function(){
	window.App={
		Models:{},
		Viw:{},
		Collections:{}
	};
//помощник шаблона
var template=function(id){
return _.template( $('#'+id).html());
};
//Модель человека
App.Models.Person=Backbone.Model.extend({
	defaults:{
		name: 'Ной',
		age:40,
		job:'Монолит'
	}
});
var person=new App.Models.Person();
 // Список человекков
 App.Collections.People=Backbone.Collection.extend({
	 model:App.Models.Person
 )};
 //Вид списка человеков
 
 App.Views.People=Backbone.View.extend({
	 tagName:'ul';
	 initialize:function(){
	 },
	 render:function(){
		 this.collection.each.(function(person){
			 var personView = new App.Views.Person({model:person});
			 
			 this.$el.append(personView.render().el);
		 }, this);
		 return this;
	 }
 });
 // Вид одного мена
 App.Views.Person=Backbone.View.extend({
	 tagName:'li',
	 template:('testTemplate'),
	 
	 initialize:function(){
		 this.render();
	 },
	 render:function(){
		 //хак шаблон
		 
		 this.$el.html(this.template(this.model.toJSON()));
		 return this;
	 }
 }); 
 		var peopleCollection = new App.Collections.People([
		{
			name: 'Серега',
			age: 12,
			job: 'Техник'
		},
		{
			name: 'Валера',
			age: 18,
			job: 'Продавец'
		},
		{
			name: 'Семён',
			age:  6,
			job: 'халявщик'
		}
		]);
		
		var peopleView = new App.Views.People({collection:peopleCollection});
		 $(document.body).append(peopleView.render().el);
		 console.log(App.Models);
}());