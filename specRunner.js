
require.config({
    paths: {
        jquery: 'bower_components/jquery/jquery',
    },
    shim: {        
        jquery: {
            exports: '$'
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

