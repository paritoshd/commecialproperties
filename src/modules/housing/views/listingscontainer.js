define(function (require) {
    var $                   = require('jquery'),
        Backbone            = require('backbone'),
        LayoutManager       = require('layoutManager');

    var ContainerView = Backbone.Layout.extend({
    	template: "logo-search",
    	
    	events : {
            "keypress #input-box" : "searchListings"
        },
        
    	serialize: function() {
    		return {};
    	},
    	
    	searchListings : function(event) {
            var searchPhrase = $.trim($('#input-box').val());
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode === 13) {
                event.preventDefault();
                if (searchPhrase !== "") {
                	app.router.navigate("listings/" + searchPhrase, true);
                }
            }
        }
    });
    return ContainerView;
});