/*global describe, it */
'use strict';
define( function( require ){
	var jquery = require('jquery'),
		Backbone = require('backbone'),
		_ = require('underscore');
	describe('Application', function() {		

		it('Jquery test', function() {
			expect( typeof jquery ).to.equal( 'function' );
		});

		it('Underscore test', function() {
			expect( typeof Backbone ).to.equal( 'object' );
		});

		it('_ test', function() {
			expect( typeof _ ).to.equal( 'function' );
		});
	});

} );
