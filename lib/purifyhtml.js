'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var posthtml = _interopDefault(require('posthtml'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var selectors = [];
var postHTMLSelectors = function postHTMLSelectors(tree) {
    // do something for tree
    selectors = [];
    tree.walk(function (node) {
        console.log(node);
    });
    return selectors;
};

var PurifyCssExtracterHtml = function () {
    function PurifyCssExtracterHtml() {
        classCallCheck(this, PurifyCssExtracterHtml);
    }

    createClass(PurifyCssExtracterHtml, null, [{
        key: "extract",
        value: function extract(content) {
            //let selectors = []
            selectors = [];
            posthtml().use(postHTMLSelectors).process(content, { sync: true });
            return selectors;
        }
    }]);
    return PurifyCssExtracterHtml;
}();

module.exports = PurifyCssExtracterHtml;
