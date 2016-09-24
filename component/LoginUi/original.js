import React from 'react'
require('./style.css')

export let LoginUi = React.createClass({
  render(){
    return (
      <div className='login-box'>
        <form onSubmit={this.props.handleSubmit}>
          <div className='login-input-username'><input type='text' ref='username' placeholder='请输入账号' className='login-input' defaultValue={localStorage.getItem('username')} onChange={this.props.newChange}/></div>
          <div className='login-input-password'><input type='password' ref='password' placeholder='请输入密码' className='login-input' /></div>
          <div className='login-div-input-checkbox'><input type='checkbox' className='login-input-checkbox' ref='check' checked = {this.props.checked} onChange={this.props.onChange} /><span>记住账号</span> </div>
          <div className='login-div-button'><button className='login-button'>登 陆</button></div>
        </form>
      </div>
    )
  }
})

