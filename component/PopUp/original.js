import React from 'react'

export let PopUp = React.createClass({
    showPopUp() {
      this.refs.div.style.display = "block";
      this.refs.box.style.display = "inline-block";
      this.resizePopUP();
      window.addEventListener('resize', this.resizePopUP);
  },

  resizePopUP() {
      let box = this.refs.box;
      box.style.zIndex = 100;
      box.style.position = "absolute";
      //返回元素的宽高度
      var boxWidth = box.offsetWidth;
      var boxheight = box.offsetHeight;
      //利用浏览器视口宽高度减去元素宽高度再除以一半得到居中值
      box.style.left = (window.innerWidth - boxWidth) / 2 + "px";
      box.style.top = (window.innerHeight - boxheight) / 2+ "px";
  },

  closePopUp() {
     this.refs.div.style.display = "none";
     this.refs.box.style.display = "none";
     window.removeEventListener('resize', this.resizePopUP);
  },

  render() {
    let defaultStyle={"position":"absolute","display":"none","width":"100%","height":"100%","left":"0px","top":"0px","opacity": "0.50","filter": "alpha(opacity=50)"};
    let divStyle = {...defaultStyle, "backgroundColor":'#999999'};
    let customizeStyle= {...defaultStyle, "backgroundColor":`${this.props.background}`};
    let boxStyle = {"display":"none"};
    return (
      <div>
      <div ref="div" style={!!this.props.background ? customizeStyle : divStyle} onClick={this.closePopUp}></div>
          <div ref="box" style={boxStyle}>
              {this.props.children}
          </div>
      </div>
    );
  }
})



