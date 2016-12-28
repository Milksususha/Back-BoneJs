var template = function(id){
  return _.template( $('#'+id).html());
};

//Модель человека
var Person = Backbone.Model.extend({
    defaults: {
        name: 'Vatnik',
        age: 25,
        job: 'JIEKAPb'
    }
});

var person = new Person();

//Список людей
var PeopleCollection = Backbone.Collection.extend({
    model:Person
});

//вид список людей
var PeopleView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function(){
    },
	
    render: function(){
        this.collection.each(function(person){
                var personView = new PersonView({model: person});
				
                this.$el.append(personView.render().el);
            },this);
        return this;
    }
});

//Вид одного чела
var PersonView = Backbone.View.extend({
        tagName: 'li',
		
        template: template('personTemplate'),
		
        initialize: function(){
            this.render();
        },
		
        render: function(){
            this.$el.html( this.template(  this.model.toJSON() ) );
			
            return this;
        }
    });
var peopleCollection = new PeopleCollection(
    [   {
        name: 'Pushok',
        age: 7,
        job: 'kot'
        },
        {
            name: 'Gasprat',
            age: 32,
            job: 'Santehnik'
        },
        {
            name: 'Snejhok',
            age: 1,
            job: 'letit'
        }]
);

var peopleView = new PeopleView({collection: peopleCollection});
$(document.body).append(peopleView.render().el);