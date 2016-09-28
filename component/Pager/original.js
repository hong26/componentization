import React from 'react'

export let Pager = React.createClass({
  getInitialState(){
    return {
      num:0,
      pages:[]
    }
  },
  componentWillReceiveProps(nextprops){
    if(nextprops.current!=this.props.current){
      this.getpages(nextprops.total,nextprops.pageSize)
    }else{
      this.getpages(this.props.total,this.props.pageSize)
    }
  },

  getpages(total,pageSize){
    let num=Math.ceil(total/pageSize)
    if(total!=0&&pageSize!=0){
      let pages=[]
      for(let i=0; i<num; i++){
        pages.push(i+1)
      }
      this.setState({
        pages:pages,
        num:num
      })
    }
  },
  onClick(item){
    this.props.onClick(item)
  },

  render(){
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
    let num=this.state.num
    let pages=this.state.pages
    let current=this.props.current

    if(pages!=undefined&&pages!=0&&pages!=null){
    return (
      <ul className='hong-pages-ul'>{pages.map((item,key)=>{
        if(num<9){
          if(item==current){
            return (
              <li key={key} className='hong-pages-current'><a>{item}</a></li>
            )
          }else {
            return (
              <li key={key} className='hong-pages-li' onClick={this.onClick.bind(this,item)}><a>{item}</a></li>
            )
          }
        }else if(num>=9){
          if(current<=5){
            if(item<=6){
              if(item==current){
                return (
                  <li key={key} className='hong-pages-current'><a>{item}</a></li>
                )
              }else{
                return (
                  <li key={key} className='hong-pages-li'
                  onClick={this.onClick.bind(this,item)}><a>{item}</a></li>
                )
              }
            }else if(item==7){
              return (
                <li key={key} className='hong-pages-li' onClick={this.onClick.bind(this,item)}><a>...</a></li>
              )
            }else if(item==8){
            return(
              <li key={key} className='hong-pages-li' onClick={this.onClick.bind(this,num)}><a>{num}</a></li>
            )
            }else{
              return
            }
          }else if(current>num-6){
            if(item==1){
              return (
                <li key={key} className='hong-pages-li' onClick={this.onClick.bind(this,item)}><a>{`<<`}</a></li>
              )
            }else if(item>=num-6){
              if(item==current){
                return (
                  <li key={key} className='hong-pages-current'><a>{item}</a></li>
                )
              }else{
                return (
                  <li key={key} className='hong-pages-li' onClick={this.onClick.bind(this,item)}><a>{item}</a></li>
                )
              }
            }
          }
          else{
            if(item==1){
              return (
                <li key={key} className='hong-pages-li' onClick={this.onClick.bind(this,item)}><a>{`<<`}</a></li>
              )
            }else if(item>current-3&&item<=current&&item!==1){
              if(item==current){
                return (
                  <li key={key} className='hong-pages-current'><a>{item}</a></li>
                )
              }else{
                return (
                  <li key={key} className='hong-pages-li' onClick={this.onClick.bind(this,item)}><a>{item}</a></li>
                )
              }
            }else if(item>current&&item<=current+3&&item!==num){
              if(item==current+3){
                return (
                  <li key={key} className='hong-pages-li' onClick={this.onClick.bind(this,item)}><a>...</a></li>
                )
              }else{
                return (
                  <li key={key} className='hong-pages-li' onClick={this.onClick.bind(this,item)}><a>{item}</a></li>
                )
              }
            }else if(item==num){
              return (
                <li key={key} className='hong-pages-li' onClick={this.onClick.bind(this,item)}><a>{item}</a></li>
              )
            }else {
              return
            }
          }
        }
      })}</ul>
    )}else {
      return <ul></ul>
    }
  }
})
