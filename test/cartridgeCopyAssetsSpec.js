/*eslint-env node, mocha */

var path   = require('path');
var chai   = require('chai');
var expect = chai.expect;

chai.use(require('chai-fs'));
chai.should();

var MOCK_PROJECT_DIR = path.join(process.cwd(), 'test', 'mock-project');

process.chdir(MOCK_PROJECT_DIR);

describe('As a gulpfile', function() {
	describe('when a task is included', function() {
		var basicrunner;

		before(function(done) {
			basicrunner = require(path.resolve(process.cwd(), 'basicrunner.js'));

			done();
		});

		it('should add one task to the default group', function() {
			expect(basicrunner.tasks.default.length).to.equal(1);
		});

		it('should add the copy-assets task to the default group', function() {
			expect(basicrunner.tasks.default[0]).to.equal('copy-assets');
		});

		it('should add one task to the watch group', function() {
			expect(basicrunner.tasks.watch.length).to.equal(1);
		});

		it('should add the watch:copy-assets task to the watch group', function() {
			expect(basicrunner.tasks.watch[0]).to.equal('watch:copy-assets');
		});
	});
});
