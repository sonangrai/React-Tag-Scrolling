"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AppModule = _interopRequireDefault(require("../App.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tag = function Tag(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: _AppModule["default"].listItem
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: _AppModule["default"].link,
    href: data.url
  }, data.title));
};

var _default = Tag;
exports["default"] = _default;