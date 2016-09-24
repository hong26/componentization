# componentization-dome

### 安装
```
npm install --save laolu87/componentization-dome
```

### 删除
```
npm uninstall --save componentization-dome
```

### 引入组件
```
import {Login} from 'componentization-dome'
//或
import {Login} from 'componentization-dome/component/Login'
```

#### Login组件,带状态(ui+state状态处理了记住账号的逻辑)
```
import React from 'react'
import {Login} from 'componentization-dome'
let Loginbox = React.createClass({
//按空格键或者点击登陆按钮会触发这个函数
  handlesubmit(value){
  //参数value会接收账号和密码输入框的值组成一个对象.
    console.log(value)
    //Object {username: "????", password: "????"}
  },

  render(){
    return (
      <div><Login handlesubmit={this.handlesubmit} /></div>
    )
  }
})

export default Loginbox
```

#### LoginUi组件(Login组件的无state实现)
```
//由于无状态,状态应该自行定义:
//接收三个必选参数
// handlesubmit:为一个函数,点击登陆按钮触发
// checked:为一个布尔值,用于判定记住账号是否为勾选状态
// setChecked:辅助判定是否记住账号

//示例:
import React from 'react'
import {LoginUi} from 'componentization-dome'
let Loginbox = React.createClass({
  getInitialState(){
    return {
      checked: false
    }
  },

    componentDidMount(){
    if(!!localStorage.getItem('username')){
      this.setState({
        checked: true,
      })
    }
  },

  handlesubmit(value){
    console.log(value)
  },

  setChecked(checked){
    this.setState({
      checked: checked
    })
  },

  render(){
    return (
      <div><LoginUi handlesubmit={this.handlesubmit} checked={this.state.checked} setChecked={this.setChecked}/></div>
    )
  }
})

export default Loginbox
```

#### Select组件
```
示例:
import React from 'react'
import {Select} from 'componentization-dome'
let SelectTest = React.createClass({
  getInitialState(){
    return {
      select:[
        {value:1, children:'Volvo'},
        {value:2, children:'saad'},
        {value:3, children:'opel'},
        {value:4, children:'Audi'}
      ],
      value:4
    }
  },

  onChange(value){
    console.log(value)
  },

  render(){
    return (
      <div><Select options={this.state.select} defaultValue={this.state.value} onChange={this.onChange}/></div>
    )
  }
})

export default SelectTest
```




