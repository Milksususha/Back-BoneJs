$(function () {
	var object = {};

	_.extend(object, Backbone.Events);

	object.bind("alert", function(msg) {
		alert("Triggered " + msg);	
	});

    object.bind("alert", function(msg) {
        console.log("Triggered " + msg);
    });

	object.trigger("alert", "an event");

   $('#btn').bind('click', function (){
       object.trigger("alert", "clicked");
   });

});