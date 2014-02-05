
require.config({
    paths: {
        jquery: 'bower_components/jquery/jquery',
        underscore: 'bower_components/underscore/underscore',
        backbone: 'bower_components/backbone/backbone'
    },
    shim: {        
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }       
    }
});

require([ 'spec/test'], function(){


		mocha.run();
	/*	mocha.setup('bdd');

		// Require base tests before starting
	  require(['spec/test'], function(test){
	    // Start runner
	    mocha.run();
	  }); */

});

