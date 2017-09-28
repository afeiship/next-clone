var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-clone');

describe('next/clone', function () {

  it('clone pure object ', function () {
    var obj = { name: 'afei'};
    var obj2 = nx.clone({}, obj, true);

    assert.equal(obj2.name, 'afei');
    assert.equal(obj === obj2, false);
  });

  it('clone pure array ', function () {
    var obj = [1,2,3]
    var obj2 = nx.clone([], obj, true);

    assert.equal(obj2[2], 3);
    assert.equal(obj === obj2, false);
  });

});
