var path = require('path');

var createPattern = function(file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var initSinon = function(files) {
    var sinonPath = path.join(path.dirname(require.resolve('sinon')), '..', 'pkg');
    files.unshift(createPattern(path.join(sinonPath, 'sinon.js')));
};

initSinon.$inject = ['config.files'];

module.exports = {
    'framework:sinon': ['factory', initSinon]
};
