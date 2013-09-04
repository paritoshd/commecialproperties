define(function (require) {
    var $                   = require('jquery'),
        Backbone            = require('backbone'),
        LayoutManager       = require('layoutManager');

    var TopSearchView = Backbone.Layout.extend({
    	template: "header-search",
    	
    	events : {
            "keypress #input-box" : "searchListings"
        },
        
    	serialize: function() {
    		return {};
    	},
    	
    	afterRender: function() {
    		var query = this.options.query;
    		$('#input-box').val(query);
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
    return TopSearchView;
});