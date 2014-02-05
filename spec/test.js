/*global describe, it */
'use strict';
define( function( require ){
	var jquery = require('jquery');
	describe('Application', function() {
	/*	it('should bootstrap app taking View dependencies', function() {
			expect( typeof jquery ).to.equal( 'string' );
		}); */

		it('Backbone test', function() {
			expect( typeof jquery ).to.equal( 'function' );
		});

		it('Backbone test', function() {
			expect( typeof jquery ).to.equal( 'string' );
		});
	});

} );
