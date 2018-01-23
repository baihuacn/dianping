import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'
import Header from '../../components/header'
import CurrentCity from '../../components/currentCity'

class City extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
  }

  render() {
    return (
      <div>
        <Header title="选择城市"/>
        <CurrentCity cityName={this.props.userInfo.cityName}/>
      </div>
    )
  }

  componentDidMount() {

  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispathToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default  connect(
  mapStateToProps,
  mapDispathToProps
)(City)