import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

import App from '../containers'
import Home from '../containers/home'
import City from '../containers/city'
import User from '../containers/user'
import Search from '../containers/search'
import Detail from '../containers/detail'
import NotFound from '../containers/404'

class RouteMap extends React.Component{
  render(){
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/city' component={City}/>
          <Route path='/user' component={User}/>
          <Route path='/search/:type(/:keyword)' component={Search}/>
          <Route path='/detail/:id' component={Detail}/>
          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

export default RouteMap