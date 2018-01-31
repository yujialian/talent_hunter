import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Talent from '../../component/genius/genius'
import User from '../../component/user/user'
import {getMsgList, recvMsg} from '../../redux/chat.redux'
import Msg from '../../component/message/message'

@connect(
  state=>state,
  {getMsgList, recvMsg}
)
class DashBoard extends React.Component {
  componentDidMount() {
    if(!this.props.chat.chatmsg.length) {
      this.props.getMsgList(),
      this.props.recvMsg()//Once get into the app, recvMsg starts.
    }
  }
  render() {
    //console.log(this.props)
    const {pathname} = this.props.location
    const user = this.props.user //Get from redux
    const navList = [
      {
        path:'/boss',
        text:'Recruter',
        icon:'boss',
        title:'Talent List',
        component:Boss, //The component that need to be rendered.
        hide:user.type==="genius"
      },
      {
        path:'/talent',
        text:'Talent',
        icon:'job',
        title:'Boss List',
        component:Talent, //The component that need to be rendered.
        hide:user.type==='boss'
      },
      {
        path:'/msg',
        text:'Message',
        icon:'msg',
        title:'Message List',
        component:Msg, //The component that need to be rendered.
      },
      {
        path:'/me',
        text:'Me',
        icon:'user',
        title:'User center',
        component:User, //The component that need to be rendered.
      }
    ]
    return (
      <div>
        <NavBar className='fixed-header' mode='dark'>{navList.find(v=>v.path===pathname).title}</NavBar>
        <div style={{marginTop:45}}>
          <Switch>{/*Only hit one.*/}
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}

export default DashBoard
