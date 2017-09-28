(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var _ = nx.is || require('next-is');

  nx.clone = function (target, source, deep) {
    var isPlainObject = nx.isPlainObject,
        isArray = nx.isArray;

    for (var key in source) {
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {};
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = [];
        nx.clone(target[key], source[key], deep);
      } else if (source[key] !== undefined) {
        target[key] = source[key];
      }
    }
    return target;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.clone;
  }

}());
