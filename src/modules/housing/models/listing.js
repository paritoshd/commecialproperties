define(function (require) {
    var $                   = require('jquery'),
        Backbone            = require('backbone');

    var Listing = Backbone.Model.extend({
		urlRoot: "api/listings",
		
		defaults: {
			"id": null,
			"type": "",
			"rent": "",
			"furnishing": "",
			"area": "",
			"gps": "",
			"phonenumber": "",
			"addr1": "",
			"addr2": "",
			"addr3": ""
		}
	});
	return Listing;
});