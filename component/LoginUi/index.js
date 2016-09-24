'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginUi = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./style.css');

var LoginUi = exports.LoginUi = _react2.default.createClass({
  displayName: 'LoginUi',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'login-box' },
      _react2.default.createElement(
        'form',
        { onSubmit: this.props.handleSubmit },
        _react2.default.createElement(
          'div',
          { className: 'login-input-username' },
          _react2.default.createElement('input', { type: 'text', ref: 'username', placeholder: '请输入账号', className: 'login-input', defaultValue: localStorage.getItem('username'), onChange: this.props.newChange })
        ),
        _react2.default.createElement(
          'div',
          { className: 'login-input-password' },
          _react2.default.createElement('input', { type: 'password', ref: 'password', placeholder: '请输入密码', className: 'login-input' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'login-div-input-checkbox' },
          _react2.default.createElement('input', { type: 'checkbox', className: 'login-input-checkbox', ref: 'check', checked: this.props.checked, onChange: this.props.onChange }),
          _react2.default.createElement(
            'span',
            null,
            '记住账号'
          ),
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'login-div-button' },
          _react2.default.createElement(
            'button',
            { className: 'login-button' },
            '登 陆'
          )
        )
      )
    );
  }
});
