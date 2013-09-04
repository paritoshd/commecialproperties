define(function (require) {
    var $                   = require('jquery'),
        Backbone            = require('backbone'),
        LayoutManager       = require('layoutManager'),
        ListingCollection   = require('housing/collections/listing-collection');

    var ListingsView = Backbone.Layout.extend({
    	template: "apartment-listings",
        
    	initialize : function() {
    		this.collection = new ListingCollection();
    		this.listingList = null;
        },
        
        beforeRender: function() {
        	var self = this;
    		self.collection.fetch({
                data : {
                    search : self.options.query
                },
                success : function(data) {
                    self.listingList = data;
                }
    		});
        },
        
    	serialize: function() {
    		var self = this;
    		return { listings: self.listingList };
    	}
    });
    return ListingsView;
});