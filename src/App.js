import React from 'react'
import {
  connect
} from 'react-redux' //连接用，负责从外部获取组件所需要的参数
import {
  addGun,
  removeGun,
  addGunAsync
} from './index.redux'

//const mapStatetoProps = (state)=>{//将state放在属性(props)中。
//	return {num:state}
//}
//const actionCreators = { addGun, removeGun, addGunAsync}
//App = connect(mapStatetoProps,actionCreators)(App)//Automatiically put state and { addGun, removeGun, addGunAsync} into props.
@connect(
  //第一个属性：要state里的什么属性,并且放到props里
  state => ({
    num: state
  }),
  //你要什么方法，放到props里，自动dispatch
  {
    addGun,
    removeGun,
    addGunAsync
  }
  //mapStatetoProps,actionCreators)//效果和上面一样，但是经过装饰器优化后更加简洁。
)
class App extends React.Component {
  render() {
    //const store = this.props.store
    //const num = store.getState()//get data from redux
    return (
      <div>
				<h1>We have {this.props.num} guns right now</h1>
				<button onClick={this.props.addGun}>Get weapon</button>
				<button onClick={this.props.removeGun}>Give weapon</button>
				<button onClick={this.props.addGunAsync}>Get weapon after 2 days</button>
			</div>
    )
  }
}
export default App