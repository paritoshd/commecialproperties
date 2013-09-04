define(function (require) {
    var $                   = require('jquery'),
        Backbone            = require('backbone'),
        mock    	        = require('mockjax'),
        Listing             = require('housing/models/listing');

    var ListingCollection = Backbone.Collection.extend({
		model: Listing,
		
		url: "api/listings",
		
		initialize: function() {
			$.mockjax({
				url : 'api/listings',
				type : 'GET',
				dataType: 'json',
				data: { search: "hoodi" },
				responseText : [
					    {
					    	'id': 1,
					    	'type': '2 BHK',
					    	'rent': 8000,
					    	'furnishing': 'semi-furnished',
					    	'area': '500 sq ft',
					    	'gps': '12.991:77.712',
					    	'phonenumber': '92654781554',
					    	'addr1': '#33, Sathya Sai Layout, ',
					    	'addr2': 'Basavanagar Main Road, ',
					    	'addr3': 'Hoodi'
					    },
					    {
					    	'id': 2,
					    	'type': '1 BHK',
					    	'rent': 5000,
					    	'furnishing': 'furnished',
					    	'area': '400 sq ft',
					    	'gps': '12.974:77.735',
					    	'phonenumber': '9967491554',
					    	'addr1': '#192/1, ITPL Main Road, ',
					    	'addr2': 'Mahadevpura Post, ',
					    	'addr3': 'Hoodi'
					    },
					    {
					    	'id': 3,
					    	'type': '3 BHK',
					    	'rent': 12000,
					    	'furnishing': 'semi-furnished',
					    	'area': '900 sq ft',
					    	'gps': '12.965:77.01',
					    	'phonenumber': '9968850124',
					    	'addr1': '#11/5, Basavanagar, ',
					    	'addr2': 'Near Florence School, ',
					    	'addr3': 'Hoodi'
					    }
				]
			});
			$.mockjax({
				url : 'api/listings',
				type : 'GET',
				dataType: 'json',
				data: { search: "whitefield" },
				responseText : [
					    {
					    	'id': 1,
					    	'type': '2 BHK',
					    	'rent': 8500,
					    	'furnishing': 'furnished',
					    	'area': '500 sq ft',
					    	'gps': '12.921:77.732',
					    	'phonenumber': '92654781554',
					    	'addr1': '#33, Near Charing Cross Hospital, ',
					    	'addr2': 'ITPL Main Road, ',
					    	'addr3': 'Whitefield'
					    },
					    {
					    	'id': 2,
					    	'type': '2 BHK',
					    	'rent': 9500,
					    	'furnishing': 'semi-furnished',
					    	'area': '550 sq ft',
					    	'gps': '12.971:77.733',
					    	'phonenumber': '9967491554',
					    	'addr1': '#371/12, Whitefield Main Road, ',
					    	'addr2': 'Ulsoor Post, ',
					    	'addr3': 'Whitefield'
					    }
				]
			});
			$.mockjax({
				url : 'api/listings',
				type : 'GET',
				dataType: 'json',
				data: { search: "indiranagar" },
				responseText : [
					    {
					    	'id': 1,
					    	'type': '1 BHK',
					    	'rent': 6000,
					    	'furnishing': 'furnished',
					    	'area': '500 sq ft',
					    	'gps': '12.901:77.012',
					    	'phonenumber': '92654781554',
					    	'addr1': '#07, Opposite Dominos Pizza, ',
					    	'addr2': 'Jagadamba Main Road, ',
					    	'addr3': 'Indiranagar'
					    },
					    {
					    	'id': 2,
					    	'type': '1 BHK',
					    	'rent': 5000,
					    	'furnishing': 'furnished',
					    	'area': '400 sq ft',
					    	'gps': '12.974:77.735',
					    	'phonenumber': '9967491554',
					    	'addr1': '#2/1, MGH Road, ',
					    	'addr2': 'New Colony Post, ',
					    	'addr3': 'Indiranagar'
					    },
					    {
					    	'id': 3,
					    	'type': '3 BHK',
					    	'rent': 12000,
					    	'furnishing': 'semi-furnished',
					    	'area': '1000 sq ft',
					    	'gps': '12.915:77.011',
					    	'phonenumber': '9968850124',
					    	'addr1': '#11/15, Hebbal, ',
					    	'addr2': 'Near Ulsur Police Station, ',
					    	'addr3': 'Indiranagar'
					    }
				]
			});
        },
		
		fetch: function(options) {
			var self = this;
			var query = options.data.search;
			$.ajax({
				url: "api/listings",
				dataType: 'json',
				data: {
                    search : query
                },
				success: function(data) {
					options.success(data);
				},
				async: false
			});	
		}
	});
	return ListingCollection;
});