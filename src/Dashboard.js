import React from 'react'
import {
  Link,
  Route
} from 'react-router-dom'
import App from './App'


function Erying() {
  return <h2>Second group</h2>
}

function Qibinglian() {
  return <h2>Ground army group</h2>
}
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
			  <ul>
			   <li>
			 	<Link to='/dashboard/'>一营</Link>
			   </li>
			  <li>
		 		<Link to='/dashboard/erying'>二营</Link>
		 </li>
		  <li>
		 	<Link to='/dashboard/qibinglian'>骑兵连</Link>
		  </li>
		 </ul>
		 <Route path='/dashboard/' exact component={App}></Route>
		 <Route path='/dashboard/erying' component={Erying}></Route>
		 <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
		</div>
    )
  }
}
export default Dashboard