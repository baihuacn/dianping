import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import RouteMap from './router/routeMap'
import configureStore from './store/configureStore'

import './static/styles/common.less'
import './static/styles/font.css'

import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <RouteMap history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
