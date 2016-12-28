var app = app || {};

$(function () {

    app.MyObject = Backbone.Model.extend({
        defaults: {
            name: "name",
            description: "-",
            size: 100
        },
        initialize: function() {
            console.log('obj create');

            this.on('change', function (){
                console.log('obj change');
                var json  = app.myObect.changedAttributes();
                console.log(json);
            });
        },

        validate: function (attrs) {
            if(attrs.size>100) {
                console.log('Incorrect size');
                return 'Incorrect size';
            }
        },

        increaseSize: function() {
            app.myObect.set({
                size: this.get('size') + 100
            },{
                validate:true
            });
        }
    });

    app.myObect = new app.MyObject({
        name: "rocket",
        description: "super",
        class: "grenade"
    });

    app.myObect.set({
        type: "weapon",
        size: 250
    });

    console.log("size: "+app.myObect.get('size') +app.myObect.get('type'));

    //console.log ("size: "+app.MyObject.get('size'));

    var json  = app.myObect.toJSON();
    //console.log(json);
    //console.log ('size:', 'size:');

    //$('#myButton').live('click', function (){
      //  app.myObect.increaseSize();
    //});
});