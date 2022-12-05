"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErroMsg = exports.Button = exports.Input = exports.Content = exports.HomeContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    font-size: 0.75rem;\n    color: red;\n    font-weight: 600;\n    margin-top: 1rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["   \n    height: 1.5rem;\n    border: 1px solid #000;\n    background: #000;\n    color: #fff;\n    border-radius: 0 .25rem .25rem 0;\n\n    &:focus,\n    &:active {\n        outline: none;\n        box-shadow: none;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid #ddd;\n    height: 1.5rem;\n    padding: 0 .5rem;\n    border-radius: .25rem 0 0 .25rem;\n\n    &:focus,\n    &:active {\n        outline: none;\n        box-shadow: none;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeContainer = _styledComponents["default"].div(_templateObject());

exports.HomeContainer = HomeContainer;

var Content = _styledComponents["default"].div(_templateObject2());

exports.Content = Content;

var Input = _styledComponents["default"].input(_templateObject3());

exports.Input = Input;

var Button = _styledComponents["default"].button(_templateObject4());

exports.Button = Button;

var ErroMsg = _styledComponents["default"].span(_templateObject5());

exports.ErroMsg = ErroMsg;
//# sourceMappingURL=styled.dev.js.map
