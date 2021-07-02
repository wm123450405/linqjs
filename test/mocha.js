const { describe, it } = require('mocha');

describe('slim', function() {
    it('slim test failed', function(done) {
        require('./test');
        done();
    });
});
describe('full', function() {
    it('full test failed', function(done) {
        require('./full/test');
        done();
    });
});
