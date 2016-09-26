import React from 'react'

export let LoginUi = React.createClass({

  handleSubmit(event){
    event.preventDefault()
    let obj={}
    obj.username = this.refs.username.value
    obj.password = this.refs.password.value
    this.props.handlesubmit(obj)
  },


  onChange(event){
    if(this.refs.check.checked){
      localStorage.setItem('username', this.refs.username.value)
      this.props.setChecked(true)
    }else{
      localStorage.removeItem('username')
      this.props.setChecked(false)
    }
  },

  newChange(){
    if(this.props.checked){
      localStorage.setItem('username', this.refs.username.value)
    }else{
      return
    }
  },

  render(){
    return (
      <div className='login-box'>
        <form onSubmit={this.handleSubmit}>
          <div className='login-input-username'><input type='text' ref='username' placeholder='请输入账号' className='login-input' defaultValue={localStorage.getItem('username')} onChange={this.newChange}/></div>
          <div className='login-input-password'><input type='password' ref='password' placeholder='请输入密码' className='login-input' /></div>
          <div className='login-div-input-checkbox'><input type='checkbox' className='login-input-checkbox' ref='check' checked = {this.props.checked} onChange={this.onChange} /><span>记住账号</span> </div>
          <div className='login-div-button'><button className='login-button'>登 陆</button></div>
        </form>
      </div>
    )
  }
})
