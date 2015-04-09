var rootdir = require('../');
var should = require('should');

describe('Api test', function() {
	it('should return rootpath string', function() {
		rootdir.should.be.type('string');
	});
});