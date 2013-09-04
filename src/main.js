require.config({
    paths: {
    	jquery: '/commercialproperties/libs/jquery',
    	underscore: '/commercialproperties/libs/underscore',
    	backbone: '/commercialproperties/libs/backbone',
    	handlebarstemplatingengine: '/commercialproperties/libs/handlebars',
    	layoutManager: '/commercialproperties/libs/backbone.layoutmanager',
    	mockjax: '/commercialproperties/libs/jquery.mockjax',
    	housing: '/commercialproperties/src/modules/housing'
    },

    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'layoutManager': {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'LayoutManager'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'handlebarstemplatingengine', 'layoutManager', 'housing/routers/router'],function($, _, Backbone, HandlebarsTemplatingEngine, LayoutManager, Router) {
	Backbone.Layout.configure({
	    prefix: "/commercialproperties/src/modules/housing/templates/",
	
	    fetchTemplate: function(path) {
	        var done = this.async();
	
	        $.get(path + ".html", function(contents) {
	          done(contents);
	        });
	    },
	
	    renderTemplate: function(template, context) {
	       return Handlebars.compile(template)(context);
	    }
  	});

	app = window.app || {};
    app.router = new Router();
    Backbone.history.start();
});
