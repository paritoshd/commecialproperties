define(function (require) {
    var $            	 = require('jquery'),
	    Backbone    	 = require('backbone'),
        LayoutManager    = require('layoutManager'),
        ContainerView    = require('housing/views/listingscontainer');

    return Backbone.Router.extend({
        routes: {
            "": "home",
            "listings(/:query)" : "displayListings"
        },

        home: function () {
        	var container = new Backbone.Layout({
	            template: "container",
	            
	            views: {
	                "#mid-container": new ContainerView()
                }
	        });
        	
        	$("#page-body").empty().append(container.el);
        	container.render();
        },
        
        displayListings : function(query) {
        	require(['housing/views/headersearch', 'housing/views/realestateslist'], function (TopSearchView, ListingsView) {
        		var search = new Backbone.Layout({
    	            template: "search",
    	            
    	            views: {
    	                "#header-search-box": new TopSearchView({query: query})
                    }
    	        });
            	$("#page-body").empty().append(search.el);
            	search.render();
            	
            	var listings = new Backbone.Layout({
    	            template: "listings",
    	            
    	            views: {
    	                "#apartment-listings": new ListingsView({query: query})
                    }
    	        });
            	$("#page-body").append(listings.el);
            	listings.render();
        	});
        }
    });
});
