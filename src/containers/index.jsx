import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStore'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userInfo'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    this.state = {
      initDone: false
    }
  }

  render() {
    return (
      <div>
        {
          this.state.initDone
            ? this.props.children
            : <div>加载中</div>
        }
      </div>
    )
  }

  componentDidMount() {
    // 从localstorage获取城市
    let cityName = LocalStore.getItem(CITYNAME)
    if (cityName === null) {
      cityName = '深圳'
    }
    // 将城市信息存储到Redux中
    this.props.userInfoActions.update({
      cityName: cityName
    })
    this.setState({
      initDone: true
    })
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)