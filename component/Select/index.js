'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = exports.Select = _react2.default.createClass({
  displayName: 'Select',
  onChange: function onChange() {
    this.props.onChange(this.refs.select.value);
  },
  render: function render() {
    var select = this.props.options.map(function (item, key) {
      return _react2.default.createElement(
        'option',
        { key: key, value: item.value },
        item.children
      );
    });
    return _react2.default.createElement(
      'select',
      { defaultValue: this.props.defaultValue, onChange: this.onChange, ref: 'select' },
      select
    );
  }
});
