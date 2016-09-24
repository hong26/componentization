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

### Login组件,带状态(ui+state状态处理了记住账号的逻辑)
```
import React from 'react'
import {Login} from 'componentization-dome'
let LoginTest = React.createClass({
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

export default LoginTest
```


