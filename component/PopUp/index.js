"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopUp = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopUp = exports.PopUp = _react2.default.createClass({
    displayName: "PopUp",
    showPopUp: function showPopUp() {
        this.refs.div.style.display = "block";
        this.refs.box.style.display = "inline-block";
        this.resizePopUP();
        window.addEventListener('resize', this.resizePopUP);
    },
    resizePopUP: function resizePopUP() {
        var box = this.refs.box;
        box.style.zIndex = 100;
        box.style.position = "absolute";
        //返回元素的宽高度
        var boxWidth = box.offsetWidth;
        var boxheight = box.offsetHeight;
        //利用浏览器视口宽高度减去元素宽高度再除以一半得到居中值
        box.style.left = (window.innerWidth - boxWidth) / 2 + "px";
        box.style.top = (window.innerHeight - boxheight) / 2 + "px";
    },
    closePopUp: function closePopUp() {
        this.refs.div.style.display = "none";
        this.refs.box.style.display = "none";
        window.removeEventListener('resize', this.resizePopUP);
    },
    render: function render() {
        var defaultStyle = { "position": "absolute", "display": "none", "width": "100%", "height": "100%", "left": "0px", "top": "0px", "opacity": "0.50", "filter": "alpha(opacity=50)" };
        var divStyle = _extends({}, defaultStyle, { "backgroundColor": '#999999' });
        var customizeStyle = _extends({}, defaultStyle, { "backgroundColor": "" + this.props.background });
        var boxStyle = { "display": "none" };
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("div", { ref: "div", style: !!this.props.background ? customizeStyle : divStyle, onClick: this.closePopUp }),
            _react2.default.createElement(
                "div",
                { ref: "box", style: boxStyle },
                this.props.children
            )
        );
    }
});
