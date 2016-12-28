var Person = Backbone.Model.extend({// мясо жареное это класс
   defaults: {
       name: 'Pilmeshki',
       age: '691',
       job: 'Varilis'
   },
   validate:function(attrs){
	   console.log(attrs);
	   
	   if (attrs.age <= 0) {
		   return 'Возраст должен быть положительным!' ;
	   }
	   if (! attrs.name){
		   return 'Чувак, ты же не думаешь... ,что?';
	   }
   }//,
    //walk:function(){
       // return this.get('name')+ ' is walking.';
   // }
});
//var person = new Person;