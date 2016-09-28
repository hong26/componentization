'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pager = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pager = exports.Pager = _react2.default.createClass({
  displayName: 'Pager',
  getInitialState: function getInitialState() {
    return {
      num: 0,
      pages: []
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextprops) {
    if (nextprops.current != this.props.current) {
      this.getpages(nextprops.total, nextprops.pageSize);
    } else {
      this.getpages(this.props.total, this.props.pageSize);
    }
  },
  componentWillMount: function componentWillMount() {
    this.getpages(this.props.total, this.props.pageSize);
  },
  getpages: function getpages(total, pageSize) {
    var num = Math.ceil(total / pageSize);
    if (total != 0 && pageSize != 0) {
      var pages = [];
      for (var i = 0; i < num; i++) {
        pages.push(i + 1);
      }
      this.setState({
        pages: pages,
        num: num
      });
    }
  },
  onClick: function onClick(item) {
    this.props.onClick(item);
  },

  propTypes: {
    total: _react2.default.PropTypes.number,
    pageSize: _react2.default.PropTypes.number,
    current: _react2.default.PropTypes.number,
    onClick: _react2.default.PropTypes.func
  },

  render: function render() {
    var _this = this;

    // let num=Math.ceil(this.props.total/this.props.pageSize)
    // let pages=(()=>{
    //   if(this.props.total!=0&&this.props.pageSize!=0){
    //   let pages=[]
    //   for(let i=0; i<num; i++){
    //     pages.push(i+1)
    //   }
    //   console.log(pages)
    //   return pages
    // }})()
    // console.log(pages)
    var num = this.state.num;
    var pages = this.state.pages;
    var current = this.props.current;

    if (pages != undefined && pages != 0 && pages != null) {
      return _react2.default.createElement(
        'ul',
        { className: 'hong-pages-ul' },
        pages.map(function (item, key) {
          if (num < 9) {
            if (item == current) {
              return _react2.default.createElement(
                'li',
                { key: key, className: 'hong-pages-current' },
                _react2.default.createElement(
                  'a',
                  null,
                  item
                )
              );
            } else {
              return _react2.default.createElement(
                'li',
                { key: key, className: 'hong-pages-li', onClick: _this.onClick.bind(_this, item) },
                _react2.default.createElement(
                  'a',
                  null,
                  item
                )
              );
            }
          } else if (num >= 9) {
            if (current <= 5) {
              if (item <= 6) {
                if (item == current) {
                  return _react2.default.createElement(
                    'li',
                    { key: key, className: 'hong-pages-current' },
                    _react2.default.createElement(
                      'a',
                      null,
                      item
                    )
                  );
                } else {
                  return _react2.default.createElement(
                    'li',
                    { key: key, className: 'hong-pages-li',
                      onClick: _this.onClick.bind(_this, item) },
                    _react2.default.createElement(
                      'a',
                      null,
                      item
                    )
                  );
                }
              } else if (item == 7) {
                return _react2.default.createElement(
                  'li',
                  { key: key, className: 'hong-pages-li', onClick: _this.onClick.bind(_this, item) },
                  _react2.default.createElement(
                    'a',
                    null,
                    '...'
                  )
                );
              } else if (item == 8) {
                return _react2.default.createElement(
                  'li',
                  { key: key, className: 'hong-pages-li', onClick: _this.onClick.bind(_this, num) },
                  _react2.default.createElement(
                    'a',
                    null,
                    num
                  )
                );
              } else {
                return;
              }
            } else if (current > num - 6) {
              if (item == 1) {
                return _react2.default.createElement(
                  'li',
                  { key: key, className: 'hong-pages-li', onClick: _this.onClick.bind(_this, item) },
                  _react2.default.createElement(
                    'a',
                    null,
                    '<<'
                  )
                );
              } else if (item >= num - 6) {
                if (item == current) {
                  return _react2.default.createElement(
                    'li',
                    { key: key, className: 'hong-pages-current' },
                    _react2.default.createElement(
                      'a',
                      null,
                      item
                    )
                  );
                } else {
                  return _react2.default.createElement(
                    'li',
                    { key: key, className: 'hong-pages-li', onClick: _this.onClick.bind(_this, item) },
                    _react2.default.createElement(
                      'a',
                      null,
                      item
                    )
                  );
                }
              }
            } else {
              if (item == 1) {
                return _react2.default.createElement(
                  'li',
                  { key: key, className: 'hong-pages-li', onClick: _this.onClick.bind(_this, item) },
                  _react2.default.createElement(
                    'a',
                    null,
                    '<<'
                  )
                );
              } else if (item > current - 3 && item <= current && item !== 1) {
                if (item == current) {
                  return _react2.default.createElement(
                    'li',
                    { key: key, className: 'hong-pages-current' },
                    _react2.default.createElement(
                      'a',
                      null,
                      item
                    )
                  );
                } else {
                  return _react2.default.createElement(
                    'li',
                    { key: key, className: 'hong-pages-li', onClick: _this.onClick.bind(_this, item) },
                    _react2.default.createElement(
                      'a',
                      null,
                      item
                    )
                  );
                }
              } else if (item > current && item <= current + 3 && item !== num) {
                if (item == current + 3) {
                  return _react2.default.createElement(
                    'li',
                    { key: key, className: 'hong-pages-li', onClick: _this.onClick.bind(_this, item) },
                    _react2.default.createElement(
                      'a',
                      null,
                      '...'
                    )
                  );
                } else {
                  return _react2.default.createElement(
                    'li',
                    { key: key, className: 'hong-pages-li', onClick: _this.onClick.bind(_this, item) },
                    _react2.default.createElement(
                      'a',
                      null,
                      item
                    )
                  );
                }
              } else if (item == num) {
                return _react2.default.createElement(
                  'li',
                  { key: key, className: 'hong-pages-li', onClick: _this.onClick.bind(_this, item) },
                  _react2.default.createElement(
                    'a',
                    null,
                    item
                  )
                );
              } else {
                return;
              }
            }
          }
        })
      );
    } else {
      return _react2.default.createElement('ul', null);
    }
  }
});
