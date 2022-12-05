"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkHome = exports.ListItem = exports.List = exports.Title = exports.Container = void 0;

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    width: 4rem;\n    text-align: center;\n    margin: 2rem auto;\n    background-color: #000;\n    padding: .5rem 0;\n    color:#fff;\n    text-decoration: none;\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin: .5rem 0;\n    background: rgb(7, 65, 78);\n    color: #fff;\n    padding: .5rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    font-family: sans-serify;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    text-align: center;\n    font-size: 2rem;\n    font-family: sans-serif;\n    color:  #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 991px;\n    margin: 0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Title = _styledComponents["default"].h1(_templateObject2());

exports.Title = Title;

var List = _styledComponents["default"].ul(_templateObject3());

exports.List = List;

var ListItem = _styledComponents["default"].li(_templateObject4());

exports.ListItem = ListItem;
var LinkHome = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject5());
exports.LinkHome = LinkHome;
//# sourceMappingURL=styled.dev.js.map
