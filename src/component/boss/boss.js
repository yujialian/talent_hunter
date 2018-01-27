import React from 'react'
import axios from 'axios'
import {Card,WhiteSpace, WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'
import UserCard from '../usercard/usercard'
import {getUserList} from '../../redux/chatuser.redux'
@connect (
  state => state.chatuser,
  {getUserList}//action
)
class Boss extends React.Component {
  componentDidMount() {
    this.props.getUserList('genius')
  }
  render() {
    //console.log(this.state)
    return (
      <UserCard userList={this.props.userList}></UserCard>
    )
  }
}
export default Boss
