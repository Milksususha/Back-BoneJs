(function() {
	window.App = {};
		Models: {},
		Views: {},
		Collection: {}
	};
	
	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};

//������ ��������
App.Models.Person = Backbone.Model.extend({
    defaults: {
        name: '�����',
        age: 25,
        job: '����������'
    }
});

var person = new Person();
//������ �����
App.Collections.People = Backbone.Collection.extend({
    model:Person
});

//��� ������ �����
App.Views.People = Backbone.View.extend({
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

//��� ������ ����
App.Views.Person = Backbone.View.extend({
        tagName: 'li',
		
        template: template('personTemplate'),
		
        initialize: function(){
            this.render();
        },
		
        render: function(){
		this.collection.each(function(person){
				var personView = new App.Views.Person({model: person});
            this.$el.html( this.template(  this.model.toJSON() ) );
            return this;
        }
    });
	
	
	{
var peopleCollection = new App.Collection.People([   
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
	}
]);

var peopleView = new App.Views.People({collection: peopleCollection});

$(document.body).append(peopleView.render().el);